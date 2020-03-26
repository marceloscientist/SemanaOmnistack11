const express = require('express')
const routes = express.Router()
const OngController = require('./controllers/OngController')
const IncidentController = require('./controllers/IncidentController')
const ProfileController = require('./controllers/ProfileController')
const SessionController = require('./controllers/SessionController')

routes.post('/session', SessionController.create)
routes.get('/ongs', OngController.index)
routes.post('/ongs', OngController.create)  

routes.get('/profile', ProfileController.index)  

routes.get('/incidents', IncidentController.index)  
routes.post('/incidents', IncidentController.create)  
routes.delete('/incidents', IncidentController.delete)  
module.exports = routes
/* Route Params 
routes.post('/ongs', (request, response ) => {
    const { name, email, whatsapp, city, uf } = request.body  
    console.log( name, email, whatsapp, city, uf )

    return response.json()
})
 
module.exports = routes
 Route Params  
app.get('/users/:id', (request, response ) => {
    const params = request.params  
    console.log(params)

    return response.json({
        evento: 'Semana OmniStack 11.0',
        aluno: 'Marcelo Carvalho'
    })
})
*/

/* Params Query
app.get('/users', (request, response ) => {
    const params = request.query 
    console.log(params)

    return response.json({
        evento: 'Semana OmniStack 11.0',
        aluno: 'Marcelo Carvalho'
    })
})
*/
