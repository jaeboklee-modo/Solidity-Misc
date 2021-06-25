// SPDX-License-Identifier: MIT
pragma solidity 0.8.4;

import "hardhat/console.sol";

contract Bitmap {
    uint256 constant NONCE =
        0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFC00;
    uint256 constant COUNTRY_CODE =
        0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFC03FF;
    uint256 constant COLLATERAL_SERVICE_PROVIDER_IDENTIFICATION_NUMBER =
        0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF0000000000003FFFF;
    uint256 constant COLLATERAL_LATITUDE =
        0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF0000000FFFFFFFFFFFFFFFFF;
    uint256 constant COLLATERAL_LATITUDE_SIGNS =
        0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFEFFFFFFFFFFFFFFFFFFFFFFFF;
    uint256 constant COLLATERAL_LONGITUDE =
        0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFE0000001FFFFFFFFFFFFFFFFFFFFFFFF;
    uint256 constant COLLATERAL_LONGITUDE_SIGNS =
        0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFDFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF;
    uint256 constant COLLATERAL_DETAILS =
        0xFFFFFFFFFFFFFFFFFFFFFFC0000000003FFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF;
    uint256 constant COLLATERAL_CATEGORY =
        0xFFFFFFFFFFFFFFFFFFFF003FFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF;
    uint256 constant PRODUCT_NUMBER =
        0xFFFFFFFFFFFFFFFFFC00FFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF;

    uint256 constant NONCE_START = 0;
    uint256 constant COUNTRY_CODE_START = 10;
    uint256 constant COLLATERAL_SERVICE_PROVIDER_IDENTIFICATION_NUMBER_START =
        18;
    uint256 constant COLLATERAL_LATITUDE_START = 68;
    uint256 constant COLLATERAL_LATITUDE_SIGNS_START = 96;
    uint256 constant COLLATERAL_LONGITUDE_START = 97;
    uint256 constant COLLATERAL_LONGITUDE_SIGNS_START = 125;
    uint256 constant COLLATERAL_DETAILS_START = 126;
    uint256 constant COLLATERAL_CATEGORY_START = 166;
    uint256 constant PRODUCT_NUMBER_START = 176;

    function getNonce(uint256 tokenId) external pure returns (uint256) {
        return tokenId & ~NONCE;
    }

    function getCountryCode(uint256 tokenId) external pure returns (uint256) {
        return (tokenId & ~COUNTRY_CODE) >> COUNTRY_CODE_START;
    }

    function getCollateralServiceProviderIdentification(uint256 tokenId)
        external
        pure
        returns (uint256)
    {
        return
            (tokenId & ~COLLATERAL_SERVICE_PROVIDER_IDENTIFICATION_NUMBER) >>
            COLLATERAL_SERVICE_PROVIDER_IDENTIFICATION_NUMBER_START;
    }

    function getCollateralLatitude(uint256 tokenId)
        external
        pure
        returns (uint256)
    {
        return (tokenId & ~COLLATERAL_LATITUDE) >> COLLATERAL_LATITUDE_START;
    }

    function getCollateralLatitudeSigns(uint256 tokenId)
        external
        pure
        returns (uint256)
    {
        return
            (tokenId & ~COLLATERAL_LATITUDE_SIGNS) >>
            COLLATERAL_LATITUDE_SIGNS_START;
    }

    function getCollateralLongitude(uint256 tokenId)
        external
        pure
        returns (uint256)
    {
        return (tokenId & ~COLLATERAL_LONGITUDE) >> COLLATERAL_LONGITUDE_START;
    }

    function getCollateralLongitudeSigns(uint256 tokenId)
        external
        pure
        returns (uint256)
    {
        return
            (tokenId & ~COLLATERAL_LONGITUDE_SIGNS) >>
            COLLATERAL_LONGITUDE_SIGNS_START;
    }

    function getCollateralDetails(uint256 tokenId)
        external
        pure
        returns (uint256)
    {
        return (tokenId & ~COLLATERAL_DETAILS) >> COLLATERAL_DETAILS_START;
    }

    function getCollateralCategory(uint256 tokenId)
        external
        pure
        returns (uint256)
    {
        return (tokenId & ~COLLATERAL_CATEGORY) >> COLLATERAL_CATEGORY_START;
    }

    function getProductNumber(uint256 tokenId) external pure returns (uint256) {
        return (tokenId & ~PRODUCT_NUMBER) >> PRODUCT_NUMBER_START;
    }
}
