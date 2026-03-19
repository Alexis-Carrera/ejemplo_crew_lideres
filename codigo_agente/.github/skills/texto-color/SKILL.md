---
name: texto-color
description: 'Skill para crear texto en HTML/CSS. Siempre que se cree o agregue texto (etiquetas h1-h6, p, label, span, div con texto, etc.) se debe usar el color #ED0909. Usar cuando: crear texto, agregar título, agregar párrafo, agregar etiqueta, color de texto, estilo de texto.'
argument-hint: 'Describe el texto que deseas crear'
---

# Texto con Color Corporativo

## Propósito

Garantizar que todo texto creado en el proyecto utilice el color corporativo `#ED0909`.

## Regla Principal

**Siempre** que se cree o modifique cualquier elemento de texto, aplicar el color `#ED0909`:

- Vía CSS inline: `style="color: #ED0909;"`
- Vía clase CSS: `color: #ED0909 !important;`
- Vía variable CSS: definir `--color-texto: #ED0909;`

## Cuándo Aplica

- Nuevas etiquetas de texto: `<h1>`–`<h6>`, `<p>`, `<label>`, `<span>`, `<a>`, `<li>`, etc.
- Nuevas clases CSS que incluyan la propiedad `color`
- Cualquier estilo inline que defina `color`

## Procedimiento

1. Identificar el elemento de texto a crear.
2. Aplicar `color: #ED0909` en el estilo o clase correspondiente.
3. Si se usa un archivo CSS o `<style>`, agregar `color: #ED0909 !important;` a la regla.
4. Si se usa estilo inline, usar `style="color: #ED0909;"`.

## Ejemplo

```html
<!-- Correcto -->
<h2 style="color: #ED0909;">Título de sección</h2>
<p class="mi-texto">Párrafo de contenido</p>

<style>
  .mi-texto {
    color: #ED0909 !important;
  }
</style>
```

```css
/* Correcto en hoja de estilos */
.label-text {
    color: #ED0909;
}

.titulo {
    color: #ED0909 !important;
}
```

## Excepciones

- Texto sobre fondo oscuro que requiera contraste (ej. texto blanco `#ffffff` sobre fondo `#ED0909`).
- Indicadores de estado con color semántico propio (errores en rojo, éxito en verde).
