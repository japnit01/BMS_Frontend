import React, { useEffect, useState, useContext } from 'react'
import { Typography, TextField, InputLabel, MenuItem, FormControl, Button, InputAdornment, Container } from "@mui/material";
import Select from 'react-select';
import customerContext from '../Context/customerContext';
import { useParams, useNavigate,useLocation  } from "react-router-dom";

const options = [
  { value: 'Savings', label: 'Savings'},
  {value: 'Current', label: 'Current'},
  {value: 'Fixed Deposit', label: 'Fixed Deposits'}
]

function AddCustomer() {
  const context = useContext(customerContext);
  const {customer,setCustomer} = context;
  const navigate = useNavigate();
  let location = useLocation();
  console.log(location.pathname)
  const host = 'http://localhost:5000';

  const onChange = (e) => {
    setCustomer({ ...customer, [e.target.name]: e.target.value });
    console.log(customer)
  }

  useEffect(() => {
    
    if (location.pathname === "/addcustomer") {
      setCustomer({
        custId:"", fname: "", lname: "", Address: "", MobileNo: "", Age: "", Email: ""
      });
    }
  }, []);

  const handleClickUpdate = async() => {
    // make connection with api
    let jsondata = customer;
    console.log(jsondata)
    let url = `${host}/api/c/updatecustomer`;
    let response = await fetch(url, {
      method: 'PUT',
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(jsondata)
    })

    let custDetails = await response.json();
    console.log(customer);
    navigate(`/customers`)
}

  const handleClick = async() => {
      // make connection with api
      let jsondata = customer;
      let url = `${host}/api/c/addcustomer`;

      let response = await fetch(url, {
        method: 'POST',
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(jsondata)
      })

      let custDetails = await response.json();
      console.log(customer)
      navigate(`/customers`)
  }

  return (
    <>
       <div className="signupcontainer">
        <div className="subcontainer">
          <Container maxWidth="sm" sx={{ ml: 3, pt: "7%" }}>
            <Typography variant="h4" sx={{ pb: "4%", fontWeight: "bold" }}>Sign Up</Typography>

            <TextField
              label="First Name"
              id="fname"
              type="text"
              className="fname"
              sx={{ width: "100%" }}
              onChange={onChange}
              value={customer.fname}
              name="fname"
              margin="dense"
              variant="filled"
              autoComplete="off"
            ></TextField>

            <TextField
              label="Last Name"
              id="lname"
              type="text"
              className="lname"
              sx={{ width: "100%" }}
              onChange={onChange}
              value={customer.lname}
              name="lname"
              margin="dense"
              variant="filled"
              autoComplete="off"
            ></TextField>

            <TextField
              label="Address"
              id="address"
              type="text"
              className="address"
              sx={{ width: "100%" }}
              onChange={onChange}
              value={customer.Address}
              name="Address"
              margin="dense"
              variant="filled"
              autoComplete="off"
            >
            </TextField>

            <TextField
                label="Email"
                id="email"
                type="text"
                className="email"
                sx={{ width: "100%" }}
                onChange={onChange}
                value={customer.Email}
                name="Email"
                margin="dense"
                variant="filled"
                autoComplete="off"
              >
              </TextField>

            <div className="placecontainer">
              <TextField
                label="Mobile No."
                id="mobileno"
                type="text"
                className="mobileno"
                sx={{ width: "70%" }}
                onChange={onChange}
                value={customer.MobileNo}
                name="MobileNo"
                margin="dense"
                variant="filled"
                autoComplete="off"
              >
              </TextField>
              
              <TextField
                label="Age"
                id="age"
                type="number"
                className="age"
                sx={{ width: "28%", marginLeft: '0.6rem', paddingBottom: '2%'}}
                onChange={onChange}
                value={customer.Age}
                name="Age"
                margin="dense"
                variant="filled"
                autoComplete="off"
              >
              </TextField>
            </div>

            {/* <Select options={options} /> */}
            

            <div className="buttoncontainer" style={{paddingTop:"2%", marginBottom:"10%"}}>
              {customer.custId === "" ? 
              <Button className="submitbtn" onClick={()=>handleClick()} size="small">
                  Create Account
                </Button>:
                <Button className="submitbtn" onClick={()=>handleClickUpdate()} size="small">
                  Update
                </Button>}
            </div>
          </Container>
        </div>
      </div>
    </>
  )
}

export default AddCustomer;