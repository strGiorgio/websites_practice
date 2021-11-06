b1 = document.querySelector('.box-article.box-left')
b2 = document.querySelector('.box-article.box-right')

document.addEventListener('scroll', () => {
    if (window.scrollY > 270) {
        b1.classList.add('active')
    } 

    if (window.scrollY > 340) {
        b2.classList.add('active')
    }
})