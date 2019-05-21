var x = document.querySelectorAll('a');
    var y = document.querySelector('p');
    for (var i=0;i<x.length;i++){
    x[i].addEventListener('click',function(i){
      y.style.visibility='hidden';
    });}