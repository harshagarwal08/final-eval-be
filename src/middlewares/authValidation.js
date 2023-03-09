const axios = require('axios');

const validate = async(req, res, next) => {
  const token = req.headers.authorization;
  if(!token) {
    return res.json({message: 'authorization token is missing', validated: false});
  }
  try{
    const userData = await axios({
      baseURL: 'http://localhost:4000',
      url: '/token/validate',
      method: 'get',
      headers: {
        Authorization: token
      }
    });
    req.id = userData.data.id;
  }
  catch(err){
    res.json({message: 'invalid token', validated: false, error: err.message});
  }
  next();
};

module.exports = { validate };