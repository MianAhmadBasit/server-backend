const express = require('express')
const router = express.Router();
const {home,register} = require("../controller/auth-controller")
// second way
const authcontroller = require("../controller/auth-controller")

// mount mean add 
router.route("/home").get(home);

// router.get("/" , (req,res)=> {
//     res.status(200).send("its home page suing router")
//  })

//  router.route("/home").get((req,res)=> {
//     res.status(200).send("welcome to second way of route");
//  })
// second pahse same work
router.route("/register").get(authcontroller.register)

 module.exports = router;