const categoryItemsRef = document.querySelectorAll('.item');
console.log(`Number of categories: ${categoryItemsRef.length}`);

categoryItemsRef.forEach(item  => {
    console.log(`Category: ${item.firstElementChild.textContent}`);
    console.log(`Elements:${item.lastElementChild.children.length}`);
});




// categoryItemsRef.forEach(categoryItemRef  => {
//     console.log('Category:', categoryItemRef.getElementsByTagName('h2')[0].textContent);
//     console.log('Elements:', categoryItemRef.getElementsByTagName('li').length);
// });
