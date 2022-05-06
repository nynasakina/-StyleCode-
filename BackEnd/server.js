// DEPENDENCIES
// require("dotenv").config();
const dotenv = require("dotenv");
dotenv.config();

const express = require("express");
const cors = require("cors");
const app = express();
const mongoose = require("mongoose");
const session = require("express-session");
const MongoDBStore = require("connect-mongodb-session")(session);
const stripecontroller = require("./controllers/stripe");
const stripe = require("stripe")(process.env.REACT_STRIPE_KEY);

const PORT = 5001;

// MIDDLEWARE
app.use(cors());
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// DB CONNECTION
mongoose.connect("mongodb://localhost:27017/StyleCode");
mongoose.connection.once("open", () => {
  console.log("connected to mongomango");
});

// ROUTER/CONTROLLER
const mainController = require("./controllers/mainController");
app.use("/", mainController);

app.use("/stripe", stripecontroller);

const Products = require("./models/Product.js");

app.post("/paymenttest", async (req, res) => {
  let purchases = req.body;
  purchases.products.push({ name: "Shipping", price: 5.5, quantity: 1 });
  // console.log(purchases)
  try {
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ["card", "grabpay", "paynow", "alipay"],
      shipping_address_collection: {
        allowed_countries: ["SG"],
      },
      mode: "payment",
      line_items: purchases.products.map((item) => {
        return {
          price_data: {
            currency: "sgd",
            product_data: {
              name: `${item.name}`,
            },
            unit_amount: item.price * 100,
          },
          quantity: item.quantity,
        };
      }),
      success_url: `http://localhost:3000/paymentsuccess`,
      cancel_url: `http://localhost:3000`,
    });
    res.json({ url: session.url });
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
});

// Listener
app.listen(PORT, () => {
  console.log(`server started on port ${PORT}`);
});
