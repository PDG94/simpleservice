const server = require("./src/app");
const {conn} = require("./src/db");
require ('dotenv').config()
const {PORT} = process.env
conn.sync({alter:true}).then(()=>{
    server.listen(PORT, () =>{
        console.log("server listening at 3001")
    })
})
