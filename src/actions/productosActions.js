import {
    AGREGAR_PRODUCTO,
    AGREGAR_PRODUCTO_EXITO,
    AGREGAR_PRODUCTO_ERROR
  } from "../types";

  import clienteAxios from "../config/axios"

/* Crear un nuevo producto - Funcion principal */

export function crearNuevoProductoAction(producto) {
    return (dispatch) => {
        dispatch( NuevoProducto() )

        dispatch( agregarProductoExito(producto) )
    }
}

export const NuevoProducto = () => ({
    type: AGREGAR_PRODUCTO
})

export const agregarProductoExito = producto => ({
    type: AGREGAR_PRODUCTO,
    payload: producto
})