import "dotenv/config";
import "@nomiclabs/hardhat-etherscan";
import "hardhat-typechain";
import "./tasks/mining.ts";

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
    mainnet: {
      url: `https://mainnet.infura.io/v3/${process.env.INFURA_API_KEY}`,
      accounts: [process.env.ADMIN || ""],
      chainId: 1,
    },
    kovan: {
      url: `https://kovan.infura.io/v3/${process.env.INFURA_API_KEY}`,
      accounts: {
        mnemonic: process.env.TEST_MNEMONIC,
      },
      chainId: 42,
    },
    ganache: {
      url: "http://0.0.0.0:8545",
    },
  },
  etherscan: {
    apiKey: process.env.ETHERSCAN_API_KEY,
  },
  paths: {
    sources: "./contracts",
    tests: "./test",
    cache: "./cache",
  },
  mocha: {
    reporter: "eth-gas-reporter",
    reporterOptions: {
      currency: "KRW",
      showTimeSpent: true,
    },
  },
};

export default config;
