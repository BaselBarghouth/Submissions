var x = document.querySelector('button');
    var y = document.querySelectorAll('input');
    console.log(y);
    x.addEventListener('click',function(){
      var r=confirm('If you want to clear press ok')
      if (r){
      for(var i=0;i<y.length;i++)
      y[i].value='';}
    });