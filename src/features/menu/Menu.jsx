import { useLoaderData } from "react-router-dom";
import MenuItem from "./MenuItem";

export default function Menu ()
{
  const menu = useLoaderData();

  return (
    <ul className="divide-y divide-stone-200 px-2">
      {
        menu.map(pizza => <MenuItem pizza={pizza} key={pizza.id} />)
      }
    </ul>
  );
}


