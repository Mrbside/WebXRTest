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
    }else {
        plus.classList.add('cross');
        content.classList.add('expand');
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
    nextPlatillo();

}

function mujer(params) {
    swapScene();
    nextPlatillo();
}

function hombre(params) {
    swapScene();
    nextPlatillo();
}