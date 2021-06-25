import "dotenv/config";
import "@nomiclabs/hardhat-waffle";
import "hardhat-typechain";
import "@typechain/ethers-v5";
// import "solidity-coverage"
// Gas-reporter's parser dependency makes Warning:
// Accessing non-existent property 'INVALID_ALT_NUMBER' of module exports inside circular dependency

import { HardhatUserConfig } from "hardhat/types";

const config: HardhatUserConfig = {
  solidity: {
    version: "0.8.4",
    settings: {
      outputSelection: {
        "*": {
          "*": ["storageLayout"],
        },
      },
      optimizer: {
        enabled: true,
      },
    },
  },
  networks: {
    hardhat: {},
  },
  paths: {
    sources: "./contracts",
    tests: "./test",
    cache: "./cache",
  },
};

export default config;
