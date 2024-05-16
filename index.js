const jsonServer = require('json-server')
const EmpServer = jsonServer.create()
const middleware = jsonServer.defaults()
const route = jsonServer.router('db.json')
const PORT = 3000 || process.env.PORT

EmpServer.use(middleware)
EmpServer.use(route)
EmpServer.listen(PORT,()=>{
    console.log(`Employee Data server Started at Port ${PORT} and waiting for client request`);
})