// SPDX-License-Identifier: MIT
pragma solidity 0.8.4;

import "hardhat/console.sol";
import "./libraries/WadRayMath.sol";
import "./LToken.sol";

contract Mining {
    using WadRayMath for uint256;

    constructor(address lToken) {
        _lToken = LToken(lToken);
    }

    // ray : for obviating underflow error
    uint256 internal amountPerSecond = WadRayMath.ray();

    uint256 internal _lastUpdateTimestamp;

    uint256 internal _miningIndex;

    LToken internal _lToken;

    mapping(address => uint256) internal _userMiningIndex;
    mapping(address => uint256) internal _userLastUpdateTimestamp;

    function getUserMiningReward(address user) external view returns (uint256) {
        uint256 indexDiff = _miningIndex - _userMiningIndex[user];

        uint256 balance = _lToken.balanceOf(user);

        uint256 result = (balance * indexDiff);

        return result;
    }

    function updateMiningIndex() external {
        uint256 timeDiff = block.timestamp - _lastUpdateTimestamp;
        uint256 totalSupply = _lToken.totalSupply();

        // 1e9 : div for ray
        uint256 miningIndexDiff = (timeDiff * amountPerSecond) /
            totalSupply /
            1e9;

        _miningIndex += miningIndexDiff;
    }

    function mintLToken(uint256 amount) external {
        _lToken.mint(msg.sender, amount);
    }
}
