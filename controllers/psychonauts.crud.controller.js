const psychonautsModel = require('../models/psychonauts.crud.model');

// POST Controller for creating a new data item in our DB 

const createFavoriteItem = async (req, res) => {

  const {
    name,
    gender,
    img,
    psiPowers
  } =req .body;

  const slug = name.toLowerCase().split(' ').join('-');

  psychonautsModel.find({slug: slug}, (error, data) => {
    if (data.length > 0) {
      res.send('data already exist!');
    } else {
      const newItem = new psychonautsModel({
        name: name,
        gender: gender,
        img: img,
        psiPowers: psiPowers
      });

      newItem.save();
      res.send('item has been added to your fav.');
    }
  })
};

// GET Controller for getting favorite items in our DB
const getFavoriteItems = async (req, res) => {
  psychonautsModel.find({}, (error, data) => {
    res.send(data);
  });
};

// DELETE Controller for deleting an items from our DB

const deleteItem = async (req, res) => {

  const slug = req.params.slug;

  psychonautsModel.remove({slug: slug}, (error, data) => {
    if (error){
      res.send(error);
    } else {
      psychonautsModel.find({}, (error, data) => {
        res.send(data);
      });
    }
  })
};


// UPDTAE Controller for updating an item in our DB
const updateItem = async (req, res) => {

  const slug = req.params.slug; 
  const {name, gender} = req.body;
  slug = name.toLowerCase().split(' ').join('-');

  psychonautsModel.find({slug: slug}, (error, data) => {
    if(error){
      res.send(error);
    } else {
      data[0].name = name;
      data[0].slug = slug;
      data[0].save();

      psychonautsModel.find({}, (error, data) => {
        res.send(data);
      });
    }
  })
}




// exporting all controllers
module.exports = {
  createFavoriteItem,
  getFavoriteItems,
  deleteItem,
  updateItem
}