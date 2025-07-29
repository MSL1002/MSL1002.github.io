
let quoteTxt = document.getElementById("quote-text");
let quoteAuthor = document.getElementById("quote-author")

let quoteURL = `https://api.quotable.io/quotes/random`


document.addEventListener("DOMContentLoaded", () =>{

    getQuote();


});

async function getQuote(){
    try{
        const response = await fetch(quoteURL);

        if(!response.ok){
            quoteTxt.textContent = "Failed to get quote";
            throw new Error("Couldn't get quote")
        }

        const data = await response.json();
        console.log(data);
        setQuote(data);

    }
    catch (error){
        console.error(error)
    }
}


function setQuote(data){

    quoteTxt.textContent = data[0].content;
    quoteAuthor.textContent = "-" + data[0].author;

}
