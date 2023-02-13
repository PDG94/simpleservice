const {Service} = require("../../db");


const getAllServices = async() =>{
    return await Service.findAll();
}


module.exports = {getAllServices}