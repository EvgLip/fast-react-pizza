import { useLoaderData } from "react-router-dom";

import OrderItem from '../order/OrderItem';
import { calcMinutesLeft, formatCurrency, formatDate, } from "../../utils/helpers";

//тестовые id: IIDSAT  CQE92U

function Order ()
{
  const order = useLoaderData();
  // Каждый может найти все заказы, поэтому из соображений конфиденциальности не указываются имена и адреса, они предназначены только для персонала ресторана
  const {
    id,
    status,
    priority,
    priorityPrice,
    orderPrice,
    estimatedDelivery,
    cart,
  } = order;
  const deliveryIn = calcMinutesLeft(estimatedDelivery);

  return (
    <div className="px-4 py-6 space-y-8">
      <div className="flex flex-wrap gap-2 justify-between items-center">
        <h2 className="text-lg sm:text-xl font-semibold">
          Состояние заказа № {id}
        </h2>
        <div className="space-x-2">
          {
            priority &&
            <span className="px-3 py-1 bg-red-500 rounded-full text-sm text-red-50 tracking-wide uppercase font-semibold">
              priority
            </span>
          }
          <span className="px-3 py-1 bg-green-500 rounded-full text-sm text-green-50 tracking-wide uppercase font-semibold">
            {status}
          </span>
        </div>
      </div>

      <div className="px-6 py-4 bg-stone-200">
        <p className="mb-2">
          {deliveryIn >= 0
            ? `Осталось ${calcMinutesLeft(estimatedDelivery)} мин 😃`
            : "Заказ уже должен был поступить"}
        </p>
        <p className="flex flex-wrap gap-2 justify-between items-center">
          <span>Предполагаемое время доставки: </span>
          <span>{formatDate(estimatedDelivery)}</span>
        </p>
      </div>

      <ul className="divide-y divide-stone-200 border-t border-b">
        {
          cart.map(item => <OrderItem item={item} key={item.id} />)
        }
      </ul>

      <div className="px-6 py-4 bg-stone-200 space-y-2">
        <p className="flex flex-wrap gap-2 justify-between items-center text-sm text-stone-600 font-medium">
          <span>Цена за пиццу:</span>
          <span>{formatCurrency(orderPrice)}</span>
        </p>
        {
          priority &&
          <p className="flex flex-wrap gap-2 justify-between items-center text-sm text-stone-600 font-medium">
            <span>Наценка за приоритетность:</span>
            <span>{formatCurrency(priorityPrice)}</span>
          </p>
        }
        <p className="flex flex-wrap gap-2 justify-between items-center font-bold">
          <span>Оплатить при получении:</span>
          <span>{formatCurrency(orderPrice + priorityPrice)}</span>
        </p>
      </div>
    </div>
  );
}

export default Order;

//формат данных
/*
{
  status: "success",
  data: 
  {
    id: "CQE92U",
    status: "delivered",
    customer: "Jonas",
    priority: true,
    estimatedDelivery: "2023-04-13T12:46:36.917Z",
    orderPrice: 71,
    priorityPrice: 14;
    cart: 
    [
      {
        addIngredients: [],
        removeIngredients: [],
        pizzaId: 6,
        name: "Vegetale",
        quantity: 2,
        unitPrice: 13,
        totalPrice: 26
      },
      {
        addIngredients: [],
        removeIngredients: [],
        pizzaId: 11,
        name: "Spinach and Mushroom",
        quantity: 2,
        unitPrice: 15,
        totalPrice: 30
      },
      {
        addIngredients: [],
        removeIngredients: [],
        pizzaId: 18,
        name: "Tofu and Mushroom",
        quantity: 1,
        unitPrice: 15,
        totalPrice: 15
      }
    ],
  }
}
*/