import React, { useEffect, useState, useContext } from 'react'
import { Typography, TextField, InputLabel, MenuItem, Select, FormControl, Button, InputAdornment, Container } from "@mui/material";

function AddCustomer() {

  const [customer, setCustomer] = useState({fname: "", lname: "", Address: "", MobileNo: "", Age: "", Email: ""});
  const host = 'http://localhost:5000';

  const onChange = (e) => {
    setCustomer({ ...customer, [e.target.name]: e.target.value });
    console.log(customer)
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
  }

  return (
    <>
       <div className="signupcontainer">
        <div className="subcontainer">
          <Container maxWidth="sm" sx={{ ml: 3, pt: "7%" }}>
            <Typography variant="h4" sx={{pb: "4%" }}>New Customer</Typography>

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
                sx={{ width: "28%", marginLeft: '0.6rem' }}
                onChange={onChange}
                value={customer.Age}
                name="Age"
                margin="dense"
                variant="filled"
                autoComplete="off"
              >
              </TextField>
            </div>

            <TextField
                label="Account Type"
                id="account_type"
                type="number"
                className="account_type"
                sx={{ width: "100%" }}
                onChange={onChange}
                value={customer.account_type}
                name="account_type"
                margin="dense"
                variant="filled"
                autoComplete="off"
              >
              </TextField>

            <div className="buttoncontainer">
              <Button className="submitbtn" onClick={()=>handleClick()} size="small">
                  Create Account
                </Button>
            </div>
          </Container>
        </div>
      </div>
    </>
  )
}

export default AddCustomer;