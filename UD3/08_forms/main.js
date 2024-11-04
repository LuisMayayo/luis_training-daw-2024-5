window.onload = function () {
    const preguntaSi = document.getElementById('preguntaSi');
    const opciones = document.getElementById('opciones');
    const condiciones = document.getElementById('condiciones');
    const privacidad = document.getElementById('privacidad');
    const submitBoton = document.getElementById('submit');
    const nameInput = document.getElementById('name');
    const name2Input = document.getElementById('name2');
    const descrictionInput = document.getElementById('description');

    preguntaSi.addEventListener('cambia', () => {
        opciones.disabled = !preguntaSi.checked;
    });

    function checkSubmitStatus() {
        submitBoton.disabled = !(condiciones.checked && privacidad.checked);
    }
    condiciones.addEventListener('cambia', checkSubmitStatus);
    privacidad.addEventListener('cambia', checkSubmitStatus);

    submitBoton.addEventListener('click', (e) => {
        if (!nameInput.value || !name2Input.value) {
            e.preventDefault();
            alert("el nombre y apellidos son obligatorios");
        }
    });

    document.main_form.onsubmit = function () {
        submitBoton.disabled = true;
    };
};