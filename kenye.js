const loadKenye = () => {
  const blockQuote = document.getElementById("blockquote");
  fetch("https://api.kanye.rest")
    .then((res) => res.json())
    .then((data) => {
      console.log(data.quote);
      blockQuote.innerText = data.quote;
    });
};

loadKenye();
