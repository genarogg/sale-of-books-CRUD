import React, { useEffect, Fragment } from "react";

/* Redux */
import { useDispatch, useSelector } from "react-redux";
import { obtenerProductoEditarAction } from "../actions/productosActions";

const EditarProucto = ({ match }) => {
  /* Dispatch para ejecutar la accion principal */
  const dispatch = useDispatch();

  /* Obtener el ID a editar */
  const { id } = match.params;

  useEffect(() => {
    dispatch(obtenerProductoEditarAction(id));
  }, [dispatch, id]);

  /* Acceder al state */
  const producto = useSelector(state => state.productos.producto);
  const error = useSelector ( state => state.productos.error)

  /* Cuando  */
  return (
    <Fragment>
      {error ? (
        <div className="font-weight-bold alert alert-danger text-center mt-4">
          Hubo un error, intenta de nuevo
        </div>
      ) : (
        <div className="row justify-content-center mt-5">
          <div className="col-md-8">
            <div className="card">
              <div className="card-body">
                <h2 className="text-center">Editar Producto</h2>
                <form onSubmit={submitEditarProducto}>
                  <div className="form-group">
                    <label>Titulo</label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Titulo"
                      defaultValue={producto.nombre}
                      ref={nombreRef}
                    />
                  </div>
                  <div className="form-group">
                    <label>Precio del Producto</label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Precio"
                      defaultValue={producto.precio}
                      ref={precioRef}
                    />
                  </div>

                  <button
                    type="submit"
                    className="btn btn-primary font-weight-bold text-uppercase d-block w-100"
                  >
                    Guardar Cambios
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      )}
    </Fragment>
  );
};

export default EditarProucto;
