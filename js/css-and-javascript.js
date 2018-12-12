
document.getElementById("change-font-family").addEventListener("click", function(){
      // array of font families
      var font_families = ["Jazz LET, fantasy", "Brush Script MT, Brush Script Std, cursive", "Lucida Handwriting", "Trattatello, fantasy"];
      
      // choose random font from array
      var newFont = font_families[Math.floor(Math.random() * 4)];
      
      // assign font to div
      document.getElementsByTagName("div")[4].style.fontFamily = newFont;
  });

  document.getElementById("change-font-color").addEventListener("click",function(){
    // get a random hex number
    var randColor = '#'+Math.floor(Math.random()*16777215).toString(16);
    
    // assign new size to div
    document.getElementsByTagName("div")[5].style.color = randColor;   
});

document.getElementById("change-background-color").addEventListener("click",function(){
    // get a random hex number
    var randColor = '#'+Math.floor(Math.random()*16777215).toString(16);
    
    // assign new size to h1
    document.getElementsByTagName("div")[8].style.backgroundColor = randColor;   
});

document.getElementById("change-padding").addEventListener("click",function(){
    // get random padding amount
    var randPadding = Math.floor(Math.random() * 30);
    randPadding = randPadding + "px";
    
    // assign new padding to div10
    document.getElementsByTagName("div")[10].style.padding = randPadding; 
});

document.getElementById("change-class").addEventListener("click", function(){
    var div = document.getElementById("class-change");
    if(div.classList.contains('colorful-donkey')){
        div.classList.remove('colorful-donkey');
    } else {
        div.classList.add('colorful-donkey');
    }
});

//CRAZINESSSSS, LETS ADD IT ALL TOGETHER

document.getElementById("crazy-changes").addEventListener("click", function(){
document.getElementsByTagName("div")[14].style.fontFamily = newFont;
document.getElementsByTagName("div")[14].style.backgroundColor = randColor;   
document.getElementsByTagName("div")[14].style.padding = randPadding; 
});

//need variables outside of their classes to combine them into one, only runs once

// get random padding amount
var randPadding = Math.floor(Math.random() * 30);
randPadding = randPadding + "px";
    
// get a random hex number
var randColor = '#'+Math.floor(Math.random()*16777215).toString(16);
    
// array of font families
var font_families = ["Jazz LET, fantasy", "Brush Script MT, Brush Script Std, cursive", "Lucida Handwriting", "Trattatello, fantasy"];
      
// choose random font from array
var newFont = font_families[Math.floor(Math.random() * 4)];
      
