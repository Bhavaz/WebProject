const express =require('express');
const userRouter = express.Router();
const registrationModel = require('../models/registrationModel');


//POST route for updating data
userRouter.post('/registration', function (req, res, next) {
  let user = new registrationModel(req.body);
  console.log(user);
  registrationModel.create(user)
    .then(user => {
      res.status(200).json({'Result': 'User added successfully'});
    })
    .catch(err => {
      console.log("Cannot add user");
      res.status(400).send(err);
    });
})

module.exports = userRouter;
