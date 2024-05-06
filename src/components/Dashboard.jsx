import React, { useState } from 'react';
import Sidebar from '../components/Sidebar';
import { useFetchAlumnos } from '../hooks/useFetchAlumnos';

function Dashboard() {
  const { alumnos, isLoading, error } = useFetchAlumnos();
  



  return (
    <div className="dashboard">
      <Sidebar />
      <div className="contenido">
        <div className="container">
          <div className="d-flex justify-content-end mt-4">
            <button className="btn btn-primary mb-1" >Agregar Usuario</button>
          </div>
          <hr />
          {error && <div className="alert alert-danger" role="alert">{error}</div>}
          {isLoading ? (
            <div className="text-center">Cargando...</div>
          ) : (
            <table className="table table-striped">
              <thead>
                <tr>
                  <th className="px-2">ID</th>
                  <th className="px-2">Nombre</th>
                  <th className="px-2">Apellido</th>
                  <th className="px-2">Fecha de Nacimiento</th>
                  <th className="px-2">Carrera</th>
                  <th className="px-2">Telefono</th>
                </tr>
              </thead>
              <tbody>
                {alumnos.map((alumno) => (
                  <tr key={alumno.idAlumno}>
                    <td>{alumno.idAlumno}</td>
                    <td>{alumno.nombre}</td>
                    <td>{alumno.apellido}</td>
                    <td>{alumno.f_Nacimiento}</td>
                    <td>{alumno.idCarrera}</td> 
                    <td>{alumno.telefono}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
        </div>
      </div>

    </div>
  );
}

export default Dashboard;