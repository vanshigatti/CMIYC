const Event = require("../models/Event");


/*
GET /events
Return all transfers
*/
exports.getEvents = async (req, res) => {
  try {
    const events = await Event
      .find()
      .sort({ blockNumber: -1 });

    res.json(events);

  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};



/*
GET /events/:address
Return transfers for specific wallet
*/
exports.getWalletEvents = async (req, res) => {
  try {
    const { address } = req.params;

    const events = await Event.find({
      $or: [
        { from: address },
        { to: address }
      ]
    }).sort({ blockNumber: -1 });

    res.json(events);

  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};



/*
GET /events/tx/:hash
Return one transaction
*/
exports.getTxByHash = async (req, res) => {
  try {
    const { hash } = req.params;

    const event = await Event.findOne({ txHash: hash });

    if (!event) {
      return res.status(404).json({ message: "Not found" });
    }

    res.json(event);

  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
