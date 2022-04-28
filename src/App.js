import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from './Components/Navbar'
import AddCustomer from './Components/AddCustomer'
import AddEmployee from './Components/AddEmployee'
import Customers from './Components/Customers'
import Home from './Components/Home'

function App() {
  return (
    <>
      <BrowserRouter>
          <Navbar />
          <Routes>
            <Route index path="/" element={<Home />} />
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
