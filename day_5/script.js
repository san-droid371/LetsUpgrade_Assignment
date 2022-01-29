let box = document.getElementById('mainBox');
let btn = document.querySelector('.btn');
function changeColor() {
    let inputVal = +document.querySelector('#choice').value;
    console.log("clicked")
    console.log(typeof(inputVal));
    
    switch (inputVal) {
        case 1: box.style.backgroundColor="#8267BE";
            break;
        case 2: box.style.backgroundColor="#DD4A48";
            break;
        case 3: box.style.backgroundColor="#FFC900";
            break;
        case 4: box.style.backgroundColor="#557C55";
            break;
        default: box.style.backgroundColor="transparent";
    }
}
btn.addEventListener("click", changeColor);