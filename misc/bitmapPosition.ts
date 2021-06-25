import BigNumber from "bignumber.js";
import { ethers } from "ethers";

// whole number string, uint256 111111 ... ~ 111
export const wholeNumber = "1".repeat(256);

export type InformationDigit = {
  nonce: number;
  countryCode: number;
  collateralServiceProviderIdentificationNumber: number;
  collateralLatitude: number;
  collateralLatitudeSign: number;
  collateralLongitude: number;
  collateralLongitudeSign: number;
  collateralDetail: number;
  collateralCategory: number;
  productNumber: number;
};

export type InformationPositions = {
  nonce: string;
  countryCode: string;
  collateralServiceProviderIdentificationNumber: string;
  collateralLatitude: string;
  collateralLatitudeSign: string;
  collateralLongitude: string;
  collateralLongitudeSign: string;
  collateralDetail: string;
  collateralCategory: string;
  productNumber: string;
};

export type Information = {
  nonce: number;
  countryCode: number;
  collateralServiceProviderIdentificationNumber: number;
  collateralLatitude: number;
  collateralLatitudeSign: number;
  collateralLongitude: number;
  collateralLongitudeSign: number;
  collateralDetail: number;
  collateralCategory: number;
  productNumber: number;
};

export const informationDigits: InformationDigit = {
  nonce: 10,
  countryCode: 8,
  collateralServiceProviderIdentificationNumber: 50,
  collateralLatitude: 28,
  collateralLatitudeSign: 1,
  collateralLongitude: 28,
  collateralLongitudeSign: 1,
  collateralDetail: 40,
  collateralCategory: 10,
  productNumber: 10,
};

// need refactor : it can be produced from the object 'informationDigits'

export const assetBondPosition = (
  informationDigits: InformationDigit,
  wholeNumber: string
) => {
  const positions = <InformationPositions>{};
  let position: number = 0;
  (Object.keys(informationDigits) as (keyof InformationDigit)[]).forEach(
    (key) => {
      const start = position;
      const end = position + informationDigits[key] - 1;

      const right: string = "1".repeat(start);
      const middle: string = "0".repeat(end - start + 1);
      const left: string = "1".repeat(wholeNumber.length - end - 1);

      position += informationDigits[key];

      const concatedString = left.concat(middle).concat(right);
      positions[key] = bigBinaryStringToHexString(concatedString);
    }
  );

  return positions;
};

const bigBinaryStringToHexString = (bigBinaryString: string) => {
  const bigNumberFromJS = new BigNumber(bigBinaryString, 2).toFixed();
  const bigNumberInHex = ethers.BigNumber.from(bigNumberFromJS).toHexString();
  return bigNumberInHex.toLocaleUpperCase();
};

const totalDigits = (informationDigits: InformationDigit) => {
  let result: number = -1;
  (Object.keys(informationDigits) as (keyof InformationDigit)[]).forEach(
    (key) => {
      result += informationDigits[key];
    }
  );
  return result;
};

console.log(totalDigits(informationDigits));

console.log(assetBondPosition(informationDigits, wholeNumber));

//answer
1111111111111111111111111111111111111111111111111111111111111111111111000000110000000011000000000000000001010100000000010010110101100001100000111010011111010111000000111001001110010010001100000000000000000000000110101000010010001000100110010100100000111101;
// test
1111111111111111111111111111111111111111111111111111111111111111111111000000110000000011000000000000000001010100000000010010110101100001100000111010011111010111000000111001001110010010001100000000000000000000000110101000010010001000100110010100100000111101;
1111111111111111111111111111111111111111111111111111111111111111111111000000110000000011000000000000000001010100000000010010110101100001100000111010011111010111000000111001001110010010001100000000000000000000000110101000010010001000100110010100100000111101;
