const btnPrevious = document.querySelector('.previous-arrow');
const btnNext = document.querySelector('.next-arrow');

const img0 = document.querySelector('.image-banner.image-0');
const img1 = document.querySelector('.image-banner.image-1');
const img2 = document.querySelector('.image-banner.image-2');

const circle0 = document.querySelector('.circle.page-0')
const circle1 = document.querySelector('.circle.page-1')
const circle2 = document.querySelector('.circle.page-2')

var locate = 1;

btnPrevious.addEventListener('click', () => {
    if (locate > 0) {
        locate -= 1
    } else {
        locate = 2
    }
    changeImg()
})  

btnNext.addEventListener('click', () => {
    if (locate < 2) {
        locate += 1
    } else {
        locate = 0
    }
    changeImg()
})

function changeImg() {
    switch(locate) {
        case 0: 
            img0.classList.add('active')
            img1.classList.remove('active')
            img2.classList.remove('active')

            circle0.classList.add('fill')
            circle1.classList.remove('fill')
            circle2.classList.remove('fill')

            console.log(locate)
            break

        case 1:
            img0.classList.remove('active')
            img1.classList.add('active')
            img2.classList.remove('active')

            circle0.classList.remove('fill')
            circle1.classList.add('fill')
            circle2.classList.remove('fill')

            console.log(locate)
            break
            
        case 2:
            img0.classList.remove('active')
            img1.classList.remove('active')
            img2.classList.add('active')

            circle0.classList.remove('fill')
            circle1.classList.remove('fill')
            circle2.classList.add('fill')

            console.log(locate)
            break
    }
}
