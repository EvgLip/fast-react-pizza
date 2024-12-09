import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import Button from '../../ui/Button';
import { updateName } from './userSlice';

function CreateUser ()
{
  const [username, setUsername] = useState('');
  const dispatch = useDispatch();
  const navigate = useNavigate();

  function handleSubmit (e)
  {
    e.preventDefault();
    if (!username) return;
    dispatch(updateName(username));
    navigate('/menu');
  }

  return (
    <form onSubmit={handleSubmit}>
      <div className="mb-4">
        <p>👋 Добро пожаловать!</p>
        <p>Пожалуйста, начните с указания Вашего имени:</p>
      </div>

      <input
        className="input w-72 mb-8"
        type="text"
        placeholder="Ваше имя"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />

      {username !== '' && (
        <div>
          <Button type="primaryBig">Сделать заказ</Button>
        </div>
      )}
    </form>
  );
}

export default CreateUser;
