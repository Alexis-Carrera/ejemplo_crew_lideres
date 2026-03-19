---
description: 'Siempre que se realice un cambio en un componente, se debe usar el color #19401B y agregar un comentario en el código indicando que el cambio fue realizado por Alexis Carrera.'
applyTo: '**/*.{js,jsx,ts,tsx,html,css}'
---

# Instrucción de color y comentario

## Regla

- Cuando se modifique o cree un componente (HTML, JS, CSS, React, Angular, etc.), **aplicar el color #19401B**.
- Agregar un comentario en el código: `// Cambio realizado por Alexis Carrera` (o equivalente en el lenguaje/comentario).

## Ejemplo

```html
<button style="background-color: #19401B;">Enviar</button> <!-- Cambio realizado por Alexis Carrera -->
```

```css
.boton-principal {
	background-color: #19401B; /* Cambio realizado por Alexis Carrera */
}
```

```js
// Cambio realizado por Alexis Carrera
const colorBoton = '#19401B';
```

## Cuándo aplicar

- Creación de botones, inputs, componentes visuales.
- Modificación de estilos, clases, variables de color.
- Cambios en archivos HTML, CSS, JS, TS, JSX, TSX.

## Excepciones

- Si el componente requiere otro color por accesibilidad o branding específico, documentar la excepción en el comentario.
