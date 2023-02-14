const {Service} = require("../../db");


const getAllServices = async() =>{
    return await Service.findAll();
}

const createService = async({name, image, description, price}) =>{

    const newService = await Service.create({
        name, image, description, price
    })

    return newService;

}


module.exports = {getAllServices, createService}