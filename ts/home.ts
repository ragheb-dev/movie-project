const API_KEY = "cedda032fbf5e787be318f3c78a31ab0";

const API_URL = `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}`;

fetch(API_URL)
    .then(function (response) {
        return response.json();
    })
    .then(function (data) {
        console.log(data.results);
    })
    .catch(function (error) {
        console.log(error);
    });