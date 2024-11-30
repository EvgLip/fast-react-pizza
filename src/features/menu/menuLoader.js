import { getMenu } from "../../services/apiRestaurant";


export async function loaderMenu ()
{
  const menu = await getMenu();
  return menu;
}
