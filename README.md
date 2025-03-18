# Desafío: Amigo Secreto

Este proyecto implementa una aplicación sencilla de Amigo Secreto, diseñada para practicar conceptos fundamentales de programación con JavaScript.

## Descripción

La aplicación "Amigo Secreto" permite a los usuarios:
- Ingresar nombres de personas a través de un campo de texto
- Visualizar todos los nombres en una lista
- Realizar un sorteo aleatorio para seleccionar un "amigo secreto"
- Ver el resultado del sorteo en pantalla

## Objetivos de Aprendizaje

Este proyecto se centra en los siguientes conceptos básicos de programación:

- **Variables y arrays**: Uso de estructuras de datos para almacenar información
- **Funciones**: Organización del código en bloques reutilizables
- **Condicionales**: Validación de datos de entrada
- **Manipulación del DOM**: Interacción con elementos HTML desde JavaScript
- **Eventos**: Respuesta a acciones del usuario como clics y pulsaciones de teclas
- **Iteración**: Recorrido de arreglos para mostrar información en pantalla
- **Aleatoriedad**: Uso de funciones para generar números aleatorios

## Estructura del Proyecto

- **index.html**: Estructura y elementos visuales de la aplicación
- **style.css**: Estilos y diseño visual
- **app.js**: Lógica de programación y funcionalidades

## Funcionalidades Implementadas

1. **Agregar amigos**:
   - Se captura el texto ingresado en el campo
   - Se valida que no esté vacío
   - Se agrega al array de amigos
   - Se actualiza la lista visual

2. **Validación de entrada**:
   - Comprueba que el campo no esté vacío
   - Muestra una alerta si no se ingresa un nombre válido

3. **Visualización de la lista**:
   - Muestra todos los nombres ingresados en una lista
   - Se actualiza automáticamente al agregar nuevos nombres

4. **Sorteo aleatorio**:
   - Selecciona aleatoriamente un nombre de la lista
   - Verifica que existan nombres para sortear
   - Muestra el resultado del sorteo

5. **Mejoras de usabilidad**:
   - Permite agregar nombres presionando Enter
   - Enfoca automáticamente el campo de entrada después de agregar un nombre

## Cómo Utilizar

1. Abre el archivo `index.html` en un navegador web
2. Escribe el nombre de un amigo en el campo de texto
3. Haz clic en "Añadir" o presiona Enter para agregar el nombre a la lista
4. Repite los pasos 2 y 3 para agregar todos los nombres deseados
5. Cuando tengas todos los nombres, haz clic en "Sortear amigo"
6. ¡El resultado aparecerá debajo mostrando quién es tu amigo secreto!

---

Este proyecto forma parte de un desafío de programación desarrollado para el primer challenge de ALURA LATAM GRupo 8.