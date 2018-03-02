var plato1 = document.getElementById("plato1");
var plato2 = document.getElementById("plato2");
var plato3 = document.getElementById("plato3");
var plato4 = document.getElementById("plato4");

var tambor = document.getElementById("tambor");

var audio1 = document.getElementById("audio1");
var audio2 = document.getElementById("audio2");
var audio3 = document.getElementById("audio3");
var audio4 = document.getElementById("audio4");
var audio5 = document.getElementById("audio5");

/* Escuchar eventos y ejecutar el código cuando
   se produzca
   addEventListener( evento , función )
*/

plato1.addEventListener("click",function(){
    audio1.currentTime = 0;
    audio1.play();
    plato1.classList.remove("animacion");
    window.requestAnimationFrame(function(){
        plato1.classList.add("animacion");
    });
});
plato2.addEventListener("click",function(){
    audio2.currentTime = 0;
    audio2.play();
    plato2.classList.remove("animacion");
    window.requestAnimationFrame(function(){
        plato2.classList.add("animacion");
    });
});
plato3.addEventListener("click",function(){
    audio3.currentTime = 0;
    audio3.play();
    plato3.classList.remove("animacion");
    window.requestAnimationFrame(function(){
        plato3.classList.add("animacion");
    });
});
plato4.addEventListener("click",function(){
    audio4.currentTime = 0;
    audio4.play();
    plato4.classList.remove("animacion");
    window.requestAnimationFrame(function(){
        plato4.classList.add("animacion");
    });
});
tambor.addEventListener("click",function(){
    audio5.currentTime = 0;
    audio5.play();
    tambor.classList.remove("animacion");
    window.requestAnimationFrame(function(){
        tambor.classList.add("animacion");
    })
});

document.addEventListener("keydown",function(e){
    var audio = document.querySelector(`audio[keycode="${e.keyCode}"]`);
    audio.currentTime = 0;
    audio.play();
});