import React, { useState } from 'react';

function SprintPlanning() {
  const [stories, setStories] = useState([
    {
      id: 'REQ-001',
      title: 'Interfaz de Usuario Intuitiva',
      alias: 'Interfaz',
      status: 'Por hacer',
      effort: 'Medio',
      sprint: 'Sprint 1',
      priority: 'Alta',
      comments: 'Formularios de registro y diseño de la estructura.',
    },
    {
      id: 'REQ-002',
      title: 'Funcionalidad de Búsqueda Avanzada',
      alias: 'Búsqueda',
      status: 'Por hacer',
      effort: 'Alto',
      sprint: 'Sprint 1',
      priority: 'Alta',
      comments: 'Filtros, ordenamiento y resultados precisos.',
    },
    {
      id: 'REQ-003',
      title: 'Autenticación y Permisos de Usuario',
      alias: 'Autenticación',
      status: 'Por hacer',
      effort: 'Alto',
      sprint: 'Sprint 2',
      priority: 'Alta',
      comments: 'Roles y permisos para distintos usuarios.',
    },
    {
      id: 'REQ-004',
      title: 'Exportación de Datos',
      alias: 'Exportación',
      status: 'Por hacer',
      effort: 'Medio',
      sprint: 'Sprint 2',
      priority: 'Baja',
      comments: 'Funcionalidad para exportar datos en diferentes formatos.',
    },
    {
      id: 'REQ-005',
      title: 'Panel de Administración',
      alias: 'Administración',
      status: 'Por hacer',
      effort: 'Alto',
      sprint: 'Sprint 3',
      priority: 'Alta',
      comments: 'Desarrollo de un panel para administrar usuarios y configuraciones.',
    },
  ]);

  const [newStory, setNewStory] = useState('');

  const addStory = () => {
    if (newStory.trim() !== '') {
      // Parsear la nueva historia y agregarla al estado de historias
      const newStoryObj = JSON.parse(newStory);
      setStories([...stories, newStoryObj]);
      setNewStory('');
    }
  };

  const deleteStory = (id) => {
    // Eliminar la historia con el ID proporcionado
    const updatedStories = stories.filter((story) => story.id !== id);
    setStories(updatedStories);
  };

  return (
    <div>
      <h1>Sprint Planning</h1>
      <input
        type="text"
        placeholder="Agregar nueva historia (en formato JSON)"
        value={newStory}
        onChange={(e) => setNewStory(e.target.value)}
      />
      <button onClick={addStory}>Agregar</button>
      <ul>
        {stories.map((story) => (
          <li key={story.id}>
            <div>
              <strong>{story.title}</strong> - {story.id} <br />
              Alias: {story.alias} <br />
              Estado: {story.status} <br />
              Esfuerzo: {story.effort} <br />
              Sprint: {story.sprint} <br />
              Prioridad: {story.priority} <br />
              Comentarios: {story.comments} <br />
            </div>
            <button onClick={() => deleteStory(story.id)}>Eliminar</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default SprintPlanning;