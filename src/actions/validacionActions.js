import {
    VALIDAR_FORMULARIO,
    VALIDAR_FORMULARIO_ERROR,
    VALIDAR_FORMULARIO_EXITO
  } from "../types";

export function validarFormularioAction(){
    return (dispatch) => {
        dispatch( iniciarValidacion() )
    }
}

export const iniciarValidacion = () => {
    return {
        type: VALIDAR_FORMULARIO
    }
}

export const validacionExito = () => {
    return {
        type: VALIDAR_FORMULARIO_EXITO
    }
}

export const validacionError = () => {
    return {
        type: VALIDAR_FORMULARIO_ERROR
    }
}