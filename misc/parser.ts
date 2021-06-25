import { ethers } from "ethers";
import {
  assetBondPosition,
  Information,
  InformationDigit,
  informationDigits,
  wholeNumber,
} from "./bitmapPosition";

informationDigits;

assetBondPosition;

wholeNumber;

const parser = (informationDigits: InformationDigit, wholeNumber: string) => {
  const result = <Information>{};

  const assetBondMask = assetBondPosition(informationDigits, wholeNumber);
  result.nonce = informationDigits.nonce;
};
