const express = require('express')
const router = express.Router()
const homeController = require('../controller/homeController')

const initUserRouter = (app) => {
    
    router.get('/', homeController.getHomepage)
    router.post('/create-new-user', homeController.createUser)
    router.post('/delete-user', homeController.deleteUser)
    router.get('/details/:userId', homeController.getUserDetailsInfor)

    return app.use('/', router)
}


module.exports = initUserRouter