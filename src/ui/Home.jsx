import CreateUser from '../features/user/CreateUser';

function Home ()
{
  return (
    <div className='my-10 text-center'>
      <h1 className="mb-8 font-semibold text-xl">
        Самая лучшая пицца.
        <br />
        <span className="text-yellow-500">
          Прямо из печи к Вашему столу.
        </span>
      </h1>
      <CreateUser />
    </div>
  );
}

export default Home;
