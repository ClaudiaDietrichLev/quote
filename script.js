const btn = document.querySelector("button");
const quote = document.querySelector(".quote");
const author = document.querySelector(".author");


btn.addEventListener("click", function () {
    let p = fetch ("https://quote-garden.herokuapp.com/api/v3/quotes/random");
    let p2 = p.then ((response) => {
        return response.json();
    })
    p2.then((data) => {
        quote.innerText = data.data[0].quoteText;
        author.innerText = "- " + data.data[0].quoteAuthor;
    })
})
