// Función para manejar la reserva
document.querySelector('form').addEventListener('submit', function(event) {
    event.preventDefault(); // Previene el envío por defecto del formulario

    // Validación básica (ejemplo: verificar que el campo de nombre no esté vacío)
    const nombre = document.querySelector('input[name="nombre"]');
    const email = document.querySelector('input[name="email"]');

    if (!nombre.value || !email.value) {
        alert('Por favor, completa todos los campos.');
        return; // Detiene el proceso si hay campos vacíos
    }

    // Si la validación es exitosa, mostramos la alerta
    alert('Reserva realizada con éxito. ¡Te esperamos!');

    // Limpiar el formulario
    document.querySelector('form').reset();
});
