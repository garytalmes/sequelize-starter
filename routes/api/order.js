const router = require("express").Router();
const { Customer, Order } = require("../../models");

// Get all orders
router.get("/", async (req, res) => {
  try {
    const result = await Order.findAll({
      include: [{ model: Customer }],
    })
    res.json({ status: "success", payload: result })
  } catch(err){
    res.status(400).json({ status: "error" })
  }
})

// Get order by id
router.get("/:id", async (req, res) => {
  try {
    const result = await Order.findByPk(req.params.id, {
      include: [{ model: Customer }],
    })
    res.json({ status: "success", payload: result })
  } catch(err){
    res.status(400).json({ status: "error" })
  }
})


// Create order
router.post("/", async (req, res) => {
  try {
    const result = await Order.create(req.body)
    res.json({ status: "success", payload: result })
  } catch(err){
    res.status(400).json({ status: "error", msg: err.message })
  }
})


// Update order
router.put("/:id", async (req, res) => {
  try {
    const result = await Order.update(req.body, { where: { id: req.params.id } } )
    res.json({ status: "success", payload: result })
  } catch(err){
    res.status(400).json({ status: "error" })
  }
})


// Delete order
router.delete("/:id", async (req, res) => {
  try {
    const result = await Order.destroy(req.params.id)
    res.json({ status: "success", payload: result })
  } catch(err){
    res.status(400).json({ status: "error" })
  }
})



module.exports = router;