const moon = document.getElementById('moon');
const messages = ['Hello', 'Peter'];
const message = document.getElementById('message');
window.addEventListener('scroll', () => {
    let x = window.scrollY;
    const earth = document.getElementById('earth');
    earth.style.transform = `rotate(${x * .09}deg)`;
    moon.style.animationPlayState = 'running'
    // messages
    let index = Math.round(x / 220);
    if (index >= messages.length)
        index = messages.length - 1;
    message.innerHTML = messages[index];

})
