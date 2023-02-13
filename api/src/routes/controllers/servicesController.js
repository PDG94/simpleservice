const {Service} = require("../../db");


const getAllServices = async() =>{
    return await Service.findAll();
}

const postService = async({name, image=null, description=null, price}) =>{

    const newService = await Service.create({
        name, image, description, price
    })

    return newService;

}


module.exports = {getAllServices}