# Tips de Productividad

# Descripción de la aplicación:

Esta aplicación tiene como objetivo mostrar distintos tips de productividad de manera dinámica e interactiva.
El usuario puede ver diferentes consejos relacionados con la organización, el estudio y la concentración. Cada tip puede recibir votos, lo que permite identificar cuál fue el más votado por el usuario durante el uso de la aplicación.
La aplicación cuenta con tres funcionalidades principales: Mostrar tips de productividad aleatorios, permitir votar los tips y mostrar el tip con mayor cantidad de votos.
Además, se agregó una mejora para evitar que los tips se repitan constantemente, logrando una experiencia más dinámica para el usuario. También se incorporó un botón para reiniciar los votos y comenzar nuevamente.
Por otro lado, se trabajó el diseño visual utilizando CSS para lograr una interfaz moderna, simple y agradable, utilizando colores neutros y tarjetas con estilos minimalistas.

# Ejecución de la aplicación:

Para ejecutar el proyecto es necesario tener instalado Node.js y abrir el proyecto en Visual Studio Code. Los pasos que debemos seguir para ejecutar la aplicación son los siguientes:
Abrir la terminal dentro de la carpeta del proyecto.
Instalar las dependencias utilizando el comando: npm install
Ejecutar el servidor de desarrollo con el comando: npm run dev
Abrir en el navegador el enlace que aparece en la terminal

# Conceptos de React utilizados:

Durante el desarrollo de la aplicación se utilizaron distintos conceptos de React vistos en clase.
Se utilizó el hook useState para manejar los estados de la aplicación, por ejemplo: el tip actualmente mostrado y la cantidad de votos de cada tip. Gracias a esto, la interfaz puede actualizarse automáticamente cada vez que el usuario interactúa con la aplicación.
La aplicación fue desarrollada utilizando componentes funcionales, específicamente el componente App, que contiene toda la lógica y la estructura principal.
Se utilizaron eventos como onClick para ejecutar acciones al presionar los botones, por ejemplo: votar un tip, mostrar otro tip y reiniciar los votos.
Se utilizó renderizado dinámico para mostrar información que cambia constantemente, como el contenido del tip actual y la cantidad de votos.
También se implementó renderizado condicional para mostrar un mensaje cuando todavía no existen votos registrados.
Se trabajó con arrays para almacenar tanto los tips como los votos. Además, se realizaron copias de arrays para actualizar correctamente el estado siguiendo la forma de trabajo de React.
