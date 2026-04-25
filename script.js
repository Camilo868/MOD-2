console.log("Welcome to the portfolio of Camilo!");
alert("¡Hello! Thanks to visit my portfolio.");

// Selección de los elementos del DOM
const btnInfo = document.getElementById('btn-info');
const extraInfo = document.getElementById('extra-info');

// clic para el efecto dinámico (Mostrar/Ocultar)
btnInfo.addEventListener('click', () => {
    // Verificamos si el contenido está oculto
    if (extraInfo.style.display === 'none') {
        // Lo ocultamos
        extraInfo.style.display = 'block';
        btnInfo.textContent = 'See less';
    } else {
        // Lo mostramos
        extraInfo.style.display = 'none';
        btnInfo.textContent = 'Know more';
    }
});