// =========================lvl_2_1==============================

/*
const home = document.getElementById('navHome');
const changeButton = document.querySelector('#navChange');

changeButton.addEventListener('click', change = () => {
    home.style.backgroundColor = "rosybrown";

    function reverseStr(str) {
        return str.split("").reverse().join("");
    }

    home.innerHTML = reverseStr("Home");
});
*/
// =========================lvl_2_2==============================

/*
const key = document.querySelector('#key');
const keyCode = document.querySelector('.keyCode');
const keyCodeID = document.querySelector('#keyCodeID');
const code = document.querySelector('#code');

document.body.addEventListener('keydown', (event)=> {
    console.log(event);
    key.innerHTML = event.key;
    // keyCode.innerHTML = event["keyCode"];
    keyCode.innerHTML = "Hier gibts nicht zu sehen";
    keyCodeID.innerHTML = "404";
    code.innerHTML = event.code;
})
*/

// ===========================lvl_2_3========================
/*
const changeButton = document.querySelector('#navChange');

changeButton.addEventListener('click', change = () => {
    document.getElementsByTagName('li')[0].style.backgroundColor = "#f6c89f";
    document.getElementsByTagName('li')[1].style.backgroundColor = "#ffe7d1";
    document.getElementsByTagName('li')[2].style.backgroundColor = "#4b8e8d";
    changeButton.style.backgroundColor = "#396362";
    document.getElementsByTagName('a')[0].style.color = "#333";
    document.getElementsByTagName('a')[1].style.color = "#333";
    document.getElementsByTagName('a')[2].style.color = "#333";
    changeButton.style.color = "#333";
});
*/

// ===========================lvl_2_4========================

// const colorButton = document.querySelector('#button');
// const MeOr = document.querySelector('#1');
// const selectedOption = document.querySelector('#farbeAuswahlen');
// const body = document.querySelector('#body');

// selectedOption[0].style.backgroundColor = "Medium Orchid";

// colorButton.addEventListener('click', () => {
    // const selectedColor = selectedOption.value;
    // body.style.backgroundColor = selectedColor;

    // console.log(selectedOption);
    
    // document.body.style.backgroundColor = "MediumOrchid";
    // selectedOption[0].style.backgroundColor = "Medium Orchid";
// })
const button = document.querySelector("#button");
const select = document.querySelector("#farbeAuswahlen");
const body = document.querySelector("body");

button.addEventListener("click", () => {
    const selectedColor = select.value;
    body.style.backgroundColor = selectedColor;
});