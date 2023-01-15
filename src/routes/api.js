const express = require('express')
const router = express.Router()
const apiController = require('../controller/apiController')

let initAPIRoute = (app) => {
    router.get('/users', apiController.getAllUser)
    router.post('/create-new-user', apiController.createNewUser)
    router.put('/update-user', apiController.updateUser)
    router.delete('/delete-user', apiController.deleteUser)

    return app.use('/api/v1', router)
}

module.exports = initAPIRoute