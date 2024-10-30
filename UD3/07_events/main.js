window.onload = function() {
    console.log('documento cargado');

    const enlaces = document.querySelectorAll('a[id^="enlace_"]');
    
    enlaces.forEach((enlace, index) => {
        enlace.addEventListener('click', function(e) {
            e.preventDefault();
            
            const contenido = document.getElementById(`contenidos_${index + 1}`);
            
            if (contenido.style.display === 'none') {
                contenido.style.display = 'block';
                enlace.innerHTML = 'Ocultar contenidos';
            } else {
                contenido.style.display = 'none';
                enlace.innerHTML = 'Mostrar contenidos';
            }
        });
    });
};
