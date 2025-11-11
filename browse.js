document.getElementById("nav_items").innerHTML += `
<li class="selected">
                    <a href="">Home</a>
                </li>
                <li>
                    <a href="">Browse</a>
                </li>
                <li>
                    <a href="">Contact</a>
                </li>`

const movies = [
    {
        title: "Dune part: 2",
        poster: "dune .jpg"
    },
    {
        title: "Culpa Nuestra",
        poster: "culpa.jpg"
    },
    {
        title: "The map that leads to you",
        poster: "map that leads.jpg"
    },
    {
        title: "Wicked",
        poster: "wicked.jpg"
    },
    {
        title: "It ends with us",
        poster: "img/it ends with us.jpg"
    }
];


const moviesGrid = document.getElementById('moviesGrid');

movies.forEach(movie => {
    const movieCard = `
        <div class="movie-card">
            <img src="${movie.poster}" alt="${movie.title}" class="movie-poster">
            <div class="movie-title">${movie.title}</div>
        </div>
    `;
    moviesGrid.innerHTML += movieCard;
});
