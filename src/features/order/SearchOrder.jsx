import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function SearchOrder ()
{
  const [order, setOrder] = useState('');
  const navigate = useNavigate();

  function handleSubmit (e)
  {
    e.preventDefault();
    if (!order) return;

    navigate(`/order/${order}`);
    setOrder('');
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        className="px-3 py-0.5 rounded-full"
        type="text"
        placeholder="Укажите номер заказа"
        value={order}
        onChange={e => setOrder(e.target.value)}
      />
    </form>
  );
}
