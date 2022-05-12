const ronin = require('ronin-server')
const mocks = require('ronin-mocks')
const database  = require( 'ronin-database' )
const server = ronin.server()

database.connect( process.env.CONNECTIONSTRING )
server.use('/', mocks.server(server.Router(), false, false))
console.log("server started on port: " + process.env.SERVER_PORT)
server.start()

