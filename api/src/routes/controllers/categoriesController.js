const {Category} = require("../../db");


const getAllCategories = async() =>{
    return await Category.findAll();
}


module.exports = {getAllCategories}