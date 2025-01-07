🔥 Time Filter Script 🔥
Organiza y filtra los resultados del fuzzing basados en el tiempo de respuesta

Descripción
Este script está diseñado para ser utilizado en OWASP ZAP con el propósito de ordenar y filtrar los resultados de un ataque de inyección SQL (blind SQL injection) utilizando time-based delays. 
El script permite que el fuzzing se ordene automáticamente según el tiempo de respuesta de cada solicitud, ayudando a identificar fácilmente los valores que tardan más o menos en procesarse. 

Características
Orden de Resultados: Ordena los resultados del fuzzing en función del tiempo que tardan en responder (en milisegundos).
Filtrado de Tiempos de Respuesta: Puedes configurar el script para que muestre los resultados con mayor o menor tiempo de respuesta que un valor especificado.
Automatización del Proceso: El script automatiza la organización de los resultados sin necesidad de intervención manual.
Instrucciones de Uso
Habilitar el Script:

Abre ZAP y navega a la sección "Scripts".
Agrega el script a "Fuzzer HTTP Processor".
Asegúrate de habilitar el script para que funcione correctamente.
Configuración Inicial:

Cuando se ejecute el script, te pedirá ingresar un valor de RTT (Request and Response Time) en milisegundos.
Por ejemplo, si el tiempo de retraso de la inyección SQL es de 10 segundos, ingresa 10000 milisegundos.
Luego, selecciona si deseas que el script muestre primero los resultados con mayor o menor tiempo de respuesta (MORE o LESS).
Resultados:

El script comenzará a ordenar los resultados del fuzzing según el tiempo de respuesta.
Los resultados se ordenarán de acuerdo al criterio seleccionado (más o menos tiempo).
Reiniciar ZAP:

Si el script no muestra resultados inmediatamente, reinicia ZAP para asegurarte de que todos los cambios y configuraciones se apliquen correctamente.
Ejemplo de Uso
Si estás haciendo fuzzing y deseas ordenar los resultados para ver primero aquellos que tomaron más tiempo, elige MORE al momento de configurar el script.
Si prefieres ver los resultados más rápidos primero, elige LESS.
Requisitos
OWASP ZAP: Este script está diseñado para ser usado con ZAP en su versión más reciente.
JavaScript Engine: El script está escrito en Graal.js, que es compatible con el motor de JavaScript de ZAP.


