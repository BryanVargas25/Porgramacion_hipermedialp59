function agregarElemento(){
    var titulo= document.getElementById('texto')

    
    var h2 = document.createElement('h2')
    var texto= document.createTextNode(titulo.value)
    h1.appendChild(texto)

    var container = document.getElementById('container')
    container.appendChild(h2)
    }