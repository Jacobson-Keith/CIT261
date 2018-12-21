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
    htmlString += "<p>" + data[i].name + " lives in " + data[i].address.city + ", if care to know the geolocation, that would be latitude: " + data[i].address.geo.lat + " and longitude: " + data[i].address.geo.lat + "." + 
    " " + data[i].name + " works for " + data[i].company.name + " doing " + data[i].company.catchPhrase + " work." + "<br/>" + "You can also visit their website by going to: " + data[i].website + "!" +
    " If you want to contact " + data[i].name + " you can email or call at: " + "<ul>" + data[i].email + "  OR <br/>" + data[i].phone + "</ul>" + "<hr/>" + "</p>"
  }

  animalContainer.insertAdjacentHTML('beforeend', htmlString);
}
