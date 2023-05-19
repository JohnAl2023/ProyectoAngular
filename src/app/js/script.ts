export function mainFunction() {
  const inputSearch = document.querySelector('#input-search') as HTMLInputElement;
const categorySelect = document.querySelector('#category-select') as HTMLSelectElement;
const yearSelect = document.querySelector('#year-select') as HTMLSelectElement;
const imageList = document.querySelector('#image-list') as HTMLElement;

function filterImages() {
  const searchText = inputSearch.value.toLowerCase();
  const categoryValue = categorySelect.value.toLowerCase();
  const yearValue = yearSelect.value;
  const images = imageList.querySelectorAll('li');
  let count = 0;

  for (let i = 0; i < images.length; i++) {
    const image = images[i] as HTMLElement;
    const imageCategory = image.getAttribute('data-category')?.toLowerCase();
    const imageYear = image.getAttribute('data-year');

    if (
      (searchText === '' || (imageCategory && imageCategory.indexOf(searchText) !== -1)) &&
      (categoryValue === '' || (imageCategory && imageCategory === categoryValue)) &&
      (yearValue === '' || (imageYear && imageYear === yearValue))
    ) {
      image.style.display = 'block';
      count++;
    } else {
      image.style.display = 'none';
    }
  }

  const countElement = document.querySelector('#count') as HTMLElement;
  countElement.textContent = count.toString();
}

inputSearch.addEventListener('input', filterImages);
categorySelect.addEventListener('change', filterImages);
yearSelect.addEventListener('change', filterImages);
}