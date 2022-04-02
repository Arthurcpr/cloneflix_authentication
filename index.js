const express = require('express')
const db = require('./src/configs/database')
const bodyParser = require('body-parser')
const authRoutes = require('./src/routes/auth.routes')
const registerRoutes = require('./src/routes/register.routes')
const app = express()
const port = 3000
const jwtMiddleware = require('./src/middleware/jwt.middleware')
const userRoutes = require('./src/routes/user.routes')


app.use(express.json())
app.use('/', [authRoutes, registerRoutes, userRoutes])



app.listen(port, () => {
    db.authenticate().then(() => {
        console.log('Conexão realiazada com sucesso');
        console.log(`Example app listening at http://localhost:${port}`);
    }).catch(error => {
        console.log(error);
    })
    
})
