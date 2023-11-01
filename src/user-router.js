const Router = require('../FrameWork/Router');
const controler = require("./user-controller")
const router = new Router();

router.get("/users", controler.getUsers)
router.post("/users", controler.createUser)

module.exports = router;

