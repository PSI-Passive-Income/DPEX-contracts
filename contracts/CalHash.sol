// SPDX-License-Identifier: MIT

pragma solidity ^0.7.4;

import "./DPexPair.sol";

contract CalHash {
    function getInitHash() public pure returns(bytes32){
        bytes memory bytecode = type(DPexPair).creationCode;
        return keccak256(abi.encodePacked(bytecode));
    }
}