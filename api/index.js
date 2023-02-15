const server = require("./src/app");
const {conn} = require("./src/db");

conn.sync({force:true}).then(()=>{
    server.listen(3001, () =>{
        console.log("server listening at 3001")
    })
})
