window.onload = function(e) {
    console.log('documento cargado');

    //Cambiar el título del segundo h2
    document.getElementsByTagName('h2')[1].innerText = 'Changed from JS!!';

    //Cambiar el color de todos los .first que estén dentro de un artículo
    const elements = document.querySelectorAll('article .first');
    
    elements.forEach(function(element) {
        element.style.color = 'red';
    });

    //Seleccionar el elemento con id == username
    document.getElementById('usename');

    //Seleccionar todos lo elementos li con class == item
    const items = document.querySelectorAll('li.item');
    
    //Seleccionar todos lo buttons dentro de class == buttons
    const buttons = document.querySelectorAll('.buttons button');

    //Cambiar el color de fondo del primer párrafo
    document.querySelector('p')[0].style.backgroundColor = 'yellow';

    //Cambiar el color de frente (forecolor) de los elementos buttons dentro de class == buttons
    document.querySelectorAll('.buttons button').forEach(function(button) {
        button.style.color = 'blue';
    });

}