import { Route, Routes } from "react-router-dom";
import Dashboard from "../../pages/dashboard/Dashboard";
import Customer from "../../pages/customer/Customer";
import Product from "../../pages/product/Product";

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Dashboard />}></Route>

      <Route path="/customers" element={<Customer />}></Route>
      <Route path="/products" element={<Product />}></Route>
    </Routes>
  );
}
export default AppRoutes;
