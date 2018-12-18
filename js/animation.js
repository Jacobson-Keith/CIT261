function transform() {
    document.getElementById('circle6').style.transitionProperty = 'opacity';
    document.getElementById('circle6').style.opacity='0';
    document.getElementById('circle6').style.transitionDuration = '.8s';
}
function transformback(){
    document.getElementById('circle6').style.transitionProperty = 'opacity';
    document.getElementById('circle6').style.opacity='1';
    document.getElementById('circle6').style.transitionDuration = '.8s';
}
function transition(){
    document.getElementById('circle7').style.transitionProperty = 'transform';
    document.getElementById('circle7').style.transform='scale(2,2) skewX(25deg) skewY(50deg)';
    document.getElementById('circle7').style.transitionDuration = '5s';
}
function transitionback(){
    document.getElementById('circle7').style.transitionProperty = 'transform';
    document.getElementById('circle7').style.transform='scale(1) skewX(0deg) skewY(0deg)';
    document.getElementById('circle7').style.transitionDuration = '5s';
}
function animation() {
    var elem = document.getElementById("circle8");   
    var pos = 0;
    var id = setInterval(frame, 10);
    function frame() {
      if (pos == 350) {
        clearInterval(id);
      } else {
        pos++; 
        elem.style.bottom = pos + 'px'; 
        elem.style.left = pos + 'px'; 
      }}}
