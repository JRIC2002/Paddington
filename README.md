# Paddington
![Paddington v1.0.4](https://img.shields.io/badge/Paddington-v1.0.4-brightgreen)
![Release stable](https://img.shields.io/badge/Release-stable-brightgreen)
![License GNU General Public License v3.0](https://img.shields.io/badge/License-GNU%20General%20Public%20License%20v3.0-blue)

Paddington es un bot con múltiples funciones que esta disponible en Discord.
![Paddington](https://github.com/jric2002/Paddington/blob/master/Paddington.jpg)

## Información
Paddington esta hecho con Node.js.  
Puedes usar el código como una guía para crear tu propio bot en discord.

## Características
Hasta el momento Paddington solo tiene estas funciones:
* General commands: `.help`, `.play`, `.playlist`.
* DJ commands: `.vol` o `.volume`, `.stop`, `.replay`, `back`, `.pause`, `.resume`, `next`, `.addlist`.
* Administrator commands: `.clear`.

## ¿Cómo agrego a Paddington en mi servidor de Discord?
Bueno, para agregar el bot a tu servidor de Discord solo sigue estos sencillos pasos:
1. Haz click aquí 👉 [**Paddington**](https://discord.com/api/oauth2/authorize?client_id=805521298552782938&permissions=8&scope=bot), seleccionas un servidor y le das en continuar.
![Agregar bot a un servidor](https://github.com/jric2002/Paddington/blob/master/.images/agregar-bot-a-un-servidor.png)
2. En esta parte tendrás que conceder los permisos de administrador a Paddington, le damos click en autorizar.
![Autorizar bot](https://github.com/jric2002/Paddington/blob/master/.images/autorizar-al-bot.png)
3. Bueno, resolvemos el captcha.
![Resolver el captcha](https://github.com/jric2002/Paddington/blob/master/.images/resolver-captcha.png)
4. Y listo, Paddington ya esta agregado a tu servidor.
![Bot agregado](https://github.com/jric2002/Paddington/blob/master/.images/bot-agregado.png)

## Uso
**Comandos generales**  
Estos comandos son de uso general, cualquier usuario puede utilizarlos: `.help`, `.play`, `.playlist`.  
* **Menú de ayuda**  
  Para ver el menú de ayuda solo ejecuta este comando en cualquier canal de texto de tu servidor: `.help`  
* **Reproducir una canción o multiples canciones**  
  * Reproducir solo una canción: `.play <url>`  
  * Reproducir varias canciones: `.playlist <1-url> <2-url> <3-url> ...`

**Comandos de DJ**  
Estos comandos solo están disponibles durante la reproducción de canciones: `.vol` o `.volume`, `.stop`, `.replay`, `back`, `.pause`, `.resume`, `next`, `.addlist`.  
Los comandos `.back`,` .next`, `.addlist` solo estarán disponibles si se utiliza el comando` .playlist`.  
* **Volumen**  
  El comando `.vol` o` .volume` se utiliza para definir el volumen, por defecto el volumen es 100%.  
  Flags: `-i` o `-info`  
  * Definir el volumen: `.vol <quantity>` o `.volume <quantity>`  
    Debe reemplazar `<quantity>` con un número que esté dentro del rango permitido (entre 0 y 200).  
  * Mostrar información del volumen: `.vol -i` o `.volume -info`  
* **Detener**  
  * Detener la canción o lista de reproducción: `.stop`  
* **Repetir**  
  * Repetir la canción actual: `.replay`  
* **Atrás**  
  * Reproducir la canción anterior: `.back`  
* **Pausar**  
  * Pausar la canción: `.pause`  
* **Continuar**  
  * Reanudar la canción: `.resume`  
* **Siguiente**  
  * Reproducir la siguiente canción: `.next`  
* **Agregar a la lista**
  * Agregar una canción o varias canciones a la lista de reproducción: `.addlist <1-url> <2-url> <3-url> ...`

**Comandos de administrador**  
Estos comandos solo pueden ser utilizados por el creador del servidor: `.clear`.  
* **Limpiar**  
  * Eliminar cierta cantidad de mensajes: `.clear <quantity>`  
    Debe reemplazar `<quantity>` con un número que esté dentro del rango permitido (entre 0 y 100), es decir, solo puede eliminar 99 mensajes como máximo.

## Soporte
Si tienes alguna sugerencia o si ocurre algún problema, no olvides dejar tu comentario en la sección de [**Issues**](https://github.com/JRIC2002/Paddington/issues).

## Licencia
Paddington está hecho con 💚 por JRIC2002. Vea el archivo de **Licencia** para más detalles.