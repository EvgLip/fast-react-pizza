import { useDispatch } from "react-redux";
import Button from "../../ui/Button";
import { decreaseItemQuantity, increaseItemQuantity } from "./CartSlice";

export default function UpdateItemQuantity ({ itemId })
{
  const dispatch = useDispatch();

  return (
    <div className="flex items-center gap-1 md:gap-3">
      <Button type="round"
        onClick={() => dispatch(decreaseItemQuantity(itemId))}>-</Button>
      <Button type="round"
        onClick={() => dispatch(increaseItemQuantity(itemId))}>+</Button>
    </div>
  );
}
