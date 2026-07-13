# Desafío 3 - Funciones

Proyecto práctico de JavaScript enfocado en transformación de funciones, parámetros, valores por defecto, manipulación del DOM y manejo de eventos.

La solución está desarrollada únicamente con **HTML5, CSS3 y JavaScript vanilla**, sin frameworks, librerías externas, Node.js, npm, bundlers ni otras dependencias.

## Objetivo

Aplicar conceptos fundamentales de funciones en JavaScript mediante cuatro actividades:

1. Transformar una declaración de función en una función de expresión.
2. Transformar una función tradicional en una arrow function de una línea.
3. Crear una función `pintar` que reciba el elemento afectado y un color con valor por defecto.
4. Trabajar con eventos de clic y teclado para modificar colores y crear elementos dinámicamente en el DOM.

## Estructura del proyecto

```text
desafio-3-funciones/
├── index.html
├── 1_funcion.js
├── 2_arrow.js
├── pintar.html
├── 4_colores.html
├── README.md
└── assets/
    ├── css/
    │   └── styles.css
    └── js/
        ├── script.js
        └── 4_colores.js
```

## Actividades

### 1. Función de expresión

Archivo: `1_funcion.js`

Transforma una declaración de función tradicional en una función de expresión que suma tres argumentos.

### 2. Arrow function

Archivo: `2_arrow.js`

Convierte una función de suma en una arrow function escrita en una sola línea.

### 3. Pintar un elemento

Archivos:

- `pintar.html`
- `assets/js/script.js`

La función `pintar`:

- recibe directamente el elemento que debe modificar;
- recibe el color como argumento;
- utiliza `green` como color por defecto;
- al hacer clic en el párrafo recibe explícitamente `yellow`.

### 4. Cuatro colores y teclado

Archivos:

- `4_colores.html`
- `assets/js/4_colores.js`

Incluye cuatro `div` de `200px × 200px` en azul, rojo, verde y amarillo. Cada uno cambia a negro mediante un evento `click` agregado con `addEventListener`.

También incorpora interacción con teclado:

| Tecla | Acción |
|---|---|
| `a` | Guarda rosado y cambia el `div#key` a rosado |
| `s` | Guarda naranjo y cambia el `div#key` a naranjo |
| `d` | Guarda celeste y cambia el `div#key` a celeste |
| `q` | Crea un nuevo `div` morado de `200px × 200px` |
| `w` | Crea un nuevo `div` gris de `200px × 200px` |
| `e` | Crea un nuevo `div` café de `200px × 200px` |

## Página principal

El archivo `index.html` funciona como punto de entrada del proyecto y permite acceder a las cuatro actividades desde una interfaz visual coherente con el resto de la aplicación.

Para usar el proyecto, abre `index.html` en un navegador moderno.

## Tecnologías utilizadas

- HTML5
- CSS3
- JavaScript vanilla
- DOM
- `addEventListener`
- Eventos `click` y `keydown`

## Cumplimiento académico

La implementación conserva los nombres de archivos y la estructura obligatoria del desafío, incluyendo:

- `1_funcion.js`
- `2_arrow.js`
- `pintar.html`
- `assets/js/script.js`
- `4_colores.html`

La personalización visual es complementaria y no reemplaza ni altera los requerimientos funcionales evaluados.
