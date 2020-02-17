import React, {useEffect} from "react";

/* Redux */
import { useDispatch } from "react-redux";
import { obtenerProductoEditarAction } from "../actions/productosActions";

const EditarProucto = () => {
  /* Dispatch para ejecutar la accion principal */
  dispatch = useDispatch();
  useEffect (() =>{
      dispatch(obtenerProductoEditarAction())
  },[])
    return <p>Editar ...</p>;
};

export default EditarProucto;
