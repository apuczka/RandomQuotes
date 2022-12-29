const quoteText = document.getElementById('quote-text');
const quoteId = document.getElementById('quote-id');
const quoteButton = document.getElementById('quote-button')
function randomQuote() {
  const api_url ="https://api.quotable.io/random";

  fetch(api_url)
  .then(response => response.json())
  .then(data => {
    quoteText.textContent = `"${data.content}"`;
    quoteId.textContent = ` #${data._id}`;
  })
}

randomQuote();
quoteButton.addEventListener('click', () => {
  randomQuote();
})

