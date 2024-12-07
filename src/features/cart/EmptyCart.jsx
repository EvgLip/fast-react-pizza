import LinkButton from '../../ui/LinkButton';

function EmptyCart ()
{
  return (
    <div className="px-4 py-3">
      <LinkButton to="/menu">&larr; Назад в меню</LinkButton>

      <p className="mt-7 text-sm min-[414px]:text-base sm:text-xl font-semibold">
        Ваша корзина пуста.
      </p>
      <p className="mt-1 text-sm min-[414px]:text-base sm:text-xl font-semibold">
        Перейдите в меню и сделайте выбор.
      </p>
    </div>
  );
}

export default EmptyCart;
