//const nameDisplay= document.getElementById('name-display');
//console.log(nameDisplay);
//nameDisplay.textContent = 'Julie';
//nameDisplay.style.color = 'Red';

//const booger = document.getElementById('nametag');
//booger.style.backgroundColor = 'purple';

const nameInput = document.getElementById('name-input')
const button =  document.getElementById('update-button');
button.addEventListener('click',()=>{
const nameDisplay= document.getElementById('name-display');
console.log(nameDisplay);
nameDisplay.textContent = nameInput.value;
nameDisplay.style.color = 'Red';
})

const proInput = document.getElementById('pro-input')
const probutton = document.getElementById('update-probutton');
probutton.addEventListener('click',()=>{
const proDisplay= document.getElementById('pro-display');
console.log(proDisplay);
proDisplay.textContent = proInput.value;
proDisplay.style.color = 'black';
proDisplay.style.fontWeight = 'bold';
})