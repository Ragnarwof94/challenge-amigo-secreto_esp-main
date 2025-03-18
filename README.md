# Documentación dle juego Amigo Secreto

(En VS Code, se recomienda la extensión  **Office Viewer(Markdown Editor)** `v3.5.0` para el README)

# Amigo Secreto 🎁

Este es un proyecto para realizar un sorteo de amigo secreto de manera sencilla.

# 🔗 **Página GitHub Pages:** [Amigo Secreto](https://ragnarwof94.github.io/challenge-amigo-secreto_esp-main/)

Este proyecto es una aplicación sencilla que permite a los usuarios ingresar nombres de amigos, realizar un sorteo aleatorio y determinar quién es el "amigo secreto". El juego es interactivo y permite agregar nombres, verificar si un nombre ya está en la lista y mostrar el resultado del sorteo.

## Funcionalidades

1. **Agregar Nombres**: El usuario puede escribir el nombre de un amigo en un campo de texto y agregarlo a la lista. Si el campo de texto está vacío o si el nombre ya está en la lista, se muestra una alerta de error.
2. **Visualizar la Lista de Amigos**: Los nombres agregados se muestran en una lista debajo del campo de entrada para que el usuario pueda ver qué amigos se han registrado.
3. **Sorteo Aleatorio**: Al hacer clic en el botón "Sortear Amigo", se selecciona un nombre aleatorio de la lista de amigos y se muestra quién es el "amigo secreto". Si no hay nombres en la lista, se muestra una alerta para que el usuario agregue al menos un nombre.

## Estructura del Proyecto

- **index.html**: Contiene la estructura básica de la página, incluyendo el formulario para ingresar nombres, el área donde se muestra la lista y el botón para realizar el sorteo.
- **style.css**: Estilo de la página para hacerla visualmente atractiva, incluye colores, márgenes, tipografía y otros elementos visuales.
- **app.js**: Contiene la lógica de JavaScript que permite agregar nombres, mostrar la lista y realizar el sorteo aleatorio.

## Funciones en app.js

### 1. `agregarAmigo()`

Esta función es responsable de agregar un nombre a la lista de amigos. Se ejecuta cuando el usuario hace clic en el botón "Añadir".

- **Función**:
  - Verifica si el campo de texto está vacío. Si lo está, muestra una alerta.
  - Verifica si el nombre ya está en la lista. Si ya está, muestra una alerta.
  - Agrega el nombre a un arreglo `amigos`.
  - Actualiza la lista de amigos en la interfaz.

### 2. `mostrarListaAmigos()`

Esta función actualiza la interfaz para mostrar la lista de nombres ingresados por el usuario.

- **Función**:
  - Limpia el contenido actual de la lista.
  - Recorre el arreglo `amigos` y agrega cada nombre a la lista mostrada en la página.
  - Usa `createElement` para crear los elementos de la lista (etiquetas `<li>`).

### 3. `sortearAmigo()`

Esta función se ejecuta cuando el usuario hace clic en el botón "Sortear Amigo".

- **Función**:
  - Verifica si hay al menos un nombre en la lista de amigos.
  - Selecciona un nombre aleatorio del arreglo `amigos` usando la función `Math.random()`.
  - Muestra el resultado del sorteo en la página.
  - Si no hay amigos en la lista, muestra una alerta.

## Instalación

Para probar el juego en tu propio entorno, solo necesitas los tres archivos principales: `index.html`, `style.css` y `app.js`. Puedes seguir estos pasos:

1. Descarga o clona este repositorio.
2. Abre el archivo `index.html` en tu navegador.
3. Interactúa con la aplicación y agrega los nombres de tus amigos para realizar el sorteo.

## Tecnologías Utilizadas

- **HTML**: Estructura de la página web.
- **CSS**: Estilos visuales para mejorar la apariencia de la aplicación.
- **JavaScript**: Lógica para agregar los nombres, visualizar la lista y realizar el sorteo aleatorio.

## Autor

**Rodolfo Guerrero**

Desarrollado como parte del desafío para avanzar en el programa ONE de Oracle y Alura Latam.

## Licencia

Este proyecto está bajo la Licencia MIT. Si deseas usar este código, siéntete libre de modificarlo o adaptarlo según lo necesites.
