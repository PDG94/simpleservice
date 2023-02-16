const { Service, User, Card, Category } = require("../../db");
const Sequelize = require('sequelize');
const Op = Sequelize.Op;

const getAllServices = async () => {
  // return await Service.findAll({
  //   where: {
  //     active: true,
  //   },
  //   include: {
  //     model: User,
  //     attributes: ['fullname', 'name', 'surname']
  //   }
  // });

  return await Card.findAll({
    where: {
      active: true,
    },
  });
};

// const createService = async ({ idUser, name, image, description, price, category }) => {
// const serviceUser = await User.findByPk(idUser);

// const newService = await serviceUser.createService({
//   name,
//   image,
//   description,
//   price,
//   category
// })
//   const categories = await Category.findAll({
//     where: {name: category}//
//   })
//   await newService.addCategory(categories)

//   return newService;
// };

const createService = async ({
  category,
  username,
  userimage,
  description,
  servicename,
  price,
  rating,
  userbio
}) => {
  const newService = await Card.create({
    username,
    userimage,
    description,
    servicename,
    price,
    rating,
    userbio
  });

  const categories = await Category.findAll({
    where: {name: category}//in here we use name but if needed we can use id for the category we want
  })
  await newService.addCategory(categories[0])

  return newService; 
};

//updateService updates just one instance
const updateService = async ({
  id,
  username,
  userimage,
  description,
  servicename,
  price,
  rating,
  userbio
}) => {
  // await Service.update(
  //   { name, image, description, price },
  //   {
  //     where: {
  //       id: id,
  //     },
  //   }
  // );

  // const serviceUpdated = await Service.findByPk(id);

  await Card.update(
    { username, userimage, description, servicename, price, rating,userbio },
    {
      where: {
        id: id,
      },
    }
  );

  const serviceUpdated = await Card.findByPk(id);

  return serviceUpdated;
};

const getServiceById = async ({ id }) => {
  // const serviceById = await Service.findAll({
  //   where: {
  //     id: id,
  //   },
  //   include: {
  //     model: User,
  //   },
  // });

  const serviceById = await Card.findAll({
    where: {
      id: id,
    },
    // include: {
    //   model: User,
    // },
  });

  return serviceById;
};

const getServiceByDescription = async( valdescription ) =>{
  // const serviceByDesc = await Service.findAll({
  //   where: {
  //     description: {
  //       [Op.substring]: valdescription,
  //     },
  //   },
  //   attributes: ['id','name','image','description','price','rating','active','CategoryId'],
  // });
  const serviceByDesc = await Card.findAll({
    where: {
      description: {
        [Op.substring]: valdescription,
      },
    },
    attributes: ['id','username','userimage','description','servicename','price','rating', 'userbio'],
  });


  return serviceByDesc;
};


module.exports = {
  getAllServices,
  createService,
  updateService,
  getServiceById,
  getServiceByDescription
};
