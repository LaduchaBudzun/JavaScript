

function registerNow() {

    let consent = document.getElementById('consent')
    while (!consent.checked) {
        return
    }





    let name = document.querySelector('.name').value
    let company = document.querySelector('.company').value
    let city = document.querySelector('.city').value
    let number = document.querySelector('.number')
    number = number.value.replace('+', '')
    let email = document.querySelector('.email').value

    let filled = ((name && company && city && number && email) !== '')

    let emailCor = emailCorrect(email)


    if ((name && company && city && number) == '') {
        if ((document.querySelector('.form-alert')) == null) {
            let nameEr = document.createElement('div');
            nameEr.className = "form-alert";
            nameEr.innerHTML = `<p class='error'></p><p class='err-text'>Заполните все поля</p>`;
            document.querySelector('.div-err').append(nameEr);
        }
        return
    }
    if ((!emailCor && (name && company && city && number) !== '')) {
        if ((document.querySelector('.email-alert')) == null) {
            let nameEr = document.createElement('div');
            nameEr.className = "email-alert";
            nameEr.innerHTML = `<p class='error'></p><p class='err-text'>Введите email корректно</p>`;
            document.querySelector('.div-err').append(nameEr);
        }
        return
    }


    if (filled && emailCor) {

        let url = 'https://cloud-desk.ru/DB_Dealers_Domus_Dev/hs/CalcAPI/ParticipantForm/GET/' + name + "/" + company + "/" + city + "/" + number + "/" + email


        // fetch(url)
        // document.location.replace('gratitude.html')




        var xhr = new XMLHttpRequest();

        xhr.open('GET', url, true);//async:true 

        xhr.send(); // (1)отсылаем 

        xhr.onreadystatechange = function () { // (3)
            if (xhr.readyState != 4) return;


            if (xhr.status != 200) {
                alert(xhr.status + ': ' + xhr.statusText);
            } else {
                document.location.replace('gratitude.html')
            }

        }
        document.getElementById("btn-regNow").disabled = true;
        document.getElementById("btn-regNow").innerText = 'Регистрация...';
    }


}





function emailCorrect(email) {
    let res = email.indexOf('@')

    if (res == -1) {
        return false
    } else {
        return true
    }

}

