const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];


const listRef = document.querySelector('#ingredients');
console.log(listRef);


const listItems = ingredients.map((ingredients) => {
  const itemEl = document.createElement('li');
  itemEl.classList.add('item');
  itemEl.textContent = ingredients;

  console.log(itemEl.textContent);
  
  return itemEl;
});

listRef.append(...listItems);


