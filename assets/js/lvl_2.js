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
const navHome = document.getElementsByTagName('li')[0];
const navNews = document.getElementsByTagName('li')[1];
const navContact = document.getElementsByTagName('li')[2];

const navHome2 = document.getElementsByClassName('nav')[0];
const navNews2 = document.getElementsByClassName('nav')[1];
const navContact2 = document.getElementsByClassName('nav')[2];

// changeButton.addEventListener('click', change = () => {
    navHome.style.backgroundColor = "#f6c89f";
    navNews.style.backgroundColor = "#ffe7d1"; 
    navContact.style.backgroundColor = "#4b8e8d"; 

    changeButton.style.backgroundColor = "#396362";

    navHome2.style.color = "#333"; 
    navNews2.style.color = "#333";
    navContact2.style.color = "#333";
    // oder möglichkeit alles einheitlich zu stylen? 

    // changeButton.style.color = "#333";
// });
*/

// ===========================lvl_2_4========================

// const colorButton = document.querySelector('#button');
// const selectedElement = document.querySelector('#farbeAuswahlen');


// colorButton.addEventListener('click', (event) => {
//     event.preventDefault();
//     const index = selectedElement.selectedIndex;

//     switch (index) {
//         case 0:
//             document.body.style.backgroundColor = "mediumorchid"
//             break;
//         case 1: 
//             document.body.style.backgroundColor = "mintcream"
//             break;
//         case 2: 
//             document.body.style.backgroundColor = "dodgerblue"
//             break;
//         case 3: 
//             document.body.style.backgroundColor = "goldenrod"
//             break;
//         case 4: 
//             document.body.style.backgroundColor = "wheat"
//             break;
//         case 5: 
//             document.body.style.backgroundColor = "mediumturquoise"
//             break;
//         case 6: 
//             document.body.style.backgroundColor = "moccasin"
//             break;
//         case 7: 
//             document.body.style.backgroundColor = "firebrick"
//             break;
//         case 8: 
//             document.body.style.backgroundColor = "limegreen"
//             break;
//         case 9: 
//             document.body.style.backgroundColor = "slategrey"
//             break;
//         default:
//             break;
//     }
// });

/*
colorButton.addEventListener('click', (event) => {
        event.preventDefault();
        const valueSelectElement = selectedElement.value;

        document.body.style.backgroundColor = valueSelectElement.replace(" ", "");
});
*/