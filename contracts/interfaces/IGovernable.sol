// SPDX-License-Identifier: MIT

pragma solidity ^0.7.4;

interface IGovernable {
    function isMastermind(address _address) external view returns (bool);
    function isGovernor(address _address) external view returns (bool);
    function isPartner(address _address) external view returns (bool);
    function isUser(address _address) external view returns (bool);
}
