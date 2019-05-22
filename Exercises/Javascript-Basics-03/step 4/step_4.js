var x = document.querySelector('#password');
    var y = document.querySelector('#confirmation');
    var z = document.querySelector('button');
    z.addEventListener('click',function(){
      if(x.value!=y.value){
        x.style.borderColor='red'
        y.style.borderColor='red'
      }
    });
    