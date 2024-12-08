import { useDispatch } from "react-redux";
import Button from "../../ui/Button";
import { decreaseItemQuantity, increaseItemQuantity } from "./CartSlice";

//eslint-disable-next-line
export default function UpdateItemQuantity ({ itemId, quantity })
{
  const dispatch = useDispatch();
  const typeRoundBtn = quantity > 1 ? 'roundPrimary' : 'roundSecondary';

  return (
    <div className="flex items-center gap-1 md:gap-2">
      <Button type={typeRoundBtn}
        onClick={() => dispatch(decreaseItemQuantity(itemId))}>-</Button>
      <span>{quantity}</span>
      <Button type="roundPrimary"
        onClick={() => dispatch(increaseItemQuantity(itemId))}>+</Button>
    </div>
  );
}
