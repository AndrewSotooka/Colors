const colors = ['green', 'red', 'rgba(133,122,200)', '#f15025'];

const btn = document.getElementById('btn');

const color = document.querySelector('.span-color');

btn.addEventListener('click', function(){
    console.log('Clicou no botão');
    const randomNumber = getRandomNumbers();
    const mainColor = document.querySelector('#main-color');
    mainColor.style.backgroundColor = colors[randomNumber];
});

function getRandomNumbers(){
    return Math.floor(Math.random() * colors.length)
}