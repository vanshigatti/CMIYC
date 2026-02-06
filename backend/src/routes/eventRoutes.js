const router = require("express").Router();

const {
  getEvents,
  getWalletEvents,
  getTxByHash
} = require("../controllers/eventController");

router.get("/", getEvents);
router.get("/wallet/:address", getWalletEvents);
router.get("/tx/:hash", getTxByHash);

module.exports = router;
