//Making bg
function lines(){
    let sizeW = Math.random() * 12;
    let duration = Math.random() * 3;
    let e = document. createElement('div');
    e.setAttribute('class', 'circle');
    document.body.appendChild(e);
    e.style.width = 2*sizeW + 'px';
    e.style.left = Math.random() * + innerWidth + 'px';
    e.style.animationDuration = 2 + duration + 's';
    setTimeout(function(){
        document.body.removeChild(e)
    }, 4000);
}

setInterval(function(){
    lines();
}, 200);

function noFunction() {
    window.location.href = "../Page 5/yes.html";
}

function moveButton() {
    const btn = document.getElementById('reject');
    const x = Math.random() * (window.innerWidth - 150);
    const y = Math.random() * (window.innerHeight - 60);
    btn.style.position = 'fixed';
    btn.style.left = x + 'px';
    btn.style.top = y + 'px';
}