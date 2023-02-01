const ApplyFreelancer = require('../model/ApplyFreelancer')
const path = require('path')
const createApplyFreelancer = async (req, res) => {
  // console.log(req.body)
  console.log(req.files)
  let dFile = req.files.cv
  const imgPath = path.join(__dirname, '../assets/uploads/' + `${dFile.name}`)
  await dFile.mv(imgPath)
  const cv = `/uploads/${dFile.name}`
  const applyf = await ApplyFreelancer.create({ ...req.body, cv: cv })
  console.log(applyf)
  return res.redirect('back')
}
const upload = async (req, res) => {
  console.log(req.files)
  res.send('uploaded')
}
module.exports = { createApplyFreelancer, upload }
