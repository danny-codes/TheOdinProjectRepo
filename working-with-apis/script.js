const img = document.getElementById('gif');
const btn = document.querySelector('button');
const searchInput = document.querySelector('input');
const thumbnail = document.getElementById('header-thumb');

btn.addEventListener('click', function(e) {
  e.preventDefault();
  standardImage();
});

searchInput.addEventListener('blur', searchImage);

function searchImage() {
  let input = searchInput.value;
  fetch(`https://api.giphy.com/v1/gifs/translate?api_key=IlKHuNJYVtEwiiK5eCkdsTaMWmzGzO4o&s=${input}`, {mode: 'cors'})
  .then(function(response) {
    return response.json();
  })
  .then(function(response) {
    if (Array.isArray(response.data) && response.data.length === 0) {
      alert('Didn’t find any results for search');
      standardImage();
      return;
    } else {
    img.src = response.data.images.original.url;
    thumbnail.src = response.data.images.original.url;
    }
  })
  .catch(e => {
    console.log(e);
  })
};

function standardImage() {
fetch('https://api.giphy.com/v1/gifs/translate?api_key=IlKHuNJYVtEwiiK5eCkdsTaMWmzGzO4o&s=cats', {mode: 'cors'})
  .then(function(response) {
    return response.json();
  })
  .then(function(response) {
    img.src = response.data.images.original.url;
    thumbnail.src = response.data.images.original.url;

  })
  .catch(e => {
    console.log(e);
  })
}

// rewrite function using async and wait
// async function standardImage() {
//   const response = await fetch('https://api.giphy.com/v1/gifs/translate?api_key=IlKHuNJYVtEwiiK5eCkdsTaMWmzGzO4o&s=cats', {mode: 'cors'});
//   response.json().then(function(response) {
//     img.src = response.data.images.original.url;
//     thumbnail.src = response.data.images.original.url;

//   })
//   .catch(e => {
//     console.log(e);
//   })
// }

standardImage();