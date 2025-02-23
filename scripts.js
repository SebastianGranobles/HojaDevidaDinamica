
// Función para mostrar la hoja de vida en la ventana modal
document.getElementById("form-hoja-vida").addEventListener("submit", function(event) {
    event.preventDefault();

    // Obtener valores del formulario
    const nombre = document.getElementById("nombre").value;
    const estudios = document.getElementById("estudios").value;
    const referencias = document.getElementById("referencias").value;
    const habilidades = document.getElementById("habilidades").value;
    const foto = document.getElementById("foto").files[0];

    // VRevisa  si todos los campos están completos.
    if (!nombre || !estudios || !referencias || !habilidades || !foto) {
        // Mostrar mensaje de error si algún campo está vacío
        document.getElementById("error-message").classList.remove("hidden");
        return; // Detener la ejecución si hay error
    }

    // Ocultar el mensaje de error si todos los campos son correctos
    document.getElementById("error-message").classList.add("hidden");

    // Mostrar la información en la ventana modal
    document.getElementById("nombre-result").textContent = nombre;
    document.getElementById("estudios-result").textContent = estudios;
    document.getElementById("referencias-result").textContent = referencias;
    document.getElementById("habilidades-result").textContent = habilidades;

    // Si se ha seleccionado una foto, mostrarla
    const reader = new FileReader();
    reader.onload = function(e) {
        document.getElementById("foto-result").src = e.target.result;
        document.getElementById("foto-result").style.display = "block";
    };
    reader.readAsDataURL(foto);

    // Mostrar la ventana modal
    document.getElementById("myModal").style.display = "block";
});

// Función para eliminar la información mostrada en el modal
document.getElementById("eliminar-btn").addEventListener("click", function() {
    // Borrar los datos en el modal
    document.getElementById("nombre-result").textContent = '';
    document.getElementById("estudios-result").textContent = '';
    document.getElementById("referencias-result").textContent = '';
    document.getElementById("habilidades-result").textContent = '';
    document.getElementById("foto-result").style.display = "none";

    // Cerrar el modal después de borrar la información
    document.getElementById("myModal").style.display = "none";
});

// Función para cerrar la ventana modal
document.getElementById("modal-close").addEventListener("click", function() {
    document.getElementById("myModal").style.display = "none";
});

// Cerrar la ventana modal si el usuario hace clic fuera de ella
window.onclick = function(event) {
    if (event.target == document.getElementById("myModal")) {
        document.getElementById("myModal").style.display = "none";
    }
};
