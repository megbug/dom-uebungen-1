// lvl_3_1

let count = 0; 
let result = document.querySelector('#demo');

const changeBackground = (defaultColor) => {
    document.body.style.backgroundColor = defaultColor;
    count ++
    result.innerHTML = `Wir haben die Farbe ${count} mal geändert`;
}



let inputRed = document.querySelector('#rot');
let inputGreen = document.querySelector('#grun');
let inputBlue = document.querySelector('#blau');

const changeHandle = () => {
    let color = document.body.style.backgroundColor = `rgb(${inputRed.value}, ${inputGreen.value}, ${inputBlue.value})`;
    result.innerHTML = color;
}
