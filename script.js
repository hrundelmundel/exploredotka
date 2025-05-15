const heroTopPhoto = document.querySelector('.hero-top__photo')
const heroTopDropdawn = document.querySelector('.hero-top-dropdawn')

heroTopPhoto.addEventListener('mouseover',function(){
    heroTopDropdawn.classList.add('active')
})
heroTopPhoto.addEventListener('mouseout',function(){
    heroTopDropdawn.classList.remove('active')
})
