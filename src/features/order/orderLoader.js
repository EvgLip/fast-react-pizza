import { getOrder } from "../../services/apiRestaurant";

export async function orderLoader ({ params })
{
  console.log('orderLoader', params);
  const order = await getOrder(params.orderId);
  return order;
}