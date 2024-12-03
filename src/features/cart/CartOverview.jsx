import { Link } from "react-router-dom";

function CartOverview ()
{
  return (
    <div className="flex justify-between items-center p-4 bg-stone-800 text-stone-200 uppercase text-sm">
      <p className="space-x-4 font-semibold">
        <span >23 пиццы</span>
        <span>735 &#8381;</span>
      </p>
      <Link to="/cart">Карзина заказов &rarr;</Link>
    </div>
  );
}

export default CartOverview;
