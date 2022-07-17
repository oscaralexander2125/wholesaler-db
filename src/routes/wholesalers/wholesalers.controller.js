const wholesalers = require("../../models/wholesalers.model");

function getAllWholesalers(req, res) {
  return res.status(200).json(wholesalers);
}

module.exports = {
  getAllWholesalers,
};
