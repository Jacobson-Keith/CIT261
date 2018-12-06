var itemCounter = 5;
var btn = document.getElementById("btn");

btn.addEventListener("click", function(){
  // createElement

  //Create a list
  var newLi = document.createElement('LI');

  //Create a text node
  var newLiText = document.createTextNode('Item ' + itemCounter);

  //add class so it looks like the other listed lists
  newLi.className = 'list-group-item';

  //append text to list
  newLi.appendChild(newLiText);

  //tell it where to add new Item Element
  var items = document.querySelector('body .list-group');
  var li = document.querySelector('body li');

  items.insertBefore(newLi, li);
  itemCounter++;
})
