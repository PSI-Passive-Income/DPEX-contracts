// SPDX-License-Identifier: MIT

pragma solidity ^0.7.4;

import "../interfaces/ICHI.sol";
import "./Governable.sol";

abstract contract SafeGas is Governable {
    /**
     * @notice frees CHI from msg.sender to reduce gas costs
     * @dev requires that msg.sender has approved this contract to use their CHI
     */
    modifier useCHI {
        uint256 gasStart = gasleft();
        _;
        //uint256 gasSpent = 21000 + gasStart - gasleft() + (16 * msg.data.length);
        ICHI(gasToken()).freeFromUpTo(msg.sender, 
            ((21000 + gasStart - gasleft() + (16 * msg.data.length)) + 14154) / 41947);
    }
}