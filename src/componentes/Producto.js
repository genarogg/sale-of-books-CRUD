import React from "react";
import { Link } from "react-router-dom"

const Producto = ({producto}) => {
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
                <button className="btn btn-danger">Eliminar</button>
            </td>
        </tr>
    )
}

export default Producto;