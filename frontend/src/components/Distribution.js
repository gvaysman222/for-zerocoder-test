import React, { useState } from 'react';
import { distributeExpenses } from '../services/api';

function Distribution() {
  const [data, setData] = useState(null);
  const [result, setResult] = useState(null);

  const handleUpload = (event) => {
    const file = event.target.files[0];
    const reader = new FileReader();
    reader.onload = (e) => {
      const content = e.target.result;
      setData(JSON.parse(content));
    };
    reader.readAsText(file);
  };

  const handleDistribute = async () => {
    try {
      const response = await distributeExpenses(data);
      setResult(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <h1>Запуск распределения</h1>
      <input type="file" onChange={handleUpload} />
      <button onClick={handleDistribute}>Запустить распределение</button>
      {result && <pre>{JSON.stringify(result, null, 2)}</pre>}
    </div>
  );
}

export default Distribution;
