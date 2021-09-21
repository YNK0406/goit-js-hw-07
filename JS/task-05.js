const  inp= document.querySelector('#name-input');
console.log(inp);
const spTxt = document.querySelector('#name-output');
console.log(spTxt);
inp.addEventListener('input', inpTxt);
function inpTxt (addTxt){
    let txt = inp.value;
    if (txt !==''){spTxt.textContent = txt}
    else {spTxt.textContent = 'незнакомец'}
} 