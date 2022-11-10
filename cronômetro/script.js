window.onload = function () {
  
    var segundos = 00; 
    var decimos = 00; 
    var decimosId = document.getElementById("decimos")
    var segundosId = document.getElementById("segundos")
    var start = document.getElementById('iniciar');
    var parar = document.getElementById('parar');
    var reset = document.getElementById('resetar');
    var intervalo;
  
    start.onclick = function() {
      
      clearInterval(intervalo);
       intervalo = setInterval(startTimer, 10);
    }
    
      parar.onclick = function() {
         clearInterval(intervalo);
    }
    
  
    reset.onclick = function() {
       clearInterval(intervalo);
      decimos = "00";
        segundos = "00";
      decimosId.innerHTML = decimos;
        segundosId.innerHTML = segundos;
    }
    
     
    
    function startTimer () {
      decimos++; 
      
      if(decimos <= 9){
        decimosId.innerHTML = "0" + decimos;
      }
      
      if (decimos > 9){
        decimosId.innerHTML = decimos;
        
      } 
      
      if (decimos > 99) {
        console.log("seconds");
        segundos++;
        segundosId.innerHTML = "0" + segundos;
        decimos = 0;
        decimosId.innerHTML = "0" + 0;
      }
      
      if (segundos > 9){
        segundosId.innerHTML = segundos;
      }
    
    }
    
  
  }