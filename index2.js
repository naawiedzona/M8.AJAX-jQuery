console.log("index2 fetch");

document.querySelector("#btn").addEventListener("click", getJoke);

function getJoke() {
  fetch("http://api.icndb.com/jokes/random")
    .then(function (res) {
      return res.json();
    })
    .then(function (data) {
      document.querySelector("#joke-text").innerHTML = data.value.joke;
    });
}
