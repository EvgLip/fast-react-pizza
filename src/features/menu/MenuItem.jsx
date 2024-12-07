import { useDispatch } from 'react-redux';

import { formatCurrency } from '../../utils/helpers';
import Button from '../../ui/Button';
import { addItem } from '../cart/CartSlice';

//eslint-disable-next-line
function MenuItem ({ pizza })
{//eslint-disable-next-line
  const { id, name, unitPrice, ingredients, soldOut, imageUrl } = pizza;
  const dispatch = useDispatch();

  function handleAddToCart ()
  {
    const newItem = {
      pizzaId: id,
      name,
      quantity: 1,
      unitPrice,
      totalPrice: unitPrice * 1,
    };
    dispatch(addItem(newItem));
  }

  return (
    <li className="flex gap-4 py-2">
      <img className={`h-24 ${soldOut ? 'opacity-70 grayscale' : ''}`}
        src={imageUrl} alt={name}
      />
      <div className="flex flex-1 flex-col pt-0.5">
        <p className="font-medium">{name}</p>
        {/*eslint-disable-next-line*/}
        <p className="text-sm capitalize italic text-stone-500">{ingredients.join(', ')}</p>
        <div className="flex justify-between items-center mt-auto">
          {
            !soldOut
              ? <p className="text-sm">{formatCurrency(unitPrice)}</p>
              : <p className="text-sm font-medium uppercase text-stone-500">Распродано</p>
          }
          {
            !soldOut &&
            <Button type="small" onClick={handleAddToCart}>
              Добавить
            </Button>
          }
        </div>
      </div>
    </li>
  );
}

export default MenuItem;
