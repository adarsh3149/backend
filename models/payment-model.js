const { Schema, model } = require("mongoose");
const paymentSchema = new Schema({
  razorpay_order_id: {
    type: String,
    require: true,
  },
  razorpay_payment_id: {
    type: String,
    require: true,
  },
  razorpay_signature: {
    type: String,
    require: true,
  },
});

const Payment = new model("Payment", paymentSchema);
module.exports = Payment;
