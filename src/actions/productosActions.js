import {
  AGREGAR_PRODUCTO,
  AGREGAR_PRODUCTO_EXITO,
  AGREGAR_PRODUCTO_ERROR,
  COMENZAR_DESCARGA_PRODUCTOS,
  DESCARGA_PRODUCTOS_EXITOSA,
  DESCARGA_PRODUCTOS_ERROR,
  OBTENER_PRODUCTO_ELIMINAR,
  PRODUCTO_ELIMINAR_EXITO,
  PRODUCTO_ELIMINAR_ERROR
} from "../types";

import clienteAxios from "../config/axios";

/* Crear un nuevo producto - Funcion principal */
export function crearNuevoProductoAction(producto) {
  return dispatch => {
    dispatch(nuevoProducto());

    /* Insertar en la API */
    clienteAxios
      .post("/libros", producto)
      .then(respuesta => {
        console.log(respuesta);
        /* Si se inserta correctamente */
        dispatch(agregarProductoExito(producto));
      })
      .catch(error => {
        console.log(error);

        /* Si hay un error */
        dispatch(agregarProductoError());
      });
  };
}

export const nuevoProducto = () => ({
  type: AGREGAR_PRODUCTO
});

export const agregarProductoExito = producto => ({
  type: AGREGAR_PRODUCTO_EXITO,
  payload: producto
});

export const agregarProductoError = error => ({
  type: AGREGAR_PRODUCTO_ERROR
});

/* Obtener Listado de Productos (consultar API) */

export function obtenerProductosAction() {
  return dispatch => {
    dispatch(obtenerProductosComienzo());

    /* Consultar API */
    clienteAxios
      .get("/libros")
      .then(respuesta => {
        /* console.log(respuesta) */
        dispatch(descargaProductosExitosa(respuesta.data));
      })
      .catch(error => {
        /* console.log(error) */
        dispatch(descargaProductosError());
      });
  };
}

export const obtenerProductosComienzo = () => ({
  type: COMENZAR_DESCARGA_PRODUCTOS
});

export const descargaProductosExitosa = productos => ({
  type: DESCARGA_PRODUCTOS_EXITOSA,
  payload: productos
});

export const descargaProductosError = () => ({
  type: DESCARGA_PRODUCTOS_ERROR
});

/* Funcion que elimina un producto en especifico */
export function borrarProductoAction(id) {
  return dispatch => {
    dispatch(obtenerProductoEliminar());

    /* Eliminar  en le API */
    clienteAxios.delete(`/libros/${id}`)
      .then(respuesta => {
        console.log(respuesta)
        dispatch(eliminarProductoExito(id))
      })
      .catch(error =>{
        dispatch(eliminarProductoError())
        console.log(error)
      })
  };
}

export const obtenerProductoEliminar = () => ({
  type: OBTENER_PRODUCTO_ELIMINAR
});

export const eliminarProductoExito = id => ({
  type: PRODUCTO_ELIMINAR_EXITO,
  payload: id
})

export const eliminarProductoError = () => ({
  type: PRODUCTO_ELIMINAR_ERROR
})