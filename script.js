var box = document.getElementById('box');
var center = document.getElementById('center');
var html = document.documentElement;
var body = document.body;


html.onmousemove = function(e){
    var posX = e.clientX;
    var posY = e.clientY;
    box.style.top = `${posY-20}px`
    box.style.left = `${posX-20}px`
    
}


