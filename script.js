// Esperar a que el DOM esté completamente cargado
document.addEventListener('DOMContentLoaded', function() {
    
    // Array para almacenar los correos registrados
    let correosRegistrados = [];
    
    // Obtener el formulario
    const formulario = document.getElementById('formularioRegistro');
    
    // Agregar evento al formulario cuando se envíe
    formulario.addEventListener('submit', function(evento) {
        // Prevenir el envío normal del formulario
        evento.preventDefault();
        
        // Obtener los valores de los campos
        const nombre = document.getElementById('nombre').value.trim();
        const correo = document.getElementById('correo').value.trim();
        const contrasena = document.getElementById('contrasena').value;
        
        // Limpiar estilos de error previos
        document.querySelectorAll('input').forEach(input => {
            input.classList.remove('error');
        });
    
    // Validación en tiempo real mientras el usuario escribe
    const campos = ['nombre', 'correo', 'contrasena'];
    
    campos.forEach(campoId => {
        const campo = document.getElementById(campoId);
        
        campo.addEventListener('input', function() {
            // Remover errores visuales cuando el usuario empieza a corregir
            campo.classList.remove('error');
            const fieldError = campo.parentNode.querySelector('.field-error');
            if (fieldError) {
                fieldError.remove();
            }
            
            // Verificar si ya no hay errores y remover botón de limpiar
            setTimeout(() => {
                const remainingErrors = document.querySelectorAll('.field-error, .error-message');
                if (remainingErrors.length === 0) {
                    const clearButton = document.querySelector('.clear-button');
                    if (clearButton) {
                        clearButton.style.animation = 'fadeOut 0.3s ease forwards';
                        setTimeout(() => clearButton.remove(), 300);
                    }
                }
            }, 100);
        });
        
        campo.addEventListener('blur', function() {
            const valor = campo.value.trim();
            
            // Validar cada campo específico
            if (campoId === 'nombre' && valor === '') {
                mostrarErrorCampo('El nombre es obligatorio', campoId);
            } else if (campoId === 'correo') {
                if (valor === '') {
                    mostrarErrorCampo('El correo es obligatorio', campoId);
                } else {
                    const formatoCorreo = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
                    if (!formatoCorreo.test(valor)) {
                        mostrarErrorCampo('Formato de correo inválido', campoId);
                    } else if (correosRegistrados.includes(valor.toLowerCase())) {
                        mostrarErrorCampo('Este correo ya está registrado', campoId);
                    }
                }
            } else if (campoId === 'contrasena' && valor.length > 0 && valor.length < 8) {
                mostrarErrorCampo('Mínimo 8 caracteres', campoId);
            }
        });
    });
    
    // Función para mostrar errores específicos de campo
    function mostrarErrorCampo(mensaje, campoId) {
        const campo = document.getElementById(campoId);
        const existingError = campo.parentNode.querySelector('.field-error');
        
        if (!existingError) {
            campo.classList.add('error');
            const fieldError = document.createElement('div');
            fieldError.className = 'field-error';
            fieldError.textContent = mensaje;
            campo.parentNode.appendChild(fieldError);
        }
    }
    
    // Función para mostrar error visual (ya existía)
    function mostrarError(mensaje, campoId = null) {
        // Crear mensaje de error principal
        const errorDiv = document.createElement('div');
        errorDiv.className = 'error-message';
        errorDiv.innerHTML = mensaje;
        formulario.appendChild(errorDiv);
        
        // Si se especifica un campo, agregar clase de error y mensaje específico
        if (campoId) {
            const campo = document.getElementById(campoId);
            campo.classList.add('error');
            campo.focus();
            
            // Crear mensaje de error específico del campo
            const fieldError = document.createElement('div');
            fieldError.className = 'field-error';
            fieldError.textContent = mensaje;
            campo.parentNode.appendChild(fieldError);
        }
        
        // Remover mensaje después de 5 segundos
        setTimeout(() => {
            errorDiv.remove();
        }, 5000);
    }
        
        // Remover mensajes de error y éxito previos
        const existingMessages = document.querySelectorAll('.error-message, .success-message, .field-error');
        existingMessages.forEach(message => message.remove());
        
        // Variable para controlar si el formulario es válido
        let formularioValido = true;
        let errorMessage = '';
        
        // Función para mostrar error visual
        function mostrarError(mensaje, campoId = null) {
            // Crear mensaje de error principal
            const errorDiv = document.createElement('div');
            errorDiv.className = 'error-message';
            errorDiv.innerHTML = mensaje;
            formulario.appendChild(errorDiv);
            
            // Si se especifica un campo, agregar clase de error y mensaje específico
            if (campoId) {
                const campo = document.getElementById(campoId);
                campo.classList.add('error');
                campo.focus();
                
                // Crear mensaje de error específico del campo
                const fieldError = document.createElement('div');
                fieldError.className = 'field-error';
                fieldError.textContent = mensaje.replace('❌ Error: ', '').replace('⚠️ ', '');
                campo.parentNode.appendChild(fieldError);
            }
            
            // Remover mensaje después de 5 segundos
            setTimeout(() => {
                errorDiv.remove();
            }, 5000);
        }
        
        // Validar nombre (no debe estar vacío)
        if (nombre === '') {
            alert('❌ Error: El campo nombre no puede estar vacío'); // Alert requerido por instrucciones
            mostrarError('El campo nombre no puede estar vacío', 'nombre');
            formularioValido = false;
            return;
        }
        
        // Validar que el correo no esté vacío
        if (correo === '') {
            alert('❌ Error: El campo correo electrónico es obligatorio'); // Alert requerido por instrucciones
            mostrarError('El campo correo electrónico es obligatorio', 'correo');
            formularioValido = false;
            return;
        }
        
        // Validar formato del correo electrónico
        const formatoCorreo = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!formatoCorreo.test(correo)) {
            alert('❌ Error: El formato del correo electrónico no es válido'); // Alert requerido por instrucciones
            mostrarError('El formato del correo electrónico no es válido', 'correo');
            formularioValido = false;
            return;
        }
        
        // Validar si el correo ya está registrado
        if (correosRegistrados.includes(correo.toLowerCase())) {
            alert('❌ Error: Este correo electrónico ya está registrado'); // Alert requerido por instrucciones
            mostrarError('Este correo electrónico ya está registrado', 'correo');
            formularioValido = false;
            return;
        }
        
        // Validar que la contraseña tenga mínimo 8 caracteres
        if (contrasena.length < 8) {
            alert('❌ Error: La contraseña debe tener mínimo 8 caracteres'); // Alert requerido por instrucciones
            mostrarError('La contraseña debe tener mínimo 8 caracteres', 'contrasena');
            formularioValido = false;
            return;
        }
        
        // Si todas las validaciones pasaron
        if (formularioValido) {
            // Remover botón de limpiar si existe
            const clearButton = document.querySelector('.clear-button');
            if (clearButton) {
                clearButton.remove();
            }
            
            // Agregar el correo al array de correos registrados
            correosRegistrados.push(correo.toLowerCase());
            
            // Alert de éxito (requerido por instrucciones)
            alert('✅ ¡Éxito! Tu cuenta ha sido creada correctamente');
            
            // Crear mensaje de éxito visual (mejora de UX)
            const successDiv = document.createElement('div');
            successDiv.className = 'success-message';
            successDiv.innerHTML = `
                <strong>🎉 ¡Cuenta creada exitosamente!</strong><br>
                Bienvenido/a, ${nombre}
            `;
            formulario.appendChild(successDiv);
            
            // Opcional: mostrar los datos en la consola
            console.log('✅ Registro exitoso:');
            console.log('👤 Nombre:', nombre);
            console.log('📧 Correo:', correo);
            console.log('🔒 Contraseña:', '*'.repeat(contrasena.length));
            console.log('📋 Total correos registrados:', correosRegistrados.length);
            console.log('📝 Lista de correos:', correosRegistrados);
            
            // Limpiar el formulario después del envío exitoso
            setTimeout(() => {
                formulario.reset();
                successDiv.remove();
            }, 4000);
        }
    });
});