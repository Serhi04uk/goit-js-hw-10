import { fetchBreeds, fetchCatByBreed } from './api.js';
import SlimSelect from 'slim-select';

const select = document.querySelector('.breed-select');
const loderEl = document.querySelector('.loader');
const errorEl = document.querySelector('.error');
const catEL = document.querySelector('.cat-info');

errorEl.style.display = 'none';
select.style.display = 'none';

fetchBreeds()
  .then(data => {
    addOptions(data);
    select.style.display = 'block';
  })
  .catch(() => (errorEl.style.display = 'block'))
  .finally(() => (loderEl.style.display = 'none'));

function addOptions(breedsArr) {
  const options = breedsArr
    .map(({ id, name }) => `<option value="${id}">${name}</option>`)
    .join('');

  select.insertAdjacentHTML('beforeend', options);
}

select.addEventListener('change', addMurkup);

function addMurkup(event) {
  catEL.innerHTML = '';
  loderEl.style.display = 'block';
  fetchCatByBreed(event.target.value)
    .then(data => createMurkup(data))
    .catch(() => (errorEl.style.display = 'block'))
    .finally(() => (loderEl.style.display = 'none'));
}

function createMurkup(catData) {
  const { description, name, temperament } = catData[0].breeds[0];
  const murkup = `<img src="${catData[0].url}" alt="${name}" width='300'><div><h1>${name}</h1><p>${description}</p><p> <b>Temperament: </b>${temperament}</p></div>`;

  catEL.insertAdjacentHTML('beforeend', murkup);
}
