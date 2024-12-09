import { useDispatch, useSelector } from 'react-redux';

import Button from '../../ui/Button';
import LinkButton from '../../ui/LinkButton';
import CartItem from './CartItem';
import { clearCart, getCart } from './сartSlice';
import { getUserName } from '../user/userSlice';
import EmptyCart from './EmptyCart';

// const fakeCart = [
//   {
//     pizzaId: 12,
//     name: 'Mediterranean',
//     quantity: 2,
//     unitPrice: 16,
//     totalPrice: 32,
//   },
//   {
//     pizzaId: 6,
//     name: 'Vegetale',
//     quantity: 1,
//     unitPrice: 13,
//     totalPrice: 13,
//   },
//   {
//     pizzaId: 11,
//     name: 'Spinach and Mushroom',
//     quantity: 1,
//     unitPrice: 15,
//     totalPrice: 15,
//   },
// ];

function Cart ()
{
  const dispatch = useDispatch();
  const userName = useSelector(getUserName);
  const cart = useSelector(getCart);

  if (!cart.length) return <EmptyCart />;

  return (
    <div className="px-4 py-3">
      <LinkButton to="/menu">&larr; Назад в меню</LinkButton>

      <h1 className="mt-7 text-sm min-[414px]:text-base sm:text-xl font-semibold">
        {userName}, Вы хотите заказать:
      </h1>
      <ul className="mt-3 divide-y divide-stone-200 border-b">
        {
          cart.map(item => <CartItem item={item} key={item.pizzaId} />)
        }
      </ul>
      <div className="mt-6 space-x-2">
        <Button type="primaryBig" to="/order/new">Сделать заказ</Button>
        <Button type="secondaryBig"
          onClick={() => dispatch(clearCart())}
        >
          Очистить корзину
        </Button>
      </div>
    </div>
  );
}

export default Cart;
