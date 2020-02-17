import React from "react";
import { Link } from "react-router-dom"

/* Redux */
import { useDispatch } from "react-redux"
import { borrarProductoAction } from "../actions/productosActions"

const Producto = ({producto}) => {

    /* dispatch para ejecutar las acciones */
    const dispatch = useDispatch()

    const confirmarEliminacionProducto = id => {
        console.log(id)
        dispatch(borrarProductoAction())
    }
    return(
        <tr>
            <td>{producto.nombre}</td>
            <td><span className="font-weight-bold">${producto.precio}</span></td>
            <td className="acciones">
                <Link to={`/productos/editar/${producto.id}`}
                        className="btn btn-primary mr-2"
                >

                Editar
                </Link>
                <button 
                    className="btn btn-danger"
                    onClick={() => confirmarEliminacionProducto(producto.id)}
                >Eliminar</button>
            </td>
        </tr>
    )
}

export default Producto;