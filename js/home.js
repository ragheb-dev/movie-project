"use strict";

const API_KEY = "cedda032fbf5e787be318f3c78a31ab0";
const API_URL = `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}`;

const featuredMovie = document.getElementById("featuredMovie");
const moviesContainer = document.getElementById("moviesContainer");

fetch(API_URL)
    .then(function (response) {
        return response.json();
    })
    .then(function (data) {
        const movies = data.results;

        console.log(movies);
        console.log(featuredMovie);
        console.log(moviesContainer);

        featuredMovie.innerHTML = `
        <img src="https://image.tmdb.org/t/p/w500${movies[0].poster_path}">

        <div class="featured-info">
            <h3>${movies[0].title}</h3>
            <p>${movies[0].overview}</p>
            <p>⭐ ${movies[0].vote_average}</p>
            <p>📅 ${movies[0].release_date}</p>
            <button class="watch-btn">Watch Now</button>
        </div>
    `;

                movies.forEach(function (movie) {
            moviesContainer.innerHTML += `
                <div class="movie-card" onclick="showMovie(${movie.id})">
                    <img src="https://image.tmdb.org/t/p/w500${movie.poster_path}">
                    <h3>${movie.title}</h3>
                    <p>${movie.release_date}</p>
                </div>
            `;
        });
    })
    .catch(function (error) {
        console.log(error);
    });

function showMovie(id) {
    console.log("Movie ID:", id);
}