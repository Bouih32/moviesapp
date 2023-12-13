import { Outlet } from "react-router-dom";
import Header from "../Header";
import Search from "../Search";

export default function Layout() {
  return (
    <>
      <Header />
      <main>
        <Search />
        <Outlet />
      </main>
    </>
  );
}
