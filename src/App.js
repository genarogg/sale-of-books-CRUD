import React from "react";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Header from "./componentes/Header"
import NuevoProducto from "./componentes/NuevoProducto"
import Productos from "./componentes/Producto"
import EditarProducto from "./componentes/EditarProducto"

/* Redux */
import { Provider } from "react-redux";
import store from "./store";


function App() {
  return (
    <p>hOLA</p>
  );
}

export default App;
