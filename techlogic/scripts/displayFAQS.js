const icon = document.querySelectorAll('.icon');
const box = document.querySelectorAll('.wrapper-text');

for (var i = 0; i < icon.length; i ++) {
    icon[i].addEventListener('click', activate)
}

function activate(e) {
    //BOX
    for (var i = 0; i < box.length; i ++) {
        box[i].classList.remove('active')
    }

    for (var i in box) {
        if (box[i].id == this.id) {
            const boxText = document.querySelector(`article>#${box[i].id}`)
            boxText.classList.add('active')
        }
    }
    //ICON
    for (var i = 0; i < icon.length; i ++) {
        icon[i].classList.remove('active')
    }
    this.classList.add('active')
}