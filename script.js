var button = document.getElementById("btn1")
var hadding = document.getElementById("heading")

button.addEventListener("click", function(){
    heading.innerHTML = "BABER AND KHOLI";
    hadding.style.fontSize = "4rem"
    hadding.style.color = "red"


});

var button = document.getElementById("btn2")
var para = document.getElementById("paragrph")

button.addEventListener("click",function(){
    paragrph.style.color = "blue"
    paragrph.style.backgroundColor = "red"

});


var button = document.getElementById("btn3")
var para = document.getElementById("paragrph")

button.addEventListener("click",function(){
    paragrph.style.color = "black"
    paragrph.style.backgroundColor = "aquamarine"

});

var button = document.getElementById("btn4")
var body = document.getElementById("img1")

button.addEventListener("click",function(){

    img1.style.border = " 5px solid red"
});


var button = document.getElementById("btn5")
var body = document.getElementById("img1")

button.addEventListener("click",function(){

    img1.style.display = "none"
});


var button = document.getElementById("btn6")
var body = document.getElementById("img1")

button.addEventListener("click",function(){

    img1.style.display = "block"
});



