import React from "react";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
/* Redux */
import { useDispatch } from "react-redux";
import { borrarProductoAction } from "../actions/productosActions";

const Producto = ({ producto }) => {
  /* dispatch para ejecutar las acciones */
  const dispatch = useDispatch();

  const confirmarEliminarProducto = id => {
    /* Preguntar al usuario */
    Swal.fire({
      title: "¿Estás seguro?",
      text: "Un producto eliminado no se puede recuperar",
      type: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "SI, Eliminar!",
      cancelButtonText: "Cancelar"
    }).then(result => {
      if (result.value) {
        Swal.fire(
          "Eliminado",
          "El producto se eliminó correctamente",
          "success"
        );
        dispatch(borrarProductoAction(id));
      }
    });
  };
  return (
    <tr>
      <td>{producto.nombre}</td>
      <td>
        <span className="font-weight-bold">${producto.precio}</span>
      </td>
      <td className="acciones">
        <Link
          to={`/productos/editar/${producto.id}`}
          className="btn btn-primary mr-2"
        >
          Editar
        </Link>
        <button
          className="btn btn-danger"
          onClick={() => confirmarEliminarProducto(producto.id)}
        >
          Eliminar
        </button>
      </td>
    </tr>
  );
};

export default Producto;
