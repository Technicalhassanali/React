let signupModel = require("../models/signup.models");
const bcrypt = require("bcrypt");
const saltRounds = 10;

var jwt = require("jsonwebtoken");
const privateKey = process.env.JWT_PRIVATE_KEY;
module.exports = {
  signupUser: async (req, res) => {
    try {
      let body = req.body;
      let checkUser = await signupModel.find({ email: body.email });
      if (checkUser.length > 0) {
        res.status(400).json({ message: "User already exists" });
        return;
      }
      const passwordHas = await bcrypt.hash(body.password, saltRounds);
      body.password = passwordHas;

      let user = await signupModel.create(body);
      jwt.sign(
        {
          id: user._id,
          email: user.email,
          name: user.name,
          isVerified: user.isVerified,
        },
        privateKey,
        { expiresIn: "1h" },
        (err, token) => {
          if (err) {
            console.log(err);
          }
          res.send(token);
        }
      );
    } catch (err) {
      console.log(err);
    }
    // console.log({data:req.body})
  },
  users: async (req, res) => {
    try {
      let users = await signupModel.find({});
      res.send(users);
    } catch (err) {
      console.log(err);
    }
  },
  login: async (req, res) => {
    try {
      let findUser = await signupModel.find({ email: req.body.email });
      if (findUser.length > 0) {
        let checkPassword = await bcrypt.compare(
          req.body.password,
          findUser[0].password
        );
        if (checkPassword) {
          jwt.sign(
            {
              id: findUser[0]._id,
              email: findUser[0].email,
              name: findUser[0].name,
              isVerified: findUser[0].isVerified,
            },
            privateKey,
            { expiresIn: "1h" },
            (err, token) => {
              if (err) {
                console.log(err);
              }
              res.send(token);
            }
          );
        } else {
          res.status(400).json({ message: "Password does not match" });
        }
      } else {
        res.status(400).json({ message: "User does not exist" });
        return;
      }
    } catch (err) {
      console.log(err);
    }
  },
  updateUsersData: async(req,res)=>{
    try{
      // let id = req.params.id;
        const filter = { _id: req.params.id };
        let{name,password} = req.body;
        const passwordHas = await bcrypt.hash(password, saltRounds);
        const update = { name,passwordHas};
        let findOne = await signupModel.findOne(filter);
        let findUpdate = await signupModel.findByIdAndUpdate(filter, { $set:update});

        res.send({message:"Record Update Successfully"});
     
    }catch(error){
      console.log(error)
    }
  },
  findUserByID: async(req,res)=>{
    try{
      let filter = {_id: req.params.id};
      let findUser = await signupModel.find(filter);
      if(findUser.length>0){
        res.send(findUser);
      }else{
        res.send({message:"user Not Found..."});
      }
      // res.send(filter)
    }catch(error){
      console.log(error);
    }
  }
};
