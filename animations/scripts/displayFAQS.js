const icon = document.querySelectorAll('.icon');
const box = document.querySelectorAll('.wrapper-text');

for (var i = 0; i < icon.length; i ++) {
    console.log(icon[i])
    console.log(box[i].id)
    icon[i].addEventListener('click', activate)
}

function activate(e) {
    console.log(e, this.id)
    for (var i in box) {
        if (box[i].id == this.id) {
            console.log(box[i].id)
            const boxText = document.querySelector(`article>#${box[i].id}`)
            boxText.classList.add('active')
        }
    }

    for (var i = 0; i < icon.length; i ++) {
        icon[i].classList.remove('active')
    }
    this.classList.add('active')
}