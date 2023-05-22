const validateBody = require("./validateBody");
const isValidId = require("./isValidId");
const authenticate = require("../middlewares/authenticate");
const upload = require("../middlewares/upload");
const sendEmail = require("../helpers/sendEmail");

module.exports = {
  validateBody,
  isValidId,
  authenticate,
  upload,
  sendEmail,
};
