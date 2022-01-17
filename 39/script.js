'use strict';

const box = document.querySelector('.box'),
    btn = document.querySelector('.btn');

btn.addEventListener('click', animate);

function animate() {
    let pos = 0;

    const id = setInterval(frame, 10);

    function frame() {
        if (pos > 300) {
            clearInterval(id);
        } else {
            pos++;
            box.style.top = `${pos}px`;
            box.style.left = `${pos}px`;
        }
    }
}