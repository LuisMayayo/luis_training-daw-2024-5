window.onload = function() {
    console.log('documento cargado');

    // Obtener todos los enlaces
    const enlaces = document.querySelectorAll('a[id^="enlace_"]');
    
    // Iterar sobre cada enlace
    enlaces.forEach((enlace, index) => {
        enlace.addEventListener('click', function(e) {
            e.preventDefault(); // Prevenir el comportamiento por defecto del enlace
            
            // Obtener la sección de contenido correspondiente
            const contenido = document.getElementById(`contenidos_${index + 1}`);
            
            // Alternar la visibilidad de la sección
            if (contenido.style.display === 'none') {
                contenido.style.display = 'block'; // Mostrar contenido
                enlace.innerHTML = 'Ocultar contenidos'; // Cambiar texto
            } else {
                contenido.style.display = 'none'; // Ocultar contenido
                enlace.innerHTML = 'Mostrar contenidos'; // Cambiar texto
            }
        });
    });
};
