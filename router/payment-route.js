const express = require("express");
const router = express.Router();
const paymentController = require("../controllers/payment-controller");

router.route("/checkout").post(paymentController.checkout);
router.route("/verification").post(paymentController.verification);
router.route("/key").get(paymentController.key);

module.exports = router;
