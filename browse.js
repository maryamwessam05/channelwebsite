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

let movies = [
    {
        title: "Dune part: 2",
        poster: "img/dune .jpg"
    },
    {
        title: "Culpa Nuestra",
        poster: "img/culpa.jpg"
    },
    {
        title: "The map that leads to you",
        poster: "img/map that leads.jpg"
    },
    {
        title: "Wicked",
        poster: "img/wicked.jpg"
    },
    {
        title: "It ends with us",
        poster: "img/it ends with us.jpg"
    }
];


let moviesGrid = document.getElementById('moviesGrid');
        
        for (let i = 0; i < movies.length; i++) {
            let movieCard = `
                <div class="movie-card">
                    <img src="${movies[i].poster}" alt="${movies[i].title}" class="movie-poster">
                       <h2 class="movie-title">${movies[i].title}</h2>
                </div>   
          
            `;
            moviesGrid.innerHTML += movieCard;
        }





  

