var animalContainer = document.getElementById("users");
var btn = document.getElementById("btn");

btn.addEventListener("click", function(){
  var ourRequest = new XMLHttpRequest();
  ourRequest.open('GET', 'https://jsonplaceholder.typicode.com/users');
  ourRequest.onload = function() {
    var ourData = JSON.parse(ourRequest.responseText);
    renderHTML(ourData);
  };
  ourRequest.send();
});

function renderHTML(data) {
  var htmlString = "";

// scroll through data to show all the arrays
  for (i = 0; i < data.length; i++) {
    htmlString += "<p>" + data[i].name + " lives in " + data[i].address.city + ".</p>"
  }

  animalContainer.insertAdjacentHTML('beforeend', htmlString);
}
