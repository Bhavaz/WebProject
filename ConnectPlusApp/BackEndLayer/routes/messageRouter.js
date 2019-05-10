const express =require('express');
const messageRouter = express.Router();
var returnRouter = function(io , users) {


// Method to mark attendance to student
  messageRouter.get('/getusers', function(req,res, next){

    res.json(Object.keys(users));
  })

  messageRouter.post('/sendmessage', function (req, res, next) {

   console.log(req.body);

    io.sockets.in(users[req.body['to']]).emit('Message', {message:req.body['message']});



  });



  return messageRouter;

}

module.exports =  returnRouter;

