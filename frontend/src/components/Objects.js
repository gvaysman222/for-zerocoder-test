import React, { useState, useEffect } from 'react';
import { getObjects } from '../services/api';

function Objects() {
  const [objects, setObjects] = useState([]);

  useEffect(() => {
    async function fetchObjects() {
      try {
        const response = await getObjects();
        setObjects(response.data);
      } catch (error) {
        console.error(error);
      }
    }
    fetchObjects();
  }, []);

  return (
    <div>
      <h1>Объекты распределения</h1>
      <ul>
        {objects.map(obj => (
          <li key={obj.id}>{obj.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default Objects;
