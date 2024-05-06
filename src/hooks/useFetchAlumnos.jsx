import { useState, useEffect } from 'react';

export function useFetchAlumnos() {
  const [alumnos, setAlumnos] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchAlumnos = async () => {
      try {
        const response = await fetch('https://localhost:7008/Colegio/api/Alumnos/ObtenerTodosAlumnos');
        if (!response.ok) {
          throw new Error('Error al obtener los alumnos');
        }
        const data = await response.json();
        setAlumnos(data.model);
        setIsLoading(false);
      } catch (error) {
        setError(error.message);
        setIsLoading(false);
      }
    };

    fetchAlumnos();
  }, []);

  return { alumnos, isLoading, error };
}