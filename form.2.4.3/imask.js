
//маска для телефона
var element = document.querySelector('.number')
var maskOptions = {
    mask: '+{7}(000)000-00-00'
};
var mask = IMask(element, maskOptions);


//маска для email
// let form = document.querySelector('.form')
// let email = document.querySelector(".email")
// form.addEventListener('submit', function (e) {
//     e.preventDefault()
//     let reg = /\w+@\w+\.\w{2,20}/gi
//     if (!reg.test(email.value)) {
//         email.style.background = "red"
//         email.focus()
//         e.preventDefault()
//         return
//     }
// })