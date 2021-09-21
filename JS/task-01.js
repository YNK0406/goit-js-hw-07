const allCat = document.querySelectorAll('.item h2').forEach(cat =>console.log(`Категория: ${cat.textContent}, Количестко элементов: ${cat.nextElementSibling.children.length}`));
