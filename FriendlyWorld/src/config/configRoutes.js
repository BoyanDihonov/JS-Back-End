//TODO import routers

const { homeRouter } = require("../controllers/home")
const { catalogRouter } = require("../controllers/catalog")
const { userRouter } = require("../controllers/user")
const { animalRouter } = require("../controllers/animal")

function configRoutes(app) {
    app.use(homeRouter)
    app.use(catalogRouter)
    app.use(userRouter)
    app.use(animalRouter)

    app.get('*',(req,res)=>{
        res.render('404')
    })

}

module.exports = { configRoutes }