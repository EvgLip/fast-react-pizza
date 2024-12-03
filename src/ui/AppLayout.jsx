import { Outlet, useNavigation } from "react-router-dom";

import LoadingIndicator from "./LoadingIndicator";
import Header from "./Header";
import CartOverview from "../features/cart/CartOverview";


export default function AppLayout ()
{
  const navigation = useNavigation();
  // console.log(navigation)
  const isLoading = navigation.state === 'loading'; //навигация в состоянии загрузки данных

  return (
    <div className="grid grid-rows-[auto_1fr_auto] h-screen">
      {isLoading && <LoadingIndicator />}

      <Header />

      <div className="overflow-auto">
        <main className="mx-auto max-w-3xl">
          <Outlet />
        </main>
      </div>

      <CartOverview />
    </div>
  );
}
