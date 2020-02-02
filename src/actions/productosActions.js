import {
    AGREGAR_PRODUCTO,
    AGREGAR_PRODUCTO_EXITO,
    AGREGAR_PRODUCTO_ERROR
  } from "../types";

  import clienteAxios from "../config/axios"

/* Crear un nuevo producto - Funcion principal */
export function crearNuevoProductoAction(producto) {
    return (dispatch) => {
        dispatch( nuevoProducto() )

        /* Insertar en la API */
        clienteAxios.post("/libros", producto)
            .then(respuesta => {
                console.log(respuesta)
                /* Si se inserta correctamente */
                dispatch( agregarProductoExito(producto) )
            })
            .catch(error => {
                console.log(error)
            })

        
    }
}

export const nuevoProducto = () => ({
    type: AGREGAR_PRODUCTO
});

export const agregarProductoExito = producto => ({
    type: AGREGAR_PRODUCTO_EXITO,
    payload: producto
})