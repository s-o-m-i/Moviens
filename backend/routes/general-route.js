const express = require("express")
const router = express.Router()
const controllers = require("../controllers/general-controller")

router.route('/').get(controllers.Home)
router.route('/about').get(controllers.About)


module.exports = router;