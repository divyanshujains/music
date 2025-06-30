const userModel = require('../models/user.model');      
const crypto = require('crypto');
const jwt = require('jsonwebtoken')


function hashPassword(password) {
    return crypto.createHash('sha256').update(password).digest('hex');
  }

async function registerUser(req, res) {

    const{name , password} = req.body;  
  const hashed = hashPassword(password);
  

  const user  = await userModel.create({
    name,   
    password: hashed    
});   


      res.status(201).json({
     message: 'User registered successfully',
     user  
    })

   
}

async function loginUser(req, res) {
    
    const { name, password } = req.body;

    const user = await userModel.findOne({ name });

    if(!user) {
        return res.status(404).json({ message: 'User not found' });
    }

    if(user.password !== hashPassword(password)) {
        return res.status(401).json({ message: 'Invalid password' });
    }

     const token = jwt.sign({userID: user._id}, 'secretKey')



    res.status(200).json({
         message: 'Login successful',
         token,
         user   
        
        });
}





module.exports = {registerUser , loginUser};