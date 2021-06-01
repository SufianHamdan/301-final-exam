const mongoose = require('mongoose'); 

const psychonautsSchema = mongoose.Schema ({

  name: {
    type: String,
    trim: true,
    unique: true,
    lowercase: true
  },

  slug: {
    type: String,
    trim: true,
    unique: true,
    lowercase: true
  },
  gender: String,
  img: String,
  psiPowers: Array
  
})

const psychonautsModel = mongoose.model('psychonauts' , psychonautsSchema);

module.exports = psychonautsModel;