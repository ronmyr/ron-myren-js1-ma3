const key = "01b1fe161cb24a61b2630a2620600d83";
const url = `https://api.rawg.io/api/games?dates=2019-01-01,2019-12-31&ordering=-rating&key=${key}`;
const proxy = "https://noroffcors.onrender.com/";
const corsFix = proxy + url;
let resultscontainer = document.querySelector(".resultscontainer");
const loader = document.querySelector(".loader");

    async function fetchAPI() {
        try {
            const response = await fetch(corsFix);
            const data = await response.json();
            const list = data;
            resultscontainer.innerHTML  = "";
                for (var i = 0; i < list.lenght; i++) {
                    if (i === 8) {
                        break;
                    }
                    resultscontainer.innerHTML += 
                    `   <li><p>Name: ${list[i].name}</p></li>
                        <li><p>Name: ${list[i].rating}</p></li>
                        <li><p>Name: ${list[i].tags.lenght}</p></li>`;
                        console.log(resultscontainer);
                }
        } catch (error) {

            resultscontainer.innerHTML = "";
            loader.style.csstext = `display: none;`
            resultscontainer.innerHTML = "An error occured!"
            console.log(resultscontainer);
        }
    }

    fetchAPI();