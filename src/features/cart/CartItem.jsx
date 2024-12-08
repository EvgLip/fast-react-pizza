import { formatCurrency } from '../../utils/helpers';
import DeleteCartItem from './DeleteCartItem';

//eslint-disable-next-line
function CartItem ({ item })
{
  //eslint-disable-next-line
  const { pizzaId, name, quantity, totalPrice } = item;

  return (
    <li className="py-3 sm:flex sm:justify-between sm:items-center">
      <p className="mb-1 sm:mb-0">
        {quantity} &times; {name}
      </p>
      <div className="flex justify-between items-center sm:gap-6">
        <p className="text-sm font-bold">{formatCurrency(totalPrice)}</p>
        <DeleteCartItem itemId={pizzaId}>Удалить</DeleteCartItem>
      </div>
    </li>
  );
}

export default CartItem;
