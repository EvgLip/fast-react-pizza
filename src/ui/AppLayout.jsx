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
    <div className="layout">
      {isLoading && <LoadingIndicator />}

      <Header />

      <main>
        <Outlet />
      </main>

      <CartOverview />
    </div>
  );
}
