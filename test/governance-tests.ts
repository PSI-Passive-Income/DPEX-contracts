import { ethers } from "hardhat";
import { SignerWithAddress } from "@nomiclabs/hardhat-ethers/dist/src/signer-with-address";
import { ContractFactory, Contract } from "ethers";
import { expect } from "chai";

describe("Governance", async function() {
  let Governance: ContractFactory;
  let governance: Contract;
  let owner: SignerWithAddress;
  let mastermind : SignerWithAddress;
  let governor : SignerWithAddress;
  let partner : SignerWithAddress;
  let user : SignerWithAddress;
  let extraAccount : SignerWithAddress;

  beforeEach(async () => {
    Governance = await ethers.getContractFactory("Governance");
    governance = await Governance.deploy();
    governance = await governance.deployed();
    [owner, mastermind, governor, partner, user, extraAccount] = await ethers.getSigners();
  });

  it("Deployer should be the mastermind", async function() {
    expect(await governance.isMastermind(owner.address)).to.equal(true);
  });
  it("Address is a user by default", async function() {
    expect(await governance.isUser(user.address)).to.equal(true);
  });
  it("Mastermind is able to add and remove a governor. Governor should not be a mastermind", async function() {
    await governance.setGovernanceLevel(governor.address, 2);
    expect(await governance.isMastermind(governor.address)).to.equal(false);
    expect(await governance.isGovernor(governor.address)).to.equal(true);
    await governance.setGovernanceLevel(governor.address, 0);
    expect(await governance.isGovernor(governor.address)).to.equal(false);
  });
  it("Governor is able to add and remove a partner, but not a governor. Partner should not be a governor or higher", async function() {
    await governance.setGovernanceLevel(governor.address, 2);
    await expect(governance.connect(governor).setGovernanceLevel(partner.address, 2)).to.be.reverted;
    await governance.connect(governor).setGovernanceLevel(partner.address, 1);
    expect(await governance.connect(governor).isGovernor(partner.address)).to.equal(false);
    expect(await governance.connect(governor).isPartner(partner.address)).to.equal(true);
    await await governance.connect(governor).setGovernanceLevel(partner.address, 0);
    expect(await await governance.connect(governor).isPartner(partner.address)).to.equal(false);
  });
  it("Partner is not able to add another partner", async function() {
    await governance.setGovernanceLevel(partner.address, 1);
    await expect(governance.connect(partner).setGovernanceLevel(user.address, 1)).to.be.reverted;
  });
  
  it("Governor is not able to remove a mastermind or another governor", async function() {
    await governance.setGovernanceLevel(mastermind.address, 3);
    await governance.setGovernanceLevel(governor.address, 2);
    await governance.setGovernanceLevel(extraAccount.address, 2);
    await expect(governance.connect(governor).setGovernanceLevel(mastermind.address, 0)).to.be.reverted;
    await expect(governance.connect(governor).setGovernanceLevel(extraAccount.address, 0)).to.be.reverted;
  });
  it("Partner is not able to lower governance level for a mastermind, governor or another partner", async function() {
    await governance.setGovernanceLevel(mastermind.address, 3);
    await governance.setGovernanceLevel(governor.address, 2);
    await governance.setGovernanceLevel(partner.address, 1);
    await governance.setGovernanceLevel(extraAccount.address, 1);
    await expect(governance.connect(partner).setGovernanceLevel(mastermind.address, 0)).to.be.reverted;
    await expect(governance.connect(partner).setGovernanceLevel(governor.address, 0)).to.be.reverted;
    await expect(governance.connect(partner).setGovernanceLevel(extraAccount.address, 0)).to.be.reverted;
  });
  it("User is not able to lower governance level for a mastermind, governor or another partner", async function() {
    await governance.setGovernanceLevel(mastermind.address, 3);
    await governance.setGovernanceLevel(governor.address, 2);
    await governance.setGovernanceLevel(partner.address, 1);
    await expect(governance.connect(user).setGovernanceLevel(mastermind.address, 0)).to.be.reverted;
    await expect(governance.connect(user).setGovernanceLevel(governor.address, 0)).to.be.reverted;
    await expect(governance.connect(user).setGovernanceLevel(partner.address, 0)).to.be.reverted;
  });

  it("Mastermind should be able to add and remove it's own governance level but not remove another mastermind", async function() {
    await governance.setGovernanceLevel(mastermind.address, 3);
    expect(await governance.isMastermind(mastermind.address)).to.equal(true);
    expect(await governance.isGovernor(mastermind.address)).to.equal(true);
    await expect(governance.setGovernanceLevel(mastermind.address, 0)).to.be.reverted;
    await governance.connect(mastermind).setGovernanceLevel(mastermind.address, 2);
    expect(await governance.isMastermind(mastermind.address)).to.equal(false);
    expect(await governance.isGovernor(mastermind.address)).to.equal(true);
  });
  it("Governor is only allowed to lower his own level", async function() {
    await governance.setGovernanceLevel(governor.address, 2);
    await expect(governance.connect(governor).setGovernanceLevel(governor.address, 3)).to.be.reverted;
    await governance.connect(governor).setGovernanceLevel(governor.address, 1);
    expect(await governance.connect(governor).isGovernor(governor.address)).to.equal(false);
    expect(await governance.connect(governor).isPartner(governor.address)).to.equal(true);
  });
  it("Partner is only allowed to lower his own level", async function() {
    await governance.setGovernanceLevel(partner.address, 1);
    await expect(governance.connect(partner).setGovernanceLevel(partner.address, 2)).to.be.reverted;
    await governance.connect(partner).setGovernanceLevel(partner.address, 0);
    expect(await governance.connect(partner).isPartner(partner.address)).to.equal(false);
    expect(await governance.connect(partner).isUser(partner.address)).to.equal(true);
  });
  it("User is not allowed to set his own level higher", async function() {
    await governance.setGovernanceLevel(user.address, 0);
    await expect(governance.connect(user).setGovernanceLevel(partner.address, 1)).to.be.reverted;
  });

  it("Should be possible for a governor to change the burn rate, fee rate and fee destination", async function() {
    await governance.setGovernanceLevel(governor.address, 2);
    await governance.connect(governor).changeBurnRate(10);
    await governance.connect(governor).changeFeeRate(10);
    await governance.connect(governor).setFeeDestination(governor.address);
  });
  it("Should not be possible for a partner or user to change the burn rate, fee rate and fee destination", async function() {
    await governance.setGovernanceLevel(partner.address, 1);
    await expect(governance.connect(partner).changeBurnRate(10)).to.be.reverted;
    await expect(governance.connect(partner).changeFeeRate(10)).to.be.reverted;
    await expect(governance.connect(partner).setFeeDestination(partner.address)).to.be.reverted;
    await expect(governance.connect(user).changeBurnRate(10)).to.be.reverted;
    await expect(governance.connect(user).changeFeeRate(10)).to.be.reverted;
    await expect(governance.connect(user).setFeeDestination(partner.address)).to.be.reverted;
  });

  it("Should be possible for a mastermind to kill the contract, but not for a partner, governor or user", async function() {
    await governance.setGovernanceLevel(governor.address, 2);
    await governance.setGovernanceLevel(partner.address, 1);
    await expect(governance.connect(governor).killContract()).to.be.reverted;
    await expect(governance.connect(partner).killContract()).to.be.reverted;
    await expect(governance.connect(user).killContract()).to.be.reverted;
    await governance.killContract();
  });

  it("Should emit GovernanceLevelChanged event on level change", async function() {
    await expect(governance.setGovernanceLevel(governor.address, 2))
      .to.emit(governance, 'GovernanceLevelChanged')
      .withArgs(governor.address, 0, 2);
  });
  it("Should emit BurnRateChanged event on burn rate change", async function() {
    await expect(governance.changeBurnRate(15))
      .to.emit(governance, 'BurnRateChanged')
      .withArgs(0, 15);
  });
  it("Should emit FeeRateChanged event on fee rate change", async function() {
    await expect(governance.changeFeeRate(15))
      .to.emit(governance, 'FeeRateChanged')
      .withArgs(0, 15);
  });
  it("Should emit FeeDestinationChanged event on fee destination change", async function() {
    await expect(governance.setFeeDestination(governor.address))
      .to.emit(governance, 'FeeDestinationChanged')
      .withArgs(owner.address, governor.address);
  });
});
