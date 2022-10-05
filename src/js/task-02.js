const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const elementRefs = [];
ingredients.forEach(ingredient => {
  const liRef = document.createElement("li");
  liRef.textContent = ingredient;
  liRef.classList.add('item');
  elementRefs.push(liRef);
  
});

const ingredientsRef = document.querySelector('ul#ingredients');

ingredientsRef.append(...elementRefs);
console.log(ingredientsRef);

