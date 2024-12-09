import { Form, useActionData, useNavigation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { BsGeoAlt } from "react-icons/bs";

import Button from "../../ui/Button";
import EmptyCart from "../cart/EmptyCart";

import { getCart, getTotalCartPrice } from "../cart/CartSlice";
import { formatCurrency } from "../../utils/helpers";
import { fetchAddress, getUser } from "../user/userSlice";


export default function CreateOrder ()
{
  const [withPriority, setWithPriority] = useState(false);
  const formData = useActionData();
  const navigation = useNavigation();
  const isSubmiting = navigation.state === 'submitting';
  const dispatch = useDispatch();

  const { userName, status: addressStatus, position, address, error: addressError } = useSelector(getUser);
  const isLoadingAddress = addressStatus === 'loading';
  const cart = useSelector(getCart);
  const totalCardPrice = useSelector(getTotalCartPrice);
  const priorityPrice = withPriority ? totalCardPrice * 0.2 : 0;
  const totalPrice = totalCardPrice + priorityPrice;

  if (!cart.length) return <EmptyCart />;

  return (
    <div className="px-4 py-6">
      <h2 className="mb-2 text-xl font-semibold">
        Оформление заказа
      </h2>

      {/* <Form method="POST" > */}
      <Form method="POST" action="/order/new" >
        <div className="flex flex-col gap-2 mt-5 sm:flex-row sm:items-center">
          <label className="sm:basis-16">Имя</label>
          <input className="input grow"
            type="text"
            name="customer" required
            defaultValue={userName}
          />
        </div>

        <div className="flex flex-col gap-2 mt-5 sm:flex-row sm:items-center">
          <label className="sm:basis-16">Телефон</label>
          <input className="input grow" type="tel" name="phone"
            placeholder=""
            required
          />
        </div>
        {
          formData?.invalidPhone &&
          <p className="bg-red-100 text-sm text-red-600 italic">
            {formData.invalidPhone}
          </p>
        }

        <div className="relative flex flex-col gap-2 mt-5 sm:flex-row sm:items-center">
          <label className="sm:basis-16">Адрес</label>
          <input
            className="input grow"
            defaultValue={address}
            type="text"
            name="address"
            disabled={isLoadingAddress}
            required
          />
          {
            !position.latitude && !position.longitude &&
            (<span className="absolute z-10 top-[36px] right-[4.5px] sm:top-[4px] md:top-[8px] md:right-[9.5px]">
              <Button
                type="secondarySmall"
                onClick={(e) => 
                {
                  e.preventDefault();
                  dispatch(fetchAddress());
                }
                }
                disabled={isLoadingAddress}
              >
                <BsGeoAlt />
              </Button>
            </span>)
          }
        </div>
        {
          addressStatus === 'error' &&
          <p className="bg-red-100 text-sm text-red-600 italic">
            {addressError}
          </p>
        }

        <div className="mt-5 flex gap-5 items-center">
          <input className="h-6 w-6 accent-yellow-400 focus:outline-none focus:ring focus:ring-yellow-400 focus:ring-offset-2"
            type="checkbox"
            name="priority"
            id="priority"
            value={withPriority}
            onChange={(e) => setWithPriority(e.target.checked)}
          />
          <label htmlFor="priority" className="font-medium">
            {'Сделать заказ приоритетным (дополнительно 20% от стоимости заказа)'}
          </label>
        </div>

        <div className="mt-12">
          <input type="hidden" name="cart" value={JSON.stringify(cart)} />
          <input type="hidden" name="position"
            value={(position.latitude && position.longitude)
              ? `${position.latitude} ${position.longitude}`
              : ''}
          />
          <Button type="primaryBig" disabled={isSubmiting || isLoadingAddress}>
            {
              isSubmiting
                ? 'Регистрация заказа...'
                : `Оформить заказ на ${formatCurrency(totalPrice)}`
            }
          </Button>
        </div>
      </Form >
    </div >
  );
}
