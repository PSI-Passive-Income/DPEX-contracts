import axios from 'axios';

export interface GasOracle {
  LastBlock: string;
  SafeGasPrice: string;
  ProposeGasPrice: string;
  FastGasPrice: string;
}

export default class EtherScanClient {
  public static async getGasOracle(): Promise<GasOracle> {
    const transactionsUrl = `https://api.etherscan.io/api?module=gastracker&action=gasoracle&apikey=${process.env.etherscanApiToken}`;

    const response = await axios.get(transactionsUrl);

    if (response.status === 200 && response.data && response.data.status === '1') {
      return response.data.result;
    }

    return null;
  }
}
