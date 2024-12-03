import { useState } from 'react';

import Button from '../../ui/Button';

function CreateUser ()
{
  const [username, setUsername] = useState('');

  function handleSubmit (e)
  {
    e.preventDefault();
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
          <Button type="primary">Сделать заказ</Button>
        </div>
      )}
    </form>
  );
}

export default CreateUser;
