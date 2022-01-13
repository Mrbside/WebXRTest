let splash = document.getElementById('splash');

setTimeout(() => {
    splash.style.display = "none";
}, 4100);

var plus = document.querySelector('.plus')
var content = document.querySelector('.content-desc')

function swapDscr(params) {
    if(plus.classList.contains('cross')){
        plus.classList.remove('cross');
        content.classList.remove('expand');
        content.querySelector('h4').style.opacity = 0;
        content.querySelector('p').style.opacity = 0;
    }else {
        plus.classList.add('cross');
        content.classList.add('expand');
        content.querySelector('h4').style.opacity = 0;
        content.querySelector('p').style.opacity = 0;
        setTimeout(() => {
            content.querySelector('h4').style.opacity = 1;
            content.querySelector('p').style.opacity = 1;
        }, 600);
    }
}

let scene1 = document.getElementById('scene-1')
let sceneAR = document.getElementById('scene-ar')

function swapScene(params) {
    if(scene1.classList.contains('swap-1')){
        sceneAR.style.display = 'block';
        setTimeout(() => {
            scene1.classList.remove('swap-1');
            sceneAR.classList.remove('swap-2');
        }, 50);
        setTimeout(() => {
            scene1.style.display = 'none';
        }, 600);

    }else {
        scene1.style.display = 'block';
        setTimeout(() => {
            scene1.classList.add('swap-1');
            sceneAR.classList.add('swap-2');
        }, 50);
        setTimeout(() => {
            sceneAR.style.display = 'none';
        }, 600);
    }
}

function deporte(params) {
    swapScene();
    platilloDeMenu(2);

}

function mujer(params) {
    swapScene();
    platilloDeMenu(1);
}

function hombre(params) {
    swapScene();
    platilloDeMenu(0);
}