// SPDX-License-Identifier: MIT

pragma solidity ^0.7.4;

import "@openzeppelin/contracts/GSN/Context.sol";
import "@openzeppelin/contracts/access/AccessControl.sol";
import "@openzeppelin/contracts/utils/Address.sol";
import "@openzeppelin/contracts/math/SafeMath.sol";
import "./interfaces/IGovernable.sol";

contract DPexGovernance is IGovernable, Context {
    using SafeMath for uint256;
    using Address for address;

    //== Variables ==
    /**
     * @dev multi tiered governance logic
     * 
     * 0: users (default)
     * 10: voting contracts, partners
     * 50: governors
     * 100: mastermind
     * 
    */
    mapping(address => uint256) public governanceLevels;


    //== EVENTS ==
    event GovernanceLevelChanged(address indexed addressChanged, uint256 oldLevel, uint256 newLevel);


    //== CONSTRUCTOR ==
    /**
     * @dev Initializes the contract setting the deployer as the initial Governor.
     */
    constructor () {
        _setGovernanceLevel(_msgSender(), 100);
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
    function viewGovernanceLevel(address _address) public view returns(uint256) {
        return governanceLevels[_address];
    }
    function isMastermind(address _address) public override view returns (bool) {
        return viewGovernanceLevel(_address) >= 100;
    }
    function isGovernor(address _address) public override view returns (bool) {
        return viewGovernanceLevel(_address) >= 50;
    }
    function isPartner(address _address) public override view returns (bool) {
        return viewGovernanceLevel(_address) >= 10;
    }
    function isUser(address _address) public override view returns (bool) {
        return viewGovernanceLevel(_address) == 0;
    }


    //== SET INTERNAL VARIABLES==
    /**
    * @dev only Mastermind can kill contract to clean network space
    */
    function killContract() external onlyMastermind {
        selfdestruct(_msgSender()); //destroys the contract
    }
    /**
     * @dev Setting a new governance level for the address ('_address').
     * only allowed to change levels below or lower your own level
     * @param _address Address to set the governance level for
     * @param _level Governance level (see variable multi tiered governance logic)
     */
    function setGovernanceLevel(address _address, uint256 _level) external {
        require(_address != address(0), "Invalid, governanceLevel is address(0)");
        require(
            (_level < 100 && governanceLevels[_msgSender()] > _level) || 
            (_level >= 100 && governanceLevels[_msgSender()] >= _level), 
            "Governance level to low"
        );
        require(
            governanceLevels[_msgSender()] > governanceLevels[_address] ||
            _msgSender() == _address, 
            "Sender level is lower than address level"
        );
        _setGovernanceLevel(_address, _level);
    }
    function _setGovernanceLevel(address _address, uint256 _level) internal virtual {
        uint256 oldLevel = governanceLevels[_address];
        governanceLevels[_address] = _level;
        emit GovernanceLevelChanged(_address, oldLevel, _level);
    }
}