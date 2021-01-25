// SPDX-License-Identifier: MIT

pragma solidity ^0.7.4;

import "@openzeppelin/contracts/GSN/Context.sol";
import "@openzeppelin/contracts/utils/Address.sol";
import "../interfaces/IGovernable.sol";

abstract contract Governable is Context, IGovernable {
    using Address for address;

    //== Variables ==
    IGovernable public gov_contract; // contract governing the Token


    //== CONSTRUCTOR ==
    /**
     * @dev Initializes the contract setting the deployer as the initial Governor.
     */
    constructor (address _gov_contract) {
        require (_gov_contract.isContract(), "_gov_contract should be a contract");
        gov_contract = IGovernable(_gov_contract);
    }


    //== MODIFIERS ==
    modifier onlyMastermind() {
        require(isMastermind(_msgSender()), "Only mastermind is allowed");
        _;
    }
    modifier onlyGovernor() {
        require(isGovernor(_msgSender()), "Only governor is allowed");
        _;
    }
    modifier onlyPartner() {
        require(isPartner(_msgSender()), "Only partner is allowed");
        _;
    }


    //== VIEW ==
    function isMastermind(address _address) public override view returns (bool) {
        return gov_contract.isMastermind(_address);
    }
    function isGovernor(address _address) public override view returns (bool) {
        return gov_contract.isGovernor(_address);
    }
    function isPartner(address _address) public override view returns (bool) {
        return gov_contract.isPartner(_address);
    }
    function isUser(address _address) public override view returns (bool) {
        return gov_contract.isUser(_address);
    }


    //== SET INTERNAL VARIABLES==
    /**
     * @dev Change the governance contract
     * only mastermind is allowed to do this
     * @param _gov_contract Governance contract address
     */
    function setGovernanceContract(address _gov_contract) external onlyMastermind {
        gov_contract = IGovernable(_gov_contract);
    }
}