const { Router } = require('express')

const routes = Router()

const controller_ongs = require('./controllers/controller_ongs')
const controller_incidents = require('./controllers/controller_incidents')
const controller_ongProfile = require('./controllers/controller_ongProfile')
const controller_session = require('./controllers/controller_session')

routes.get('/ongs', controller_ongs.index)
routes.post('/ongs', controller_ongs.create)

routes.get('/profile', controller_ongProfile.index)

routes.post('/sessions', controller_session.create)

routes.get('/incidents', controller_incidents.index)
routes.post('/incidents', controller_incidents.create)
routes.delete('/incidents/:id', controller_incidents.destroy)

module.exports = routes
