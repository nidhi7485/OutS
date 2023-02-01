const Contact = require('../model/Contact')

const contactCreate = async (req, res) => {
  try {
    const contacts = await Contact.create(req.body)
    return res.redirect('back')
  } catch (error) {
    console.log(error)
  }
}
module.exports = contactCreate
