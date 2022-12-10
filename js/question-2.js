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
            const list = data.results;
            console.log(data.results);
            loader.style.cssText = `display: none;`
            
                for (let i = 0; i < list.length; i++) {

                    if (i === 8) {
                        break;
                    }
                    
                    resultscontainer.innerHTML += 
                    `   
                    <ul>
                        <li><p>Name: ${list[i].name}</p></li>
                        <li><p>Rating: ${list[i].rating}</p></li>
                        <li><p>Tags: ${list[i].tags.length}</p></li>
                        </ul>`;   
                }

        } catch (error) {

            resultscontainer.innerHTML = "";
            loader.style.cssText = `display: none;`
            resultscontainer.innerHTML = "An error occured!"
        }
    }

    fetchAPI();