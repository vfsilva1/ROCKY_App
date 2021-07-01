//Menu hamburger
window.onload = function () {
    const hamburger = document.getElementById('hamburger');
    const navList = document.getElementById('nav-list');
    
    hamburger.addEventListener('click', () => {
        navList.classList.toggle('show');
    });
};

function ValidateForm() {
    let name = document.forms["contactForm"]["name"];
    let email = document.forms["contactForm"]["email"];
    let investiment = document.forms["contactForm"]["investiment"];
    let message = document.getElementById('messageArea');

    if (name.value == "") {
        name.style.border = '5px solid red'
        alert('Nome precisa ser preenchido!')

        return false
    }
    if (email.value == "") {
        email.style.border = '5px solid red'
        alert('E-mail precisa ser preenchido!')

        return false
    }
    if (investiment.value < 0) {
        investiment.style.border = '5px solid red'
        alert('Insira um valor válido para o investimento mensal!')

        return false
    }
    if (message.value == "") {
        message.style.border = '5px solid red'
        alert('Digite uma mensagem!')

        return false
    }

    alert('Mensagem enviada com sucesso!')
    return true
}

function navBarScroll() {
    console.log('SCROLL')
    document.getElementById("nav").style.backgroundColor = 'black';
    document.getElementById("nav").style.width = '97%';
}
