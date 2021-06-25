// SPDX-License-Identifier: MIT
pragma solidity 0.8.4;

import "hardhat/console.sol";
import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract LToken is ERC20 {
    constructor() ERC20("lToken", "lToken") {}

    function mint(address user, uint256 amount) public {
        _mint(user, amount);
    }
}
