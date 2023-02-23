const axios = require("axios");

const options = {
  method: 'GET',
  url: 'https://acobot-brainshop-ai-v1.p.rapidapi.com/get',
  params: {bid: '173015', key: 'A8QxzaX65MuRJooB', uid: 'VineBot', msg: 'Hello!'},
  headers: {
    'X-RapidAPI-Key': 'SIGN-A8QxzaX65MuRJooB-FOR-KEY',
    'X-RapidAPI-Host': 'acobot-brainshop-ai-v1.p.rapidapi.com'
  }
};

axios.request(options).then(function (response) {
	console.log(response.data);
}).catch(function (error) {
	console.error(error);
});