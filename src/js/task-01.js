// Задание 1

const categoryItemsRef = document.querySelectorAll('.item');
console.log(`Number of categories: ${categoryItemsRef.length}`);

categoryItemsRef.forEach(categoryItemRef  => {
    console.log('Category:', categoryItemRef.getElementsByTagName('h2')[0].textContent);
    console.log('Elements:', categoryItemRef.getElementsByTagName('li').length);
});



