var link = "https://icodethis.com/uzeyir_yariz";

var elementes = document.querySelectorAll("[href]"); 

window.onload = function(){
    for(let i = 0; i < elementes.length; i++){
        elementes[i].href = link;
    }
}