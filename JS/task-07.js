const input = document.getElementById("font-size-control");
const txt = document.getElementById("text");
input.addEventListener("input", onInputChange);

function onInputChange(event) {
  txt.style.fontSize = event.currentTarget.value + "px";
}