const movies = [
    {
        title: "Inception",
        poster: "https://m.media-amazon.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_SX300.jpg",
        description: "A thief who steals corporate secrets through the use of dream-sharing technology."
    },
    {
        title: "The Shawshank Redemption",
        poster: "https://m.media-amazon.com/images/M/MV5BNDE3ODcxYzMtY2YzZC00NmNlLWJiNDMtZDViZWM2MzIxZDYwXkEyXkFqcGdeQXVyNjAwNDUxODI@._V1_SX300.jpg",
        description: "Two imprisoned men bond over a number of years, finding solace and eventual redemption through acts of common decency."
    },
    {
        title: "The Godfather",
        poster: "https://m.media-amazon.com/images/M/MV5BM2MyNjYxNmUtYTAwNi00MTYxLWJmNWYtYzZlODY3ZTk3OTFlXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg",
        description: "The aging patriarch of an organized crime dynasty transfers control of his clandestine empire to his reluctant son."
    },
    {
        title: "Pulp Fiction",
        poster: "https://m.media-amazon.com/images/M/MV5BNGNhMDIzZTUtNTBlZi00MTRlLWFjM2ItYzViMjE3YzI5MjljXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg",
        description: "The lives of two mob hitmen, a boxer, a gangster and his wife intertwine in four tales of violence and redemption."
    },
    {
        title: "The Dark Knight",
        poster: "https://m.media-amazon.com/images/M/MV5BMTMxNTMwODM0NF5BMl5BanBnXkFtZTcwODAyMTk2Mw@@._V1_SX300.jpg",
        description: "When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, Batman must accept one of the greatest psychological and physical tests."
    },
    {
        title: "Forrest Gump",
        poster: "https://m.media-amazon.com/images/M/MV5BNWIwODRlZTUtY2U3ZS00Yzg1LWJhNzYtMmZiYmEyNmU1NjMzXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg",
        description: "The presidencies of Kennedy and Johnson, the Vietnam War, the Watergate scandal and other historical events unfold from the perspective of an Alabama man."
    }
];

function createMovieCard(movie) {
    const card = document.createElement('div');
    card.className = 'movie-card';

    const img = document.createElement('img');
    img.src = movie.poster;
    img.alt = movie.title;
    img.loading = 'lazy';

    const content = document.createElement('div');
    content.className = 'movie-card-content';

    const title = document.createElement('h3');
    title.textContent = movie.title;

    const year = document.createElement('span');
    year.className = 'movie-year';
    year.textContent = movie.year || '2023';

    const rating = document.createElement('div');
    rating.className = 'movie-rating';
    rating.innerHTML = `⭐ ${movie.rating || '9.2'}/10`;

    const description = document.createElement('p');
    description.textContent = movie.description;

    const genre = document.createElement('div');
    genre.className = 'movie-genre';
    genre.textContent = movie.genre || 'Drama';

    title.appendChild(year);
    content.appendChild(title);
    content.appendChild(rating);
    content.appendChild(description);
    content.appendChild(genre);

    card.appendChild(img);
    card.appendChild(content);

    return card;
}

function displayMovies() {
    const container = document.getElementById('movie-container');
    movies.forEach(movie => {
        const card = createMovieCard(movie);
        container.appendChild(card);
    });
}

document.addEventListener('DOMContentLoaded', displayMovies);
