document.getElementById("nav_items").innerHTML += `
<li class="selected">
                    <a href="">Home</a>
                </li>
                <li>
                    <a href="browse.html">Browse</a>
                </li>
                <li>
                    <a href="">Contact</a>
                </li>`





document.getElementById("moviedetails").innerHTML += `
                <div class="genre_det">SCI-FI / ADVENTURE</div>
                <h1>Dune</h1>
                <div class="deetsrat">
                    <div class="starrate">
                        <img src="img/star.svg" alt="">
                        8.3/10
                    </div>
                    <div class="starrate">
                        <img src="img/calen.svg" alt="">
                        2021
                    </div>
                    <div class="starrate">
                        <img src="img/clock.svg" alt="">
                        2h 35m
                    </div>
                </div>
                <p>A noble family becomes embroiled in a war for control over 
                    the galaxy's most valuable asset while the heir grapples with visions 
                    of his destiny.</p>
                
                <div class="watchnow">
                    <img src="img/Polygon 1.svg" alt="">
                    Watch Now
                </div>

`;


let actors = [
    {
        img: "img/Image (Timothée Chalamet).png",
        name: "Timothée Chalamet" ,
        character : "Paul Atreides"
    },
    {
        img: "img/Image (Timothée Chalamet)-1.png",
        name: "Zendaya" ,
        character : "Chani"
    },
    {
        img: "img/Image (Timothée Chalamet)-2.png",
        name: "Rebecca Ferguson" ,
        character : "Lady Jessica"
    },
    {
        img: "img/Image (Timothée Chalamet)-3.png",
        name: "Oscar Isaac" ,
        character : "Duke Leto"
    }

];

for ( i = 0; i < actors.length; i++) {
    document.getElementById("cast").innerHTML +=
    `
    <div class="actor">
                        <img src="${actors[i].img}" alt="">
                        <h5>${actors[i].name}</h5>
                        <h6>${actors[i].character}</h6>
     </div>
    
    
    `
}

document.getElementById("storyline").innerHTML += `
 <h4>Storyline</h4>
                <p>Set in the distant future, the story follows Paul Atreides, the intelligent and gifted son of Duke Leto Atreides, as his family accepts stewardship of the desert planet Arrakis, the only source of the most valuable substance in the universe: "spice" melange, a drug that extends human life and provides superhuman levels of thought. <br>

                    Though Paul's father knows the assignment is a trap, he takes his Bene Gesserit concubine Lady Jessica, young Paul, and his most trusted advisers to Arrakis. Once settled on this new world, House Atreides finds themselves caught between the machinations of ancient schools of power and a centuries-long conflict between the powerful Harkonnen dynasty and the native Fremen of Arrakis.</p>


`