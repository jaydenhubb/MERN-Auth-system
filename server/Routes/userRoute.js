const express = require('express')
const router = express.Router()
const {registerUser, loginUser, logOutUser} = require("../Controllers/userController")

router.post('/register', registerUser)
router.post('/login', loginUser)
router.get('/logout', logOutUser)

module.exports = router