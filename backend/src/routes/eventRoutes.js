const router = require("express").Router();
const Event = require("../models/Event"); // add this import

const {
  getEvents,
  getWalletEvents,
  getTxByHash
} = require("../controllers/eventController");

router.get("/", getEvents);
router.get("/wallet/:address", getWalletEvents);
router.get("/tx/:hash", getTxByHash);



// 🔥 TEMP TEST ROUTE (add here)
router.post("/test", async (req, res) => {
  try {
    const event = await Event.create({
      from: "0xTestFrom",
      to: "0xTestTo",
      value: "100",
      txHash: "0x123",
      blockNumber: 1
    });

    res.json(event);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});


module.exports = router;
