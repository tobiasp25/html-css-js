document.addEventListener('DOMContentLoaded', function () {
    function addAnimation() {
        var header = document.querySelector('.HD');
        var sub = document.querySelector('.sub');
        var inv = document.querySelector('.inv');
        header.classList.add('animate');
        inv.classList.add('animate');
        sub.classList.add('animate');
        // Desregistra el evento load después de agregar la clase animate
        window.removeEventListener('load', addAnimation);
    }

    // Registra el evento load para agregar la clase animate al cargar completamente la página
    window.addEventListener('load', addAnimation);
});

document.addEventListener('DOMContentLoaded', function () {
    function addAnimation() {
        var header = document.querySelector('body');
        header.classList.add('animation');
        // Desregistra el evento load después de agregar la clase animate
        window.removeEventListener('load', addAnimation);
    }

    // Registra el evento load para agregar la clase animate al cargar completamente la página
    window.addEventListener('load', addAnimation);
});

let textElement = document.querySelector('h2')
let text = 'Dont you realize that you are the problem?';
let index = 0
let currentText = '';

let typingDelay = 120;

setInterval(() => {
    if (index <= text.length) {
    currentText += text[index];
    index +=1;
    }
}
,typingDelay);
