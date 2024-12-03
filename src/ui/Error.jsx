import { useRouteError } from 'react-router-dom';
import LinkButton from './LinkButton';

export default function Error ()
{
  const error = useRouteError();

  console.log('Ошибка: ', error);

  return (
    <div>
      <h1>Что-то пошло не так 😢</h1>
      <p>{error.data || error.message}</p>
      <LinkButton to={-1}>&larr; На предыдущую страницу</LinkButton>
    </div>
  );
}


