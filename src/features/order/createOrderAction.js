import { redirect } from "react-router-dom";
import { createOrder } from "../../services/apiRestaurant";

import store from '../../store';
import { clearCart } from "../cart/CartSlice";

//источник регулярного выражения https://uibakery.io/regex-library/phone-number
//возвращает true/false
const isValidPhone = (str) =>
  /^\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}$/.test(
    str
  );

export async function createOrderAction ({ request })
{
  const formData = await request.formData();
  const data = Object.fromEntries(formData);

  const order = {
    ...data,
    cart: JSON.parse(data.cart),
    priority: data.priority === 'true',
  };

  const errors = {};
  if (!isValidPhone(order.phone))
    errors.invalidPhone = 'Пожалуйста, сообщите Ваш действительный номер телефона. Он понадобится, чтобы связаться с Вами в процессе доставки заказа.';

  //если есть ошибки - перехватить их в <CreateOrder />
  if (Object.keys(errors).length > 0) return errors;
  //иначе создать новый заказ и перенаправить на страницу заказа
  const newOrder = await createOrder(order);
  //очищаем корзину
  //не следует злоупотреблять прямым обращением к store
  //это влияет на производительность
  store.dispatch(clearCart());
  return redirect(`/order/${newOrder.id}`);
}