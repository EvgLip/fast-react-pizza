import { Link } from "react-router-dom";

function CartOverview ()
{
  return (
    <div>
      <p>
        <span>23 пиццы </span>
        <span>735 &#8381;</span>
      </p>
      <Link to="/cart">Перейти в карзину &rarr;</Link>
    </div>
  );
}

export default CartOverview;
