//Changing gif while hovering on a button
const img = document.getElementById('image');

const images = {
    love: "../Assets/love.gif",
    depressed: '../Assets/depressed.gif',
    ori: "../Assets/handsome.gif"
};

function ChangeImage(giphy) {
    img.src = images[giphy];
}
function ResetImage() {
    img.src = images.ori;
};


//BG image change while hovering on a button
var body = document.body;

function bg1() {
	body.className = 'yess';
};

function bg2() {
	body.className = 'noo';
};

function resetBG(){
	body.className = '';
};

//Linking to Yes and page
function yesFunction() {
    window.location.href = "../Page 6/no1.html";
}

window.addEventListener('DOMContentLoaded', () =>{
    const button = document.getElementById('reject')

    button.addEventListener('mouseover', () => {
        button.style.left = Math.floor(Math.random() * (maxWidth + 1)) + 'px';
        button.style.bottom = Math.floor(Math.random() * (maxHeight + 1)) + 'px';
    });
});

function moveButton() {
    const btn = document.getElementById('reject');
    const x = Math.random() * (window.innerWidth - 150);
    const y = Math.random() * (window.innerHeight - 60);
    btn.style.position = 'fixed';
    btn.style.left = x + 'px';
    btn.style.top = y + 'px';
}