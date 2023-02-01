const date = (document.getElementById('date').innerHTML =
  new Date().getFullYear())

console.log(date)

const alert = document.querySelector('.alert')
const btn = document.querySelector('.submit-btn')
btn.addEventListener('click', () => {
  alert.textContent = 'Submited successfully'
  alert.classList.add('sucess')
  setTimeout(function () {
    alert.textContent = ''
    alert.classList.remove('sucess')
    heart.style.color = 'white'
  }, 2000)
})

// setup nav
const navBtn = document.getElementById('nav-btn')
const navbar = document.getElementById('navbar')
const navClose = document.getElementById('nav-close')
// show nav
navBtn.addEventListener('click', () => {
  console.log('hello im button')
  navbar.classList.add('showNav')
})
// // close nav
navClose.addEventListener('click', () => {
  navbar.classList.remove('showNav')
})
//setup date
