import { useNavigate, useRouteError } from 'react-router-dom';

export default function Error ()
{
  const navigate = useNavigate();
  const error = useRouteError();

  console.log('Ошибка: ', error);

  return (
    <div>
      <h1>Что-то пошло не так 😢</h1>
      <p>{error.data || error.message}</p>
      <button onClick={() => navigate(-1)}>&larr; Go back</button>
    </div>
  );
}


