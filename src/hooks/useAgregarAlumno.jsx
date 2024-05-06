export function useAgregarAlumno() {
    const agregarAlumno = async (nuevoAlumno) => {
      try {
        const response = await fetch('https://localhost:7008/Colegio/api/Alumnos/AgregarAlumnos', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(nuevoAlumno)
        });
  
        if (!response.ok) {
          throw new Error('Error al agregar alumno');
        }
  
        // No necesitamos actualizar la lista de alumnos aquí ya que lo hace el hook de useFetchAlumnos
      } catch (error) {
        console.error('Error al agregar alumno:', error.message);
      }
    };
  
    return { agregarAlumno };
  }