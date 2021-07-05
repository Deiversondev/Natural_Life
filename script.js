const check_form = (form) => {
    let nome = document.getElementById('Nome');
    let email = document.getElementById('Email');
    let telefone = document.getElementById('Telefone')
    let invalid = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/;
    if (nome.value.length < 6) {
        alert('Digite seu nome completo!');
        nome.focus();
        return false;
    }
    if (email.value === '') {
        alert('Email não informado!')
        email.focus();
        return false;

    }
    if (invalid.test(form.Email.value) === false) {
        alert('Digite um email válido!');
        return false;
    }
    if (telefone.value.length < 10) {
        alert('Digite um número de telefone válido!')
        return false;
    }



}

var slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
    showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    var dots = document.getElementsByClassName("dot");
    if (n > slides.length) { slideIndex = 1 }
    if (n < 1) { slideIndex = slides.length }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
}