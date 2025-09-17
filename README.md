# Formulario de Registro - Práctica Front-End

## Descripción del Proyecto
Este proyecto es una práctica académica de desarrollo Front-End que consiste en la creación de un formulario de registro utilizando HTML5, CSS3 y JavaScript vanilla. El proyecto se desarrolló en 3 sesiones progresivas.

## Estructura del Proyecto
```
formulario-registro/
│
├── index.html          # Estructura HTML del formulario
├── style.css           # Estilos CSS para el diseño
├── script.js           # Validaciones JavaScript
└── README.md           # Documentación del proyecto
```

## Desarrollo por Sesiones

### Sesión 1 (1h) - HTML Básico
**Objetivo:** Crear la estructura básica del formulario
- ✅ Creación de archivo `index.html`
- ✅ Estructura de documento HTML5 completa
- ✅ Formulario de registro con campos obligatorios:
  - Nombre (input tipo text)
  - Correo (input tipo email)  
  - Contraseña (input tipo password)
- ✅ Formulario probado en navegador

### Sesión 2 (1h) - CSS Inicial
**Objetivo:** Aplicar estilos y mejorar la presentación
- ✅ Creación de archivo `style.css` y vinculación al HTML
- ✅ Estilos básicos aplicados:
  - Colores personalizados
  - Bordes y sombras
  - Tipografía (Arial, sans-serif)
- ✅ Uso de Flexbox para centrar el formulario
- ✅ Efectos hover y focus en elementos interactivos

### Sesión 3 (1h) - JavaScript y Validaciones
**Objetivo:** Implementar validaciones del lado del cliente
- ✅ Creación de archivo `script.js` y vinculación
- ✅ Validaciones implementadas:
  - Correo no vacío y formato válido (regex)
  - Contraseña con mínimo 8 caracteres
  - Nombre no vacío
  - Prevención de correos duplicados
- ✅ Alertas simples con `alert()` (cumple requerimiento)
- ✅ Mensajes de error visuales adicionales (mejora UX)
- ✅ Prevención del envío con datos inválidos
- ✅ Botón de limpiar formulario inteligente

## Funcionalidades

### Validaciones Implementadas
1. **Nombre:** No puede estar vacío
2. **Correo electrónico:** 
   - No puede estar vacío
   - Debe tener formato válido (ejemplo@dominio.com)
   - No puede ser un correo ya registrado anteriormente
3. **Contraseña:** Debe tener mínimo 8 caracteres

### Características Técnicas
- 📱 Diseño responsivo
- ✨ Interfaz intuitiva y limpia
- 🔒 Validaciones en tiempo real
- 🎨 Efectos visuales (hover, focus)
- 📝 Código limpio y comentado
- ⚠️ Alertas `alert()` (requisito académico cumplido)
- 💬 Mensajes visuales elegantes (mejora de UX)
- 🧹 Botón inteligente para limpiar formulario

## Instalación y Ejecución

### Requisitos Previos
- Navegador web moderno (Chrome, Firefox, Safari, Edge)
- No se requieren dependencias externas

### Pasos para Ejecutar

1. **Descargar o clonar el proyecto:**
   ```bash
   git clone [URL-DEL-REPOSITORIO]
   cd formulario-registro
   ```

2. **Abrir el archivo HTML:**
   - **Método 1:** Doble clic en `index.html`
   - **Método 2:** Clic derecho → "Abrir con" → Navegador web
   - **Método 3:** Arrastrar `index.html` al navegador

3. **Para desarrollo (servidor local opcional):**
   ```bash
   # Con Python 3
   python -m http.server 8000
   
   # Con Node.js (si tienes live-server)
   npx live-server
   ```

## Uso del Formulario

1. **Completar los campos:**
   - Ingrese su nombre completo
   - Ingrese un correo válido (formato: usuario@dominio.com)
   - Ingrese una contraseña de al menos 8 caracteres

2. **Enviar el formulario:**
   - Haga clic en "Crear Cuenta"
   - Si hay errores:
     - Aparecerá un `alert()` (requisito académico)
     - Se mostrará mensaje visual elegante en la interfaz
     - Después de 2 segundos aparecerá botón "Limpiar Formulario"
   - Si el correo ya fue registrado, se mostrará error de duplicado
   - Si es válido, verá alert de éxito + mensaje visual

3. **Validaciones en tiempo real:**
   - Los campos se validan al enviar el formulario
   - Mensajes de error claros y específicos
   - El formulario se limpia después del envío exitoso

## Tecnologías Utilizadas

| Tecnología | Versión | Propósito |
|------------|---------|-----------|
| HTML5 | - | Estructura y semántica |
| CSS3 | - | Estilos y diseño responsivo |
| JavaScript | ES6+ | Validaciones e interactividad |

## Validaciones Detalladas

### Validación de Correos Duplicados
```javascript
let correosRegistrados = [];

// Verificar duplicados
if (correosRegistrados.includes(correo.toLowerCase())) {
    alert('Error: Este correo electrónico ya está registrado');
}

// Agregar a la lista si es válido
correosRegistrados.push(correo.toLowerCase());
```
- Mantiene una lista de correos ya registrados
- Compara en minúsculas para evitar case-sensitivity
- Persiste durante la sesión del navegador
- Evita registros duplicados

### Validación de Correo
```javascript
const formatoCorreo = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
```
- Verifica que no esté vacío
- Valida formato con expresión regular
- Rechaza correos mal formados
- Verifica que no esté previamente registrado

### Validación de Contraseña
```javascript
if (contrasena.length < 8) {
    alert('Error: La contraseña debe tener mínimo 8 caracteres');
}
```
- Verifica longitud mínima de 8 caracteres
- Cuenta todos los caracteres (letras, números, símbolos)

## Estructura de Archivos

### index.html
```html
<!DOCTYPE html>
<html lang="es">
<head>
    <!-- Meta tags y enlaces -->
</head>
<body>
    <!-- Formulario HTML -->
    <script src="script.js"></script>
</body>
</html>
```

### style.css
```css
/* Estilos globales */
body { /* Flexbox centrado */ }

/* Estilos del formulario */
form { /* Diseño y colores */ }

/* Estilos interactivos */
button:hover { /* Efectos */ }
```

### script.js
```javascript
document.addEventListener('DOMContentLoaded', function() {
    // Event listeners y validaciones
});
```

## Autor
**Nombre:** [Tu Nombre Completo]  
**Correo:** [tu.correo@ejemplo.com]  
**GitHub:** [tu-usuario-github]

## Fecha de Entrega
[Fecha de entrega de la práctica]

---

**Nota:** Este proyecto fue desarrollado como parte de una práctica académica para la asignatura de desarrollo Front-End. Cumple con todos los requerimientos solicitados en las instrucciones.