import { BigNumber, ContractTransaction, Overrides } from "ethers";
import { JsonRpcSigner } from "@ethersproject/providers";
import { ethers } from "hardhat";
import { IERC20 } from "../../typechain/IERC20";
import EtherScanClient, { GasOracle } from './EtherScanClient';

export default class ContractUtils {
    public static async getFastGasPrice(): Promise<BigNumber> {
        const oracle: GasOracle = await EtherScanClient.getGasOracle();
        if (oracle != null) {
            console.log(oracle.FastGasPrice);
            const oracleGasPrice: BigNumber = ethers.utils.parseUnits(oracle.FastGasPrice, 9);
            return this.percentage(oracleGasPrice, 150);
        } else {
            const gasPrice: BigNumber = await ethers.provider.getGasPrice();
            return this.percentage(gasPrice, 180);
        }
    }
    public static getGasPrice(gwei: number): BigNumber {
        console.log(gwei.toString());
        return ethers.utils.parseUnits(gwei.toString(), 9);
    }

    public static async waitForTransaction(action: Promise<ContractTransaction>, retries: number = 5, confirmations?: number, timeout?: number): Promise<void> {
        try {
            const transaction: ContractTransaction = await action;
            const receipt = await ethers.provider.waitForTransaction(transaction.hash);
            if (receipt.status === 1) return;
            console.error(`Transaction has wrong status, retries left: ${retries}, status: ${receipt.status}, hash: ${receipt.transactionHash}`);
        } catch(err) {
            console.error(`Transaction failed, retries left: ${retries}, error: ${err}`);
        }

        if (retries && retries > 0) {
            retries--;
            return await this.waitForTransaction(action, retries, confirmations, timeout);
        }
    }

    public static percentage(base: BigNumber, percentage: number): BigNumber{
        return base.mul(BigNumber.from(percentage)).div(BigNumber.from(100));
    }    
    public static delay(seconds: number): Promise<void> {
        return new Promise(resolve => setTimeout(resolve, seconds * 1000)); 
    }

    public static async checkAllowance(address: string, signer: JsonRpcSigner, token: IERC20, options?: Overrides) {
        const allowance = await token.allowance(signer._address, address);
        console.log(`user: ${signer._address}, contract: ${address}, token: ${token.address}, allowance: ${ethers.utils.formatEther(allowance)}`);
        if (allowance.lte(BigNumber.from(0))) {
            console.log(`Setting allowance for ${token.address}`);
            await ContractUtils.waitForTransaction(token.connect(signer).approve(address, 
                ethers.utils.parseEther("11579208923731619542357098500868790785326998")));
        }
    }
}