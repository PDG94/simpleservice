const {ServiceList, Category} = require("../../db");


const getAllServiceLists = async() =>{
    return await ServiceList.findAll({
      where: {
        active: true
      },
      include: Category,
    });
}

const createServiceList = async({name}) =>{

    const newServiceList = await ServiceList.create({
        name
    })

    return newServiceList;

}

const addCategoryToService = async ({id, CategoryId}) => {
  const service = await ServiceList.findByPk(id);
  const category = await Category.findByPk(CategoryId);

  await category.addServiceList(service);
  return service;
}

const updateServiceList = async ({ id, name}) => {
    await ServiceList.update(
      { name },
      {
        where: {
          id: id,
        },
      }
    );
  
    const serviceListUpdated = await ServiceList.findByPk(id);
  
    return serviceListUpdated;
  }


module.exports = {getAllServiceLists, createServiceList, updateServiceList, addCategoryToService}