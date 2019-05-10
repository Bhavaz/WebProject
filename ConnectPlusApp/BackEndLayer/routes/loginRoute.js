const express =require('express');
const loginRouter = express.Router();
const registrationModel = require('../models/registrationModel');


loginRouter.post('/',function (req, res, next) {
  let user = new registrationModel(req.body);

  registrationModel.findOne({emailID : user.emailID}, function (err, data) {

    if( data != null ) {
      if (user.password == data.password) {
        res.json({message: "Success"});
      } else {
        res.json({message:"Invalid credentials"});
      }
    }
    else{
      res.json({message:'User doesnot exists'});
    }
  });
})

module.exports = loginRouter;
