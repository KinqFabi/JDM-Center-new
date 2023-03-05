const express = require('express')
const cors = require('cors')


const app = express()

// middleware

app.use(express.json())
app.use(cors({ credentials: true, origin: "http://localhost:3000" }));

app.use(express.urlencoded({ extended: true }))


// routers
const router = require('./routes/postRouter.js')
app.use('/api/posts', router)

const userRouter = require('./routes/userRouter.js')
app.use('/api/users', userRouter)

const loginRouter = require('./routes/loginRouter.js')
app.use('/api/auth', loginRouter)

//static Images Folder

app.use('/Images', express.static('./Images')) 


//port

const PORT = process.env.PORT || 3001

//server

app.listen(PORT, () => {
    console.log(`server is running on port ${PORT}`)
})