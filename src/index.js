import {chars} from './chars.js';


// Create div for hexadecimal text incicator
const hexContainer = document.createElement('div');
hexContainer.classList.add('container');
document.body.append(hexContainer);

// Create button for random background color change 
const changeColorCont = document.createElement('div');
changeColorCont.classList.add('text-container');
hexContainer.append(changeColorCont);
const changeColorBtn = document.createElement('button');
changeColorBtn.classList.add('color-pick-button');
hexContainer.append(changeColorBtn);



//Create function for generating hex string
function colorChange() {
    let hexString = '#';
    for (let i = 0; i < 6; i++) {
        const valueGenerator = chars[Math.floor(Math.random()*16)];
        hexString += valueGenerator;
        console.log(hexString);
    }
    changeColorCont.innerText = hexString;
    document.body.style.backgroundColor = hexString;
}

changeColorBtn.addEventListener('click', ()=>{
    colorChange();
})