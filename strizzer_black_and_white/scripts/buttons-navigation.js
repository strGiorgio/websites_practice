const btnPrevious = document.querySelector('.previous-arrow');
const btnNext = document.querySelector('.next-arrow');

const img0 = document.querySelector('.image-banner0');
const img1 = document.querySelector('.image-banner1');
const img2 = document.querySelector('.image-banner2');

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
            console.log(locate)
            break

        case 1:
            img0.classList.remove('active')
            img1.classList.add('active')
            img2.classList.remove('active')
            console.log(locate)
            break
            
        case 2:
            img0.classList.remove('active')
            img1.classList.remove('active')
            img2.classList.add('active')
            console.log(locate)
            break
    }
}
