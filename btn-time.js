var boton = document.getElementById("btn");
var contador = 900;
var etiqueta = document.createElement("p");

etiqueta.innerHTML = "<b> Su uber llega en aprox. 15 minutos (900 segundos)</b>";
var id;

boton.parentNode.replaceChild(etiqueta, boton);

function descarga(){
   this.style.display = "none";
   id = window.setInterval(function(){
      contador--;
      if(contador < 0){
         etiqueta.parentNode.replaceChild(boton, etiqueta);
         window.clearInterval(id);
      }
      else{
         etiqueta.innerHTML = + contador.toString() + "<b> segundos para descargar. </b>";
      }
   }, 1000)
}

var clickbtn = document.getElementById("btn");
clickbtn.onclick = descarga;