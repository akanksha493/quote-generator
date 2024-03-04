const url = "https://api.quotable.io";

function getRandomQuote(){
    fetch(url+"/quotes/random",{mode:'cors'})
    .then(function(response){
        // console.log(response.json())
        return response.json();
    })
    .then(function(response){
        // console.log(response[0]);
        data = response[0];
        content.textContent = data.content;
        author.textContent = data.author;
    })
    .catch(function(err){
        console.log(err);
    });
}


const content = document.querySelector("#quote-content");
const author = document.querySelector("#quote-author");
const getQuoteBttn = document.querySelector(".get-random-quote");
getQuoteBttn.addEventListener("click", getRandomQuote);