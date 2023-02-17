const {ServiceList} = require("../../db");


const getAllServiceLists = async() =>{
    return await ServiceList.findAll();
}

const createServiceList = async({name}) =>{

    const newServiceList = await ServiceList.create({
        name
    })

    return newServiceList;

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


module.exports = {getAllServiceLists, createServiceList, updateServiceList}