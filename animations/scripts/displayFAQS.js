const icon = document.querySelectorAll('.icon');
const box = document.querySelectorAll('.wrapper-text');

for (var i = 0; i < icon.length; i ++) {
    console.log(icon[i])
    console.log(box[i].id)
    icon[i].addEventListener('click', activate)
}

function activate(e) {
    console.log(e, n)
    this.style.transform = "rotate(180deg)"
}