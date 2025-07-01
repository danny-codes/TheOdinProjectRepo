const img = document.querySelector('img');
fetch('https://api.giphy.com/v1/gifs/translate?api_key=IlKHuNJYVtEwiiK5eCkdsTaMWmzGzO4o&s=cats', {mode: 'cors'})
  .then(function(response) {
    return response.json();
  })
  .then(function(response) {
    // console.log(response.data.images.original.url);
    img.src = response.data.images.original.url;
  })
  .catch(e => {
    console.log(e);
  })
