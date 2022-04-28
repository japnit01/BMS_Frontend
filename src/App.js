import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from './Components/Navbar'
import Customer from './Components/Customer'
import Employee from './Components/Employee'

function App() {
  return (
    <>
      <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path="/" />
            {/* <Route index element={<Home />} /> */}
            {/* <Route path="login" element={<Login />} /> */}
            <Route path="customer" element={<Customer />} />
            <Route path="employee" element={<Employee />} />
          </Routes>
        </BrowserRouter>
    </>
  );
}

export default App;
