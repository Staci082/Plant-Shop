const searchInput = document.querySelector('#search-input');
const searchBtn = document.querySelector('#search-btn');

const apiUrl = "https://house-plants.p.rapidapi.com/";
const apiKey = "9d59965122msh0180ded4becf47bp1d5351jsn3e5337020745";



async function fetchURL(method, callback) {
    fetch(apiUrl + `${method}${callback}`, {
        headers: {
            "X-RapidAPI-Key": apiKey
        }
    })
    .then(response=>response.json())
    .then(info=>{
        console.log(info);
        
    })
}



   // fetchURL("category/", "cactus+and+succulent") 


