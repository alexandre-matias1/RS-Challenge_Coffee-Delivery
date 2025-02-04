import { Routes, Route } from "react-router-dom";

import { Checkout } from "./pages/Checkout/Checkout";
import { CheckoutFilled } from "./pages/CheckoutFIlled/CheckoutFIlled";
import { Home } from "./pages/Home/Home";
import { Success } from "./pages/Success/Success";

import { DefaultLayout } from "./components/Layout/DefaultLayout";

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<DefaultLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/cart" element={<Checkout />} />
        <Route path="/checkout-filled" element={<CheckoutFilled />} />
        <Route path="/success" element={<Success />} />
      </Route>
    </Routes>
  );
}
