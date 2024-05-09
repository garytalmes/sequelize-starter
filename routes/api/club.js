const router = require("express").Router();
const { Customer, Order, Club } = require("../../models");


router.get("/", async (req, res) => {
  try {
    const result = await Club.findAll()
    res.json({ status: "success", payload: result })
  } catch(err){
    res.status(400).json({ status: "error" })
  }
})


router.get("/:id", async (req, res) => {
  try {
    const result = await Club.findByPk(req.params.id)
    res.json({ status: "success", payload: result })
  } catch(err){
    res.status(400).json({ status: "error" })
  }
})


router.post("/", async (req, res) => {
  try {
    const result = await Club.create(req.body)
    res.json({ status: "success", payload: result })
  } catch(err){
    res.status(400).json({ status: "error", msg: err.message })
  }
})


router.put("/:id", async (req, res) => {
  try {
    const result = await Club.update(req.body, { where: { id: req.params.id } } )
    res.json({ status: "success", payload: result })
  } catch(err){
    res.status(400).json({ status: "error" })
  }
})


router.delete("/:id", async (req, res) => {
  try {
    const result = await Club.destroy(req.params.id)
    res.json({ status: "success", payload: result })
  } catch(err){
    res.status(400).json({ status: "error" })
  }
})


module.exports = router;