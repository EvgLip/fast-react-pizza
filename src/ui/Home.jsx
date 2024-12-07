import { useSelector } from 'react-redux';

import CreateUser from '../features/user/CreateUser';
import Button from './Button';
import { getUserName } from '../features/user/userSlice';

function Home ()
{
  const userName = useSelector(getUserName);

  return (
    <div className='my-10 text-center'>
      <h1 className="mb-8 font-semibold text-xl">
        Самая лучшая пицца.
        <br />
        <span className="text-yellow-500">
          Прямо из печи к Вашему столу.
        </span>
      </h1>
      {
        userName === ''
          ? <CreateUser />
          : <Button type={'primary'} to={'/menu'}
          >
            Вернуться в меню
          </Button>
      }
    </div>
  );
}

export default Home;
