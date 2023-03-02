const {
  getUserFav,
  cardFav,
  createUserFav,
  deleteFav,
} = require("../controllers/favController");

const getUserFavHandler = async (req, res) => {
  try {
    const favList = await getUserFav(req.params);
    res.status(200).json(favList);
  } catch (error) {
    res.status(404).json({ error: error.message });
  }
};

const postUserFavHandler = async (req, res) => {
  try {
    const { id } = req.params;
    const { user_id } = req.user;
    const favAdded = await createUserFav(user_id, id);
    res.status(201).json(favAdded);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const cardFavHandler = async (req, res) => {
  try {
    const cardFavs = await cardFav(req.params);
    res.status(200).json(cardFavs);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const deleteFavHandler = async (req, res) => {
  try {
    const active = false;
    const { id } = req.params;
    const deletedFav = await deleteFav(id, active);
    res.status(200).json({ message: "Favorite deleted", favorite: deletedFav });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = {
  getUserFavHandler,
  cardFavHandler,
  postUserFavHandler,
  deleteFavHandler,
};
