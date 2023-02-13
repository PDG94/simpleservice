const {Category} = require("../../db");


const getAllCategories = async() =>{
    return await Category.findAll();
}

const createCategory = async({name, description=null}) =>{

    const newCategory = await Category.create({
        name, description
    })

    return newCategory;

}


module.exports = {getAllCategories, createCategory}