import { useDispatch } from "react-redux";

import Button from "../../ui/Button";
import { deleteItem } from './CartSlice';

//eslint-disable-next-line
export default function DeleteCartItem ({ children, type, itemId })
{
  const dispatch = useDispatch();

  function handleDeleneItem ()
  {
    dispatch(deleteItem(itemId));
  }

  return (
    <div>
      <Button type={type} onClick={handleDeleneItem}>
        {children}
      </Button>
    </div>
  );
}
