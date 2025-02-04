import { Header } from "../Header/Header";
import { Outlet } from "react-router-dom";
export function DefaultLayout() {
  return (
    <>
      <Header />
      <Outlet />
    </>
  );
}
