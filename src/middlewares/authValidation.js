const axios = require('axios');

const validate = async(req, res, next) => {
  const token = req.headers.authorization;
  console.log(token);
  if(!token) {
    return res.json({message: 'authorization token is missing', validated: false});
  }
  try{
    await axios({
      baseURL: 'http://localhost:4000',
      url: '/token/validate',
      method: 'get',
      headers: {
        authorization: token
      }
    });
    next();
  }
  catch(err){
    res.json({message: 'invalid token', validated: false, error: err.message});
  }
};

module.exports = { validate };