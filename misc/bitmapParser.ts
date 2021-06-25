import { InformationDigit } from "./bitmapPosition";

const wholeNumber = "1".repeat(256);

const informationDigits: InformationDigit = {
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
const digits = [10, 8, 50, 28, 1, 28, 1, 40, 10, 10];
const numberStartPlace = [0, 10, 18, 68, 96, 97, 125, 126, 166, 176];
const numberEndPlace = [9, 17, 67, 95, 96, 124, 125, 165, 175, 185];
const infoArray = [
  61, 82, 111223334, 3750179, 1, 12702699, 1, 22021301, 12, 12,
];

const infoStartPlace = (informationDigits: object) => {};

// buffer, the remaining space in the token id
const bufferLength =
  wholeNumber.length - numberEndPlace[numberEndPlace.length - 1] - 1;
const buffer = "1".repeat(bufferLength);

const getInformationFullBinaryConcat = (
  wholeNumber: string,
  informationDigits: InformationDigit,
  digits: number[],
  infoArray: number[]
) => {
  // let result = buffer;
  const bufferLength = totalDigits(informationDigits);
  let position: number = 0;
  let buffer = "1".repeat(wholeNumber.length - bufferLength);
  let buffer1 = "1".repeat(wholeNumber.length - bufferLength);

  (Object.keys(informationDigits) as (keyof InformationDigit)[]).forEach(
    (key, i) => {
      const start = position;
      const end = position + informationDigits[key] - 1;

      buffer1 =
        buffer1 +
        getInformationFullBinary(
          digits[digits.length - i - 1],
          infoArray[digits.length - i - 1]
        );

      position += informationDigits[key];
    }
  );
  console.log(buffer, buffer1);
  return buffer;
};

const getInformationFullBinary = (digits: number, info: number) => {
  const binaryFullLength = digits;
  const binary = info.toString(2);
  const binaryLength = binary.length;
  const result = "0".repeat(binaryFullLength - binaryLength).concat(binary);
  return result;
};

const totalDigits = (informationDigits: InformationDigit) => {
  let result: number = 0;
  (Object.keys(informationDigits) as (keyof InformationDigit)[]).forEach(
    (key) => {
      result += informationDigits[key];
    }
  );
  return result;
};

console.log(
  getInformationFullBinaryConcat(
    wholeNumber,
    informationDigits,
    digits,
    infoArray
  )
);

// const setBinary = (
//   wholeNumber: string,
//   numbertartPlace: number[],
//   numberEndPlace: number[],
//   infArray: number[]
// ) => {
//   const bitmapArray = bitmapMaker(
//     wholeNumber,
//     numberStartPlace,
//     numberEndPlace
//   );
//   const bitmapMask: number = bitmapArray[0]
//   (wholeNumber & bitmapMask) |
// };

// const assembleAssetBondInformation = (
//   buffer: string,
//   nonce: number,
//   countryCode: number,
//   collateralServiceProviderIdentificationNumber: number,
//   collateralLatitude: number,
//   collateralLatitudeSign: number,
//   collateralLongitude: number,
//   collateralLongitudeSign: number,
//   collateralDetail: number,
//   collateralCategory: number,
//   productNumber: number
// ) => {
//   const binary = buffer.concat(
//     productNumber.toString(2),
//     collateralCategory.toString(2),
//     collateralDetail.toString(2),
//     collateralLongitudeSign.toString(2),
//     collateralLongitude.toString(2),
//     collateralLatitudeSign.toString(2),
//     collateralLatitude.toString(2),
//     collateralServiceProviderIdentificationNumber.toString(2)
//   );
//   console.log("binary", binary);
// };
