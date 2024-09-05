import { Outlet } from "react-router-dom";
import ShoppingHeader from "./header";

function ShoppingLayout() {
  return (
    <div className="flex flex-col bg-orange-100 overflow-hidden">
      {/* common header */}
      <ShoppingHeader />
      <main className="flex flex-col w-full h-full">
        <Outlet />
      </main>
    </div>
  );
}

export default ShoppingLayout;
