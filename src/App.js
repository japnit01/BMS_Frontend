import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from './Components/Navbar'
import AddCustomer from './Components/AddCustomer'
import AddEmployee from './Components/AddEmployee'
import Customers from './Components/Customers'

function App() {
  return (
    <>
      <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path="/" />
            {/* <Route index element={<Home />} /> */}
            {/* <Route path="login" element={<Login />} /> */}
            <Route path="addcustomer" element={<AddCustomer />} />
            <Route path="addemployee" element={<AddEmployee />} />
            <Route path="customers" element={<Customers />} />
          </Routes>
        </BrowserRouter>
    </>
  );
}

export default App;
