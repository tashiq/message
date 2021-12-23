const moon = document.getElementById('moon');
const messages = ['Hello', 'Your text goes here1', 'Your text goes here2', 'Your text goes here3', 'Your text goes here4', 'Your text goes here5', 'Your text goes here6', 'Your text goes here7', 'Your text goes here8', 'Your text goes here9', 'Your text goes here10'];
const message = document.getElementById('message');
const container = document.getElementById('container');
window.addEventListener('scroll', () => {
    let x = window.scrollY;
    const earth = document.getElementById('earth');
    earth.style.transform = `rotate(${x * .09}deg)`;
    moon.style.animationPlayState = 'running'
    // messages
    let index = Math.round(x / 220);
    container.style.height = 220 * (messages.length + 2) + 'px';
    if (index >= messages.length)
        index = messages.length - 1;
    message.innerHTML = messages[index];

})
