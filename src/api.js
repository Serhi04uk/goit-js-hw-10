const API_KEY =
  'live_PWncK5ww2UNCjxWtQWxWENlQMrLeXQIwkOI1S6W5pPaxRgAPnTZt7gZV1lH4CfCV';

export function fetchBreeds() {
  return fetch(`https://api.thecatapi.com/v1/breeds?api_key=${API_KEY}`).then(
    data => data.json()
  );
}

export function fetchCatByBreed(breedId) {
  return fetch(
    `https://api.thecatapi.com/v1/images/search?breed_ids=${breedId}&api_key=${API_KEY}`
  ).then(data => data.json());
}
