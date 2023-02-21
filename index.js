require('dotenv').config()
const express = require('express')
const app = express()
const expressLayouts = require('express-ejs-layouts')
// db
const connectDB = require('./db/connect')

const port = process.env.PORT || 5000

const fileUpload = require('express-fileupload')

app.use(express.static('./assets'))

// app.use(expressLayouts)
// app.set('layout extractStyles', true)
// app.set('layout extractScripts', true)

// middleware
app.use(express.urlencoded({ extended: false }))
app.use(express.json())
app.use(fileUpload())
app.use(express.static('./assets'))
app.set('view engine', 'ejs')
app.set('views', './views')

// router
const devRouter = require('./routes/devoutsource')
app.use('/', devRouter)
app.get('/', (req, res) => {
  return res.render('home', {
    title: 'OutSourceDev',
    link: '/expertmatch',
    link1: '/apply-freelancer',
  })
})
app.get('/expertmatch', (req, res) => {
  return res.render('expertMatch', {
    title: 'expertmatch',
  })
})
app.get('/apply-freelancer', (req, res) => {
  return res.render('applyAsFreelancer', {
    title: 'applyFreelancer',
  })
})

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URI)
    await app.listen(port, console.log(`server is reunning on port: ${port}`))
  } catch (error) {
    console.log(error)
  }
}

start()
