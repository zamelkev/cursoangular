## RESPUESTAS A LA PRÁCTICA 1 (JavaScript):

_Nota: Si no permite subir el archivo comprimido, enviar a: alesrin@icloud.com_

1. **Intenta crear una tarea a través del formulario ¿Por qué no encuentra las funciones en mi js? Una vez que sepas la respuesta corrige el error.**
    - R: Había una dirección erronea a la hora de redireccionar hacia el archivo.js.
    - Estado original:
    ```
    <script src="script.js"></script>
    ```
    - Solución:
    ```
    <script src="./index.js"></script>
    ```

2. **Utiliza los siguientes recursos para entender y explicar los fragmentos que se proponen a continuación:**
    - OverApi
        
        [OverAPI.com | Collecting all the cheat sheets](https://overapi.com/)
        
    - W3School (JS Tutorial)
        
        [JavaScript Tutorial](https://www.w3schools.com/js/)
        
    - Mozilla JS Tutorial
        
        [JavaScript | MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
        
    - Stackoverflow
        [JavaScript | MDN](https://stackoverflow.com/questions/tagged/javascript)
    
3. **Responde a las siguientes preguntas:**
    1. ¿Para qué se utiliza el método push en el método agregarTarea()?
        
        ```jsx
        agregarTarea(tarea) {
              this.tareas.push(tarea);
            }
        ```

        **R:** El **método _push_** sirve para poder introducir/insertar x items dentro de nuestro array de datos, concretamente: situa el nuevo item al final de la 'lista' (array) en cuestion y aumenta por ende su capacidad/longitud (length).
        
    2. Explica la función de flecha en este fragmento
        
        ```jsx
        obtenerTareasPorEstado(estado) {
              if (!estado) {
                return this.tareas;
              }
              return this.tareas.filter(tarea => tarea.estado === estado);
            }
        ```

        **Explicación:**
            Una **expresión de función flecha** es una alternativa compacta a una expresión de función tradicional, pero es limitada y no se puede utilizar en todas las situaciones.

            __Diferencias y limitaciones:__

                - No tiene sus propios enlaces a this o super y no se debe usar como métodos.
                - No tiene argumentos o palabras clave new.target.
                - No apta para los métodos call, apply y bind, que generalmente se basan en establecer un ámbito o alcance.
                - No se puede utilizar como constructor.
                - No se puede utilizar yield dentro de su cuerpo.
        
    3. Explica con tus palabras este fragmento de código correspondiente a la función actualizarTarea de la class ServicioTareas ¿Con qué está vinculado?
        
        ```jsx
        actualizarTarea(id, nuevaTarea) {
              const tarea = this.tareas.find(t => t.id === id);
              if (tarea) {
                tarea.titulo = nuevaTarea.titulo;
                tarea.descripcion = nuevaTarea.descripcion;
                tarea.estado = nuevaTarea.estado;
                tarea.prioridad = nuevaTarea.prioridad;
                tarea.fechaEntrega = nuevaTarea.fechaEntrega;
              }
            }
        ```

        **R:** Para explicar el presente fragmento de código, primero debemos entender bien como funciona cualquier método 'Actualizar', debido a que para poder actualizar cierto item, este debe existir previamente y estar ya contenido en nuestro 'array' de datos.

        Dicho esto: El fragmento de código mostrado se compone de tres subfunciones o partes del proceso:
        - **Función __find__:** Sirve para encontrar cierto item, dentro de nuestro 'array'.
        - **Operador If:** Resulta una directiva condicional. En este caso, se está evaluando si la variable 'tarea' devuelve un valor 'true' o 'false', ergo: si ha sido encontrada en nuestra 'base de datos' o no.
        - **Actualizar propiamente hablando:** Asignamos a cada uno de los parámetros de nuestro objeto, los nuevos valores, los cuales han sido introducidos y recogidos mediante el formulario de nuestra aplicación en cuestión.
        
    4. Explica la siguiente función
        
        ```jsx
        function agregarTarea(event) {
            event.preventDefault();
          
            const titulo = document.getElementById('titulo').value;
            const descripcion = document.getElementById('descripcion').value;
            const estado = document.getElementById('estado').value;
            const prioridad = document.getElementById('prioridad').value;
            const fechaEntrega = document.getElementById('fecha').value;
          
            const nuevaTarea = new Tarea(
              Date.now(), // Generar ID único utilizando la fecha actual
              titulo,
              descripcion,
              estado,
              prioridad,
              fechaEntrega
            );
          
            servicioTareas.agregarTarea(nuevaTarea);
            mostrarTareas();
            formulario.reset();
          }
        ```

        **Explicación:**
            El **método preventDefault()** de la interfaz de eventos le dice al agente de usuario que, si el evento no se maneja explícitamente, su acción predeterminada no debe tomarse como lo haría normalmente. 
        
            El evento continúa propagándose como de costumbre, a menos que uno de sus detectores de eventos llame a stopPropagation() o stopImmediatePropagation(), cualquiera de los cuales finaliza la propagación de inmediato. 
        
            Como se indica a continuación, llamar a preventDefault() para un evento no cancelable, como uno enviado a través de EventTarget.dispatchEvent(), sin especificar cancelable: true no tiene ningún efecto.
        
    5. Explica la siguiente función
        
        ```jsx
        function mostrarTareas() {
            listaTareas.innerHTML = '';
          
            const estadoSeleccionado = selectEstado.value;
            const prioridadSeleccionada = selectPrioridad.value;
          
            const tareas = servicioTareas.obtenerTodasTareas().filter(tarea => {
              const coincideEstado = !estadoSeleccionado || tarea.estado === estadoSeleccionado;
              const coincidePrioridad = !prioridadSeleccionada || tarea.prioridad === prioridadSeleccionada;
              return coincideEstado && coincidePrioridad;
            });
          
            tareas.forEach(tarea => {
              const tareaElemento = document.createElement('li');
              tareaElemento.innerHTML = `
                <span>${tarea.titulo} (${tarea.estado})</span>
                <button onclick="eliminarTarea(${tarea.id})">Eliminar</button>
                <button onclick="editarTarea(${tarea.id})">Editar</button>
              `;
              listaTareas.appendChild(tareaElemento);
            });
          }
        ```

        **Explicación:**
            Esta otra función se divide en tres subfunciones o partes:
            
            - Primeramente: Se leen los valores correspondientes a los selectores de las variables 'estado' y 'prioridad', guardándolas acto seguido en sus correspondientes variables, las cuales han sido inicializadas en la cabecera de la propia función.
            
            - Seguidamente, se realiza el filtrado de los datos, en base a ambos parámetros y se retorna el resultado de dicha consulta.

            - Y para finalizar, se crea/construye el nuevo elemento (la visualización de cada tarea), utilizando la función .createElement para crear una 'li' y el operador .innerHTML, para decirle que sustituya la información del elemento por la que le suministramos seguidamente.

                - innerHTML: 

                    La propiedad Element.innerHTML devuelve o establece la sintaxis HTML describiendo los descendientes del elemento.

                    Al establecerse se reemplaza la sintaxis HTML del elemento por la nueva.


        
    6. Explica la siguiente función
        
        ```jsx
        function editarTarea(id) {
            const tarea = servicioTareas.obtenerTodasTareas().find(t => t.id === id);
            if (tarea) {
              const titulo = prompt('Nuevo título:', tarea.titulo);
              const descripcion = prompt('Nueva descripción:', tarea.descripcion);
              const estado = prompt('Nuevo estado:', tarea.estado);
              const prioridad = prompt('Nueva prioridad:', tarea.prioridad);
              const fechaEntrega = prompt('Nueva fecha de entrega:', tarea.fechaEntrega);
          
              const nuevaTarea = new Tarea(
                tarea.id,
                titulo || tarea.titulo,
                descripcion || tarea.descripcion,
                estado || tarea.estado,
                prioridad || tarea.prioridad,
                fechaEntrega || tarea.fechaEntrega
              );
          
              servicioTareas.actualizarTarea(id, nuevaTarea);
              mostrarTareas();
            }
          }
        ```

        **Explicación:**
            - En este fragmento de código y con la presente función, se recorre el 'array', comparando a su vez el id de cada item, con el id introducido; en este caso, el que está enlazado con el botón enlazar de la tarea en cuestión.
            A su vez y de nuevo, se realiza la comprobación de si se ha encontrado el item buscado, mediante una función if. Y si se encuentra, se procede a sustituir todos sus parámentros o sólo los que nos interesen.
            - Por último, se alude a la función 'actualizar', ya comentada, y se procede a mostrar de nuevo las tareas, mediante el uso de la función mostrarTareas().
        
    7. Explica cuál es la misión de este escuchador

        Cuando decimos 'escuchador', nos referimos a la función **addEventListener()**

        Esta función, registra un evento referente y referido a un objeto en específico, exactamente como si estuviera escuchando. Y si se quiere registrar más de un eventListener, puedes llamar addEventListener() para el mismo elemento, pero con diferentes tipos de eventos o parámetros de captura.