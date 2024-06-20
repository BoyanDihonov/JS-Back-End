//TODO import routers

const { homeRouter } = require("../controllers/home")
const { catalogRouter } = require("../controllers/catalog")

function configRoutes(app) {
    app.use(homeRouter)
    app.use(catalogRouter)
    //TODO register routers 
}

module.exports = { configRoutes }