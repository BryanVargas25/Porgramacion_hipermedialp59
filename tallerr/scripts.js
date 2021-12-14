function guardar(){
   
    var TITULO = document.getElementById("titulo").value;
    var DESCRPCION = document.getElementById("descripcion").value;
    var GENERO = document.getElementById("genero").value;
    var fila="<tr><td>"+ TITULO +"</td><td>"+ DESCRPCION +"</td><td>"+ GENERO +"</td></tr>";
    var btn = document.createElement("TR");
   	btn.innerHTML=fila;
    document.getElementById("tablita").appendChild(btn);

}