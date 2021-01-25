// SPDX-License-Identifier: MIT

pragma solidity ^0.7.4;

contract Migrations {
  address public owner;
  uint256 public lastCompletedMigration;

  constructor() {
    owner = msg.sender;
  }

  modifier restricted() {
    require(msg.sender == owner, "This function is restricted to the contract's owner");
    _;
  }

  function setCompleted(uint completed) public restricted {
    lastCompletedMigration = completed;
  }

  function upgrade(address newAddress) public restricted {
    Migrations upgraded = Migrations(newAddress);
    upgraded.setCompleted(lastCompletedMigration);
  }
}