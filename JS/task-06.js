const input = document.getElementById('validation-input');
input.addEventListener('blur', checkValueInput);
function checkValueInput(event) {
const lenVal = this.dataset.length;
event.currentTarget.value.length === Number(lenVal)?(input.classList = 'valid'):(input.classList = 'invalid');}

