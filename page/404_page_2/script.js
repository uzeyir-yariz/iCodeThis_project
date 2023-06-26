var conter = document.querySelector('#cont');
let marks = document.querySelectorAll('button');

marks.forEach(function(mark) {
    mark.addEventListener("click", destroy);
});

function destroy(){
    conter.style.display = "none";
}