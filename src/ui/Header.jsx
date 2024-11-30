import { Link } from 'react-router-dom';

export default function Header ()
{
  return (
    <header>
      <Link to='/'>Пицца с быстрой доставкой</Link>
      <p>Евгений</p>
    </header>
  );
}
