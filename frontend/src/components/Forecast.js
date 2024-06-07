import React, { useState, useEffect } from 'react';
import { getForecast } from '../services/api';

function Forecast() {
  const [forecast, setForecast] = useState(null);

  useEffect(() => {
    async function fetchForecast() {
      try {
        const response = await getForecast();
        setForecast(response.data);
      } catch (error) {
        console.error(error);
      }
    }
    fetchForecast();
  }, []);

  return (
    <div>
      <h1>Прогнозирование затрат</h1>
      {forecast ? <pre>{JSON.stringify(forecast, null, 2)}</pre> : <p>Loading...</p>}
    </div>
  );
}

export default Forecast;
