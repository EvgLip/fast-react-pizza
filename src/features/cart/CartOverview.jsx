import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

import { declension, formatCurrency } from "../../utils/helpers";
import { getTotalCartPrice, getTotalCartQuantity } from "./CartSlice";

function CartOverview ()
{
  const totalCartQuantity = useSelector(getTotalCartQuantity);
  const totalCartPrice = useSelector(getTotalCartPrice);

  if (!totalCartQuantity) return null;

  return (
    <div className="flex justify-between items-center p-4 bg-stone-800 text-stone-200 uppercase text-xs min-[414px]:text-sm">
      <p className="space-x-4 font-semibold">
        <span >{totalCartQuantity} {declension(totalCartQuantity)}</span>
        <span>{formatCurrency(totalCartPrice)}</span>
      </p>
      <Link to="/cart">В корзину &rarr;</Link>
    </div>
  );
}

export default CartOverview;
