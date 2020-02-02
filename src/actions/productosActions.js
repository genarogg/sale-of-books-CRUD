import {
    AGREGAR_PRODUCTO,
    AGREGAR_PRODUCTO_EXITO,
    AGREGAR_PRODUCTO_ERROR
  } from "../types";


/* Crear un nuevo producto - Funcion principal */

export function crearNuevoProductoAction(producto) {
    return (dispatch) => {
        dispatch( NuevoProducto() )
    }
}

export const NuevoProducto = () => ({
    type: AGREGAR_PRODUCTO
})