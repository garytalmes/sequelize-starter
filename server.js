const express = require('express');
const sequelize = require('./config/connection');

const Customer = require("./models/Customer");

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.static("public"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


// Get all customers
app.get("/api/customer", async (req, res) => {
  try {
    const result = await Customer.findAll()
    res.json({ status: "success", payload: result })
  } catch(err){
    res.status(400).json({ status: "error" })
  }
})

// Get customer by id
app.get("/api/customer/:id", async (req, res) => {
  try {
    const result = await Customer.findByPk(req.params.id)
    res.json({ status: "success", payload: result })
  } catch(err){
    res.status(400).json({ status: "error" })
  }
})

// Create customer
app.post("/api/customer", async (req, res) => {
  try {
    const result = await Customer.create(req.body)
    res.json({ status: "success", payload: result })
  } catch(err){
    res.status(400).json({ status: "error" })
  }
})


// Update customer
app.put("/api/customer/:id", async (req, res) => {
  try {
    const result = await Customer.update(req.body, { where: { id: req.params.id } } )
    res.json({ status: "success", payload: result })
  } catch(err){
    res.status(400).json({ status: "error" })
  }
})

sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => console.log('Now listening'));
});
