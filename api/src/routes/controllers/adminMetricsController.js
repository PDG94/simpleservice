const { Card, User } = require("../../db");

const getCardActive = async () => {
  const { count } = await Card.findAndCountAll({
    where: {
      active: true,
    },
  });

  return count;
};

const getCardInactive = async () => {
  const { count } = await Card.findAndCountAll({
    where: {
      active: false,
    },
  });
  return count;
};

const getUserActive = async () => {
  const { count } = await User.findAndCountAll({
    where: {
      active: true,
    },
  });
  return count;
};

const getUserInactive = async () => {
  const {count} = await User.findAndCountAll({
    where: {
      active: false,
    },
  });

  return count;
};

module.exports = {
  getCardActive,
  getCardInactive,
  getUserActive,
  getUserInactive,
};
