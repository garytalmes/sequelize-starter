const router = require("express").Router();
const customerRoutes = require("./customer");
const orderRoutes = require("./order");
const clubRoutes = require("./club");
const membershipRoutes = require("./membership");


router.use("/customer", customerRoutes)
router.use("/order", orderRoutes)
router.use("/club", clubRoutes)
router.use("/membership", membershipRoutes)


module.exports = router;