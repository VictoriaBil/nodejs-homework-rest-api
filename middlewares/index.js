const validateBody = require("./validateBody");
const isValidId = require("./isValidId");
const authenticate = require("../middlewares/authenticate");
const upload = require("../middlewares/upload");

module.exports = {
  validateBody,
  isValidId,
  authenticate,
  upload,
};
