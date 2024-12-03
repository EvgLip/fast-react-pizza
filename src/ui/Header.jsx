import { Link } from 'react-router-dom';
import SearchOrder from '../features/order/SearchOrder';
import UserName from '../features/user/UserName';

export default function Header ()
{
  return (
    <header className='flex flex-wrap gap-2 items-center justify-center px-2 py-3 border-b border-stone-200 bg-yellow-400 text-sm uppercase min-[520px]:justify-around'>
      <Link to='/' className='tracking-widest'>Пицца с быстрой доставкой</Link>
      <SearchOrder />
      <UserName />
    </header>
  );
}
