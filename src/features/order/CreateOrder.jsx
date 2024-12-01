import { Form, useActionData, useNavigation } from "react-router-dom";

const fakeCart = [
  {
    pizzaId: 12,
    name: "Mediterranean",
    quantity: 2,
    unitPrice: 16,
    totalPrice: 32,
  },
  {
    pizzaId: 6,
    name: "Vegetale",
    quantity: 1,
    unitPrice: 13,
    totalPrice: 13,
  },
  {
    pizzaId: 11,
    name: "Spinach and Mushroom",
    quantity: 1,
    unitPrice: 15,
    totalPrice: 15,
  },
];

export default function CreateOrder ()
{
  const formData = useActionData();
  console.log('formData ', formData);
  const navigation = useNavigation();
  // console.log(navigation);
  const isSubmiting = navigation.state === 'submitting';
  // const [withPriority, setWithPriority] = useState(false);
  const cart = fakeCart;

  return (
    <div>
      <h2>Оформление заказа</h2>

      {/* <Form method="POST" > */}
      <Form method="POST" action="/order/new">
        <div>
          <label>Имя</label>
          <input type="text" name="customer" required />
        </div>

        <div>
          <label>Номер телефона</label>
          <div>
            <input type="tel" name="phone" required />
          </div>
          {
            formData?.phone && <p>{formData.phone}</p>
          }
        </div>

        <div>
          <label>Адрес</label>
          <div>
            <input type="text" name="address" required />
          </div>
        </div>

        <div>
          <input
            type="checkbox"
            name="priority"
            id="priority"
          // value={withPriority}
          // onChange={(e) => setWithPriority(e.target.checked)}
          />
          <label htmlFor="priority">{'Сделать заказ приоритетным (взимается дополнительная плата)'}</label>
        </div>

        <div>
          <input type="hidden" name="cart" value={JSON.stringify(cart)} />
          <button disabled={isSubmiting}>
            {
              isSubmiting
                ? 'Регистрация заказа...'
                : 'Оформить заказ'
            }
          </button>
        </div>
      </Form>
    </div>
  );
}
