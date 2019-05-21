var x=document.querySelectorAll('img');
      for(var i=0;i<x.length;i++){
        x[i].addEventListener('mouseover', c.bind(x));
      }
      function c(l){
        var id = l.target.id.substr(5)
        l.target.src = "images/image" + id + "_2.jpg"
      }