require("dotenv").config()

const express = require("express")
const app = express()
const cors = require("cors")
app.use(express.json())
app.use(express.static('public'));
app.use(
  cors({
    origin: '*',
        methods: 'GET,PUT,DELETE,POST,PATCH',
        allowedHeaders: 'Content-Type'
  })
)
app.use((req,res,next)=> {
  res.setHeader('Content-Type','application/json')
  next();
});
const stripe = require("stripe")(process.env.STRIPE_PRIVATE_KEY)

const storeItems = new Map([
  [1, { priceInCents: 3000, name: "My 15 Stocks" }],
  [2, { priceInCents: 2000, name: "My 5 Stocks" }],
])

app.post("/create-checkout-session-15", async (req, res) => {
  try {
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ["card"],
      mode: "payment",
      line_items: req.body.items.map(item => {
        const storeItem = storeItems.get(item.id)
        return {
          price_data: {
            currency: "usd",
            product_data: {
              name: storeItem.name,
            },
            unit_amount: storeItem.priceInCents,
          },
          quantity: item.quantity,
        }
      }),
      success_url: `${process.env.CLIENT_URL}`,
      cancel_url: `${process.env.CLIENT_URL}`,
    })
    res.json({ url: session.url })
  } catch (e) {
    console.log(e)
    res.status(500).json({ error: e.message })
  }
})

app.post("/create-checkout-session-5", async (req, res) => {
  try {
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ["card"],
      mode: "payment",
      line_items: req.body.items.map(item => {
        const storeItem = storeItems.get(item.id)
        return {
          price_data: {
            currency: "usd",
            product_data: {
              name: storeItem.name,
            },
            unit_amount: storeItem.priceInCents,
          },
          quantity: item.quantity,
        }
      }),
      success_url: `${process.env.CLIENT_URL}`,
      cancel_url: `${process.env.CLIENT_URL}`,
    })
    res.json({ url: session.url })
  } catch (e) {
    console.log(e)
    res.status(500).json({ error: e.message })
  }
})
app.get('/ping',(req,res)=>{
  res.send("helloworld");
})
app.listen(3001)
