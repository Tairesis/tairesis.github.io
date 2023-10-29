function validarFormulario() {
    var nombre = document.getElementById("nombre").value;
    var email = document.getElementById("email").value;
    var telefono = document.getElementById("telefono").value;
    var sexo = document.getElementById("sexo").value;
    var edad = document.getElementById("edad").value;

    var resultadoDiv = document.getElementById("resultado");
    resultadoDiv.innerHTML = ""; // Limpiar mensajes anteriores

    var errores = [];

    // Validar nombre
    if (nombre.length === 0) {
        errores.push("Por favor, ingrese su nombre.");
    }

    // Validar email 
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email.match(emailRegex)) {
        errores.push("Por favor, ingrese un email válido.");
    }

    // Validar teléfono
    var telefonoRegex = /^\d{10}$/;
    if (!telefono.match(telefonoRegex)) {
        errores.push("Por favor, ingrese un número de teléfono válido (10 dígitos).");
    }


    // Validar edad
    if (isNaN(edad) || parseInt(edad) <= 0) {
        errores.push("Por favor, ingrese una edad válida.");
    }

    // Mostrar mensajes de error o resultados
    if (errores.length > 0) {
        var erroresHTML = "<ul>";
        errores.forEach(function(error) {
            erroresHTML += "<li>" + error + "</li>";
        });
        erroresHTML += "</ul>";
        resultadoDiv.innerHTML = erroresHTML;
    } else {
        // Crear el elemento de resultado si no hay errores
        var resultadoHTML = "<h2>Información enviada:</h2>";
        resultadoHTML += "<p><strong>Nombre:</strong> " + nombre + "</p>";
        resultadoHTML += "<p><strong>Email:</strong> " + email + "</p>";
        resultadoHTML += "<p><strong>Teléfono:</strong> " + telefono + "</p>";
        resultadoHTML += "<p><strong>Sexo:</strong> " + sexo + "</p>";
        resultadoHTML += "<p><strong>Edad:</strong> " + edad + "</p>";

        // Agregar el resultado al contenedor de resultados
        resultadoDiv.innerHTML = resultadoHTML;
    }
}
