const server = require("./src/app");
const {conn} = require("./src/db");

conn.sync({alter:true}).then(()=>{
    server.listen(3001, () =>{
        console.log("server listening at 3001")
    })
})


