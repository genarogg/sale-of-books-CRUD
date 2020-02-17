import {
  AGREGAR_PRODUCTO,
  AGREGAR_PRODUCTO_EXITO,
  AGREGAR_PRODUCTO_ERROR,
  COMENZAR_DESCARGA_PRODUCTOS,
  DESCARGA_PRODUCTOS_EXITOSA,
  DESCARGA_PRODUCTOS_ERROR
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

export function obtenerProductosAction(){
  return(dispatch) => {
    dispatch(obtenerProductosComienzo())
  }
}

export const obtenerProductosComienzo = () => ({
  type: COMENZAR_DESCARGA_PRODUCTOS
})
