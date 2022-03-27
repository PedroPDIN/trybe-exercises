const ping = (_req, res) => {
  try {
    res.status(200).json({ message: "pong!" });
  } catch (error) {
    res.status(500).end();
  }
};

module.exports = {
  ping,
};
