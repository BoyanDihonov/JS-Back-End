const { homeRouter } = require("../controllers/home")
const { userRouter } = require("../controllers/user")
const { stoneRouter } = require("../controllers/stone")

function configRoutes(app) {
    app.use(homeRouter)
    app.use(userRouter)
    app.use(stoneRouter)
    app.get('*', (req, res) => {
        res.render('404')
    })
}

module.exports = { configRoutes }