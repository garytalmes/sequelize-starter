const router = require("express").Router();
const { Customer, Order, Club, Membership } = require("../../models");
const bcrypt = require("bcrypt");

// Get all customers
router.get("/", async (req, res) => {
  try {
    const result = await Customer.findAll({
      include: [{ model: Order }, { model: Club, through: Membership, as: 'club_memberships' }],
    })
    res.json({ status: "success", payload: result })
  } catch(err){
    res.status(400).json({ status: "error", msg: err.message })
  }
})

// Get customer by id
router.get("/:id", async (req, res) => {
  try {
    const result = await Customer.findByPk(req.params.id)
    res.json({ status: "success", payload: result })
  } catch(err){
    res.status(400).json({ status: "error" })
  }
})

// All login requests are handled here
router.post("/login", async (req, res) => {
  let emailCheck

  try {
    emailCheck = await Customer.findOne({
      where: {
        email: req.body.email
      }
    })
  } catch(err){
    res.status(400).json({ status: "error" })
  }

  if( !emailCheck ){
    return res.status(401).json({ status: "error" })
  }

  // if we are this far, then the email matched
  const hashedPassword = emailCheck.password

  // time to verify the hashed password 
  const verified = await bcrypt.compare(req.body.password, hashedPassword)

  if( verified ){
    res.status(200).json({ status: "success" })
  } else {
    res.status(401).json({ status: "error" })
  }

})


// All login requests are handled here: this version uses the instance method
router.post("/auth", async (req, res) => {
  let emailCheck

  try {
    emailCheck = await Customer.findOne({
      where: {
        email: req.body.email
      }
    })
  } catch(err){
    res.status(400).json({ status: "error" })
  }

  if( !emailCheck ){
    return res.status(401).json({ status: "error" })
  }
  // emailCheck is the Customer record (or instance) of whichever customer has the correct email address
  const passwordOk = await emailCheck.verifyPassword(req.body.password)

  if( passwordOk ){
    res.status(200).json({ status: "success" })
  } else {
    res.status(401).json({ status: "error" })
  }

})




// Create customer
router.post("/", async (req, res) => {
  try {
    const result = await Customer.create(req.body)
    res.json({ status: "success", payload: result })
  } catch(err){
    res.status(400).json({ status: "error" })
  }
})


// Update customer
router.put("/:id", async (req, res) => {
  try {
    const result = await Customer.update(req.body, { where: { id: req.params.id } } )
    res.json({ status: "success", payload: result })
  } catch(err){
    res.status(400).json({ status: "error" })
  }
})


// Delete customer
router.delete("/:id", async (req, res) => {
  try {
    const result = await Customer.destroy({
      where: {
        id: req.params.id
      }
    })
    res.json({ status: "success", payload: result })
  } catch(err){
    res.status(400).json({ status: "error", msg: err.message })
  }
})



module.exports = router;