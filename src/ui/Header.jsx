import { Link } from 'react-router-dom';
import SearchOrder from '../features/order/SearchOrder';

export default function Header ()
{
  return (
    <header>
      <Link to='/'>Пицца с быстрой доставкой</Link>
      <SearchOrder />
      <p>Евгений</p>
    </header>
  );
}
