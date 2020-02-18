import React, {useEffect, Fragment, useRef } from 'react';

// Redux
import { useDispatch, useSelector } from 'react-redux';
import { obtenerProductoEditarAction, editarProductoAction } from '../actions/productosActions';
import { validarFormularioAction, validacionExito, validacionError } from '../actions/validacionActions';

import Swal from 'sweetalert2';

const EditarProducto = ({ history, match }) => {

    // Crear los refs
    const nombreRef = useRef('');
    const precioRef = useRef('');


    // Dispatch para ejecutar la acción principal
    const dispatch = useDispatch();

    const editarProducto = (producto) => dispatch( editarProductoAction(producto) );
    const validarFormulario = () => dispatch( validarFormularioAction() );
    const exitoValidacion = () => dispatch( validacionExito() ) ;
    const errorValidacion = () => dispatch( validacionError() ) ;


    // obtener el ID a editar
    const { id } = match.params;

    useEffect( () => {
        dispatch( obtenerProductoEditarAction(id ))
    }, [dispatch, id]);

    // Acceder al state
    const producto = useSelector( state => state.productos.producto);
    const error = useSelector( state => state.productos.error);

    // Cuando carga la API
    if(!producto) return 'Cargando...';

    const submitEditarProducto = e => {
        e.preventDefault();

        // validar el formulario
        validarFormulario();
      
        if(nombreRef.current.value.trim() === '' || precioRef.current.value.trim() === ''){
            errorValidacion();
            return;

        }
        
        // no hay error
        exitoValidacion();

        // guardar los cambios
        editarProducto({
            id,
            nombre: nombreRef.current.value,
            precio: precioRef.current.value
        });




        // redireccionar
        history.push('/');
    }

    return (

        <Fragment>

        { error 
        ? 
            <div className="font-weight-bold alert alert-danger text-center mt-4">Hubo un error, intenta de nuevo</div> 
        : 
        <div className="row justify-content-center mt-5">
            <div className="col-md-8">
                <div className="card">
                    <div className="card-body">
                        <h2 className="text-center">Editar Producto</h2>
                        <form
                            onSubmit={submitEditarProducto}
                        >
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

                            <button type="submit" className="btn btn-primary font-weight-bold text-uppercase d-block w-100">Guardar Cambios</button>
                        </form>

                        
 
                    </div>
                </div>
            </div>
        </div>
        }
        </Fragment>
        
    );
}
 
export default EditarProducto;