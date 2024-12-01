import { useLoaderData } from "react-router-dom";
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
    <div>
      <div>
        <h2>Состояние</h2>

        <div>
          {priority && <span>Приоритетный заказ </span>}
          <span>{status}</span>
        </div>
      </div>

      <div>
        <p>
          {deliveryIn >= 0
            ? `Осталось ${calcMinutesLeft(estimatedDelivery)} мин 😃`
            : "Заказ уже должен был поступить"}
        </p>
        <p>(Предполагаемое время доставки: {formatDate(estimatedDelivery)})</p>
      </div>

      <div>
        <p>Цена за пиццу: {formatCurrency(orderPrice)}</p>
        {priority && <p>Наценка за приоритетность: {formatCurrency(priorityPrice)}</p>}
        <p>Оплатить при получении: {formatCurrency(orderPrice + priorityPrice)}</p>
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