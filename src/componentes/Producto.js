import React from "react";

const Productos = () => {
  return (
    <React.Fragment>
      <h2 className="text-center my-5">Listado de Productos</h2>

      <table className="table table-striped">
        <thead className="bg-primary table-dark">
          <tr>
            <th scope="col">Nombre</th>
            <th scope="col">Precio</th>
            <th scope="col">Acciones</th>
          </tr>
        </thead>
        <tbody></tbody>
      </table>
    </React.Fragment>
  );
};

export default Productos;
