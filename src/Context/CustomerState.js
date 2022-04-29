import { useState } from "react";
import customerContext from "./customerContext";


const CustomerState = (props) => {
    const host = "http://localhost:5000";
    const [update, setupdate] = useState(true);
    const [customer, setCustomer] = useState({
        custId:"", fname: "", lname: "", Address: "", MobileNo: "", Age: "", Email: ""
    });


    return (
        <customerContext.Provider value={{ customer,setCustomer, update, setupdate }}>
          {props.children}
        </customerContext.Provider>
      );
    };
    
    export default CustomerState;