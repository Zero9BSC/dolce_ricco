// Obtener todas las imágenes
const imagenes = document.querySelectorAll('.imagen-chica img');

// Recorrer todas las imágenes y agregar un event listener para el mouseover
imagenes.forEach((imagen) => {
    imagen.addEventListener('mouseover', () => {
        // Hacer zoom en la imagen
        imagen.style.transform = 'scale(1.1)';
    });

    // Agregar un event listener para el mouseout
    imagen.addEventListener('mouseout', () => {
        // Quitar el zoom de la imagen
        imagen.style.transform = 'scale(1)';
    });
});
