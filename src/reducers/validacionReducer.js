import {
  VALIDAR_FORMULARIO,
  VALIDAR_FORMULARIO_ERROR,
  VALIDAR_FORMULARIO_EXITO
} from "../types";

/* state inicial */
const initialState = {
  error: null
};

export default function(state = initialState, action) {
  switch (action.type) {
    case VALIDAR_FORMULARIO:
      return {
        ...state,
        error: null
      };

    case VALIDAR_FORMULARIO_EXITO:
      return {
        ...state,
        error: null
      };
    case VALIDAR_FORMULARIO_ERROR:
      return {
        ...state,
        error: nulll
      };
    default:
      return state 
  }
}
