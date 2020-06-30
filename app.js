const container = document.getElementById('containerz');
const text = document.getElementById('text');
const totalTime = 7500;
const breatheTime = (totalTime/5)*2;
const holdTime = totalTime / 5;
// import NoSleep from 'nosleep.js';
// var noSleep = new NoSleep();

const soundEffect = new Audio();
soundEffect.src = 'raudioCompressed.mp3';

function soundFunction(){
    soundEffect.play();
    // noSleep.enable();
}


breathAnimation();
function breathAnimation(){
    text.innerHTML = 'نفس عمیق بکش';
    container.className = 'containerz grow'

    setTimeout(()=> {
        text.innerHTML = 'نفست رو نگه دار';

        setTimeout(() => {
            text.innerHTML = 'نفست رو بده بیرون';
            container.className = 'containerz shrink'
        }, holdTime);
    }, breatheTime);
}

setInterval(breathAnimation, totalTime);

