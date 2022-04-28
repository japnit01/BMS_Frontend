import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from './Components/Navbar'
import Customer from './Components/Customer'

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

          </Routes>
        </BrowserRouter>
    </>
  );
}

export default App;
