import { getOrder } from "../../services/apiRestaurant";

export async function orderLoader ({ params })
{
  // console.log('orderLoader');
  const order = await getOrder(params.orderId);
  return order;
}