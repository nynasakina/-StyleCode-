const router = require("express").Router();
const dotenv = require("dotenv");

const stripe = require("stripe")(process.env.REACT_STRIPE_KEY);

router.post("/payment", async (req, res) => {
  // console.log(process.env.REACT_STRIPE_KEY);
  const charge = await stripe.charges.create(
    {
      source: req.body.tokenId,
      amount: req.body.amount,
      currency: "sgd",
    },

    (stripeErr, stripeRes) => {
      if (stripeErr) {
        res.status(500).json(stripeErr);
      } else {
        res.status(200).json(stripeRes);
      }
    }
  );
});

module.exports = router;
