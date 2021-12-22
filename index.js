const moon = document.getElementById('moon');
const messages = ['Hello', 'Peanut', 'Bangla likhte parteci na. Karon Laptop e Avro nai. &#128578', 'Jai Hok, Asol kothai asi.	&#128513;', 'Hi again', '.. ahem ahem ...', 'Disclaimer: <br/> Ami kokhno karo sathe prem kori ni. <br/> Tor sathe ja kotha boli. sob mon theke. &#128521;', 'First Of All, Ami tor theke ekhn kichu expect kori.', 'Tui jmn poralekha tmn koros na. &#128578', 'amio majhe majhe Web Dev kori na. &#128578', 'Kotha to emon chilo na.', '2 jon e jno maximum effort dia future ta sundor korte pari.', 'Jno amra eksathe thakte pari. &#128578', 'Evabe colle bissas kor. Kichui hobe na.', 'Accha amra ki emon hote pari na j ekjoner kaj arekjon dekhbo.', 'Jno kew AIM er baire na jai.', 'Amader rasta ta onk kothin.', 'Family problems, Tor voy, Amar Career, Somoy.', 'Sob kichu amader biporite.', 'Jani, ami toke pele joto khushi hobo same tai tui khushi hobi amk pele.', 'Taile ekta bar cesta kore dekhle khoti ki?.', 'Shudhu ekbar amar ho. Life long happy rakhbo.', '179 theke zero te nia asbo. Maniye nibo sob kichu. &#129392', 'Bolcili na ghurte nite hobe?. Jodi ami Chittagong e job kori. Kotha dilam week e ontoto ekbar kothao na kothao nia jabo.', 'Etao bissas kori. Tok ONK valo ekta family dite parbo. &#128147;', 'Tui chillaile ami chup mere shunbo. <span style="color:red">&#x2764;</span>', 'Din seshe sundor ektu muhurto diyar cesta korbo. <span style="color:red">&#x2764;</span>', 'At Last', 'Amar sob vuler ki baron hobi?', 'Amar sathe ki buri hobi?', 'Long drive e gele ki kade matha dia ki golpo korbi?.'];
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
