const express = require('express')
const initUserRouter = require("./routes/initWebRoute")
const initAPIRoute  = require('./routes/api')
const configViewEngine = require("./configs/viewEngine")
const app = express()
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// init web router
initUserRouter(app)

// init api route
initAPIRoute(app)

// iniit config View Engine - EJS
configViewEngine(app)


app.listen('3000', () => {
    console.log('app is listening at localhost:3000')
})