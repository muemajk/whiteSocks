// https://eips.ethereum.org/EIPS/eip-20
// SPDX-License-Identifier: MIT

pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract WhiteSocks is ERC20 {
    constructor (uint256 initialSupply) ERC20("WhiteSocks", "WS"){
        _mint(msg.sender, initialSupply);
    }
}