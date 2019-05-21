 var x=document.createElement('div');
    var b=document.querySelector('body');
    var s=document.querySelector('script');
    b.insertBefore(x,s);
    var z=document.getElementById('name');
    z.onkeyup=function(){
      x.innerHTML=z.value;
    }