const BASE_URL = 'http://localhost:3000/api/projects';

export const eliminarProyecto = async (id) => {
  try {
    const res = await fetch(`${BASE_URL}/${id}`, {
      method: 'DELETE'
    });
    const data = await res.json();
    if (!res.ok) throw new Error(data.message || 'Error al eliminar');
    return data;
  } catch (error) {
    throw new Error(error.message || 'Error de conexión');
  }
};
