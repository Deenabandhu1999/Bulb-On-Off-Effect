let btn = document.querySelector('.btn');
let body=document.querySelector('body');
let audio=document.querySelector('#audio');
// onclick is used when we click then effect of css will started.
// Here class is "on" which use in js
btn.onclick = function() {
    body.classList.toggle('on');
    audio.play();
    
}
