const categoriesList = document.querySelector('#categories');

const numberOfCategories = categoriesList.children.length;
console.log('numberOfCategories:', numberOfCategories);

[...categoriesList.children].forEach(category => {
  const categoryName = category.firstElementChild.textContent;
  const elements = category.lastElementChild.children.length;
  console.log(`Category: ${categoryName}`);
  console.log(`Elements: ${elements}`);
});
