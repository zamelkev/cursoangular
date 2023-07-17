// Clase Tarea
class Tarea {
    constructor(id, titulo, descripcion, estado, prioridad, fechaEntrega) {
      this.id = id;
      this.titulo = titulo;
      this.descripcion = descripcion;
      this.estado = estado;
      this.prioridad = prioridad;
      this.fechaEntrega = fechaEntrega;
    }
  }
  
  // Clase ServicioTareas
  class ServicioTareas {
    constructor() {
      this.tareas = [];
    }
  
    agregarTarea(tarea) {
      this.tareas.push(tarea);
    }
  
    obtenerTodasTareas() {
      return this.tareas;
    }
  
    obtenerTareasPorEstado(estado) {
      if (!estado) {
        return this.tareas;
      }
      return this.tareas.filter(tarea => tarea.estado === estado);
    }
  
    obtenerTareasPorPrioridad(prioridad) {
      if (!prioridad) {
        return this.tareas;
      }
      return this.tareas.filter(tarea => tarea.prioridad === prioridad);
    }
  
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
  
    eliminarTarea(id) {
      this.tareas = this.tareas.filter(t => t.id !== id);
    }
  }
  
  // Crear instancia del servicio de tareas
  const servicioTareas = new ServicioTareas();
  
  // Obtener referencia a los elementos del DOM
  const formulario = document.getElementById('formulario-tarea');
  const listaTareas = document.getElementById('lista-tareas');
  const selectEstado = document.getElementById('estado');
  const selectPrioridad = document.getElementById('prioridad');
  
  // Función para agregar una nueva tarea
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
  
  // Función para mostrar las tareas en la lista
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
  
  // Función para eliminar una tarea
  function eliminarTarea(id) {
    servicioTareas.eliminarTarea(id);
    mostrarTareas();
  }
  
  // Función para editar una tarea
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
  
  // Escuchar los eventos de cambio de estado y prioridad
  selectEstado.addEventListener('change', mostrarTareas);
  selectPrioridad.addEventListener('change', mostrarTareas);
  
  // Escuchar el evento de envío del formulario
  formulario.addEventListener('submit', agregarTarea);
  
  // Mostrar las tareas iniciales
  mostrarTareas();
  