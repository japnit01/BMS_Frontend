import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from './Components/Navbar'
import AddCustomer from './Components/AddCustomer'
import AddEmployee from './Components/AddEmployee'
import Customers from './Components/Customers'
import Home from './Components/Home'
import CustomerState from "./Context/CustomerState"

function App() {
  return (
    <>
      <CustomerState>
      <BrowserRouter>
          <Navbar />
          <Routes>
            <Route index path="/" element={<Home />} />
            <Route path="addcustomer" element={<AddCustomer />} />
            <Route path="editcustomer" element={<AddCustomer />} />
            <Route path="addemployee" element={<AddEmployee />} />
            <Route path="customers" element={<Customers />} />
          </Routes>
        </BrowserRouter>
        </CustomerState>
    </>
  );
}

export default App;
