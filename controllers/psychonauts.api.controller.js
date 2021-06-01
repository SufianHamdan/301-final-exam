const superagent = require('superagent');
const psychonautsAPImodel = require('../models/psychonauts.api.model')

const getApiData = async (req, res) => {

  const url = `https://psychonauts-api.herokuapp.com/api/characters?limit=10`;

  await superagent.get(url).then(data => {
    const responsData = data.body.map(psychonauts => {

      return new psychonautsAPImodel(psychonauts);
      
    });

    res.send(responsData);

  }).catch(error => {
    console.log('========');
    console.log('Error Occurred');
    console.log(error);
    console.log('========');
  });


}

module.exports = {
  getApiData
}