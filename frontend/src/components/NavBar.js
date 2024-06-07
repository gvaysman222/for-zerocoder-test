import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

function NavBar({ token, setToken }) {
  const navigate = useNavigate();

  const handleLogout = () => {
    setToken(null);
    localStorage.removeItem('token');
    navigate('/login');
  };

  return (
    <nav>
      <ul>
        {token ? (
          <>
            <li><Link to="/distribution">Запуск распределения</Link></li>
            <li><Link to="/forecast">Прогнозирование затрат</Link></li>
            <li><Link to="/objects">Объекты распределения</Link></li>
            <li><button onClick={handleLogout}>Выйти</button></li>
          </>
        ) : (
          <>
            <li><Link to="/register">Регистрация</Link></li>
            <li><Link to="/login">Вход</Link></li>
          </>
        )}
      </ul>
    </nav>
  );
}

export default NavBar;
