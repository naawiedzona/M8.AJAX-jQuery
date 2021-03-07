/* $( document ).ready(function() {
    let endpoint = 'http://api.icndb.com/jokes/random'
  }); */

$(document).ready(function () {
  $("#btn").click(function (e) {
    $.ajax({
      url: "http://api.icndb.com/jokes/random",
    }).then(function (data) {
      $("#joke-text").text(data.value.joke);
    });
  });
});
