const express = require('express')

const router = express.Router()

const contactCreate = require('../controller/contactInfo_controller')
const {
  createApplyFreelancer,
  upload,
} = require('../controller/freelancer_controller')

router.post('/create', contactCreate)
router.post('/create-freelancer', createApplyFreelancer)
router.post('/upload', upload)
module.exports = router
