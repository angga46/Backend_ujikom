const router = require("express").Router();
const authController = require("../controllers/authController");

router.post("/api/v1/Login", authController.login);
// router.delete('/api/v1/kontak/delete/:id', kontakController.delete);
module.exports = router;