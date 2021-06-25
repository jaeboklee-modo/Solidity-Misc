import { Bitmap, Bitmap__factory } from "../typechain";
import { expect } from "chai";
import { ethers, waffle } from "hardhat";

describe("Bitmap", () => {
  let bitmapFactory: Bitmap__factory;
  let bitmap: Bitmap;

  const provider = waffle.provider;
  const [account] = provider.getWallets();

  beforeEach(async () => {
    bitmapFactory = (await ethers.getContractFactory(
      "Bitmap",
      account
    )) as Bitmap__factory;

    bitmap = await bitmapFactory.deploy();
  });

  context("test", async () => {
    it("test", async () => {
      const nonce = await bitmap.getNonce();
      console.log("result after in test:", nonce.toString());
      const countryCode = await bitmap.getCountryCode();
      console.log("result after in test:", countryCode.toString());
      const cspNumber =
        await bitmap.getCollateralServiceProviderIdentification();
      console.log("result after in test:", cspNumber.toString());
    });
  });
});
