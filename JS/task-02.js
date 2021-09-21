
const ingredients = [
    'Картошка',
    'Грибы',
    'Чеснок',
    'Помидоры',
    'Зелень',
    'Приправы',
  ]
const Ing = document.querySelector('#ingredients');

// //Mapped
const addIng = (array) => array.map(element => {
  const addLi = document.createElement('li')
  addLi.textContent = element
  return addLi
});


Ing.append(...addIng(ingredients));
console.log(Ing);

