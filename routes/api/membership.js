const router = require("express").Router();
const { Customer, Order, Club, Membership } = require("../../models");


router.get("/", async (req, res) => {
  try {
    const result = await Membership.findAll()
    res.json({ status: "success", payload: result })
  } catch(err){
    res.status(400).json({ status: "error" })
  }
})


router.get("/:id", async (req, res) => {
  try {
    const result = await Membership.findByPk(req.params.id)
    res.json({ status: "success", payload: result })
  } catch(err){
    res.status(400).json({ status: "error" })
  }
})


router.post("/", async (req, res) => {
  try {
    const result = await Membership.create(req.body)
    res.json({ status: "success", payload: result })
  } catch(err){
    res.status(400).json({ status: "error", msg: err.message })
  }
})


router.put("/:id", async (req, res) => {
  try {
    const result = await Membership.update(req.body, { where: { id: req.params.id } } )
    res.json({ status: "success", payload: result })
  } catch(err){
    res.status(400).json({ status: "error" })
  }
})


router.delete("/:id", async (req, res) => {
  try {
    const result = await Membership.destroy(req.params.id)
    res.json({ status: "success", payload: result })
  } catch(err){
    res.status(400).json({ status: "error" })
  }
})


module.exports = router;