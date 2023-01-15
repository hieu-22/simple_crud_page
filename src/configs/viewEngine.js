const express =  require('express')

const configViewEngine = (app) => {
    app.use(express.static('./src/public'))
    require('dotenv').config()

    app.set('view engine', 'ejs')
    app.set('views', './src/views')
}

module.exports = configViewEngine