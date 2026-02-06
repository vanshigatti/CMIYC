const { ethers } = require("ethers");
const provider = require("../config/provider");
const Event = require("../models/Event");

const abi = [
  "event Transfer(address indexed from, address indexed to, uint256 value)"
];

const contract = new ethers.Contract(
  process.env.TOKEN_ADDRESS,
  abi,
  provider
);

const startListener = () => {
  console.log("Listening to token transfers...");

  contract.on("Transfer", async (from, to, value, event) => {
    try {
      const formattedValue = ethers.formatUnits(value, 18);

      console.log(
        `Transfer: ${formattedValue} tokens | ${from} -> ${to}`
      );

      await Event.create({
        from,
        to,
        value: formattedValue,
        txHash: event.transactionHash,
        blockNumber: event.blockNumber
      });

    } catch (err) {
      console.error("Listener DB error:", err.message);
    }
  });
};

module.exports = startListener;
