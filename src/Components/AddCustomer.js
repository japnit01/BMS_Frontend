import React, { useEffect, useState, useContext } from 'react'
import { Typography, TextField, InputLabel, MenuItem, Select, FormControl, Button, InputAdornment, Container } from "@mui/material";

function AddCustomer() {

  const [customer, setCustomer] = useState({fname: "", lname: "", address: "", mobileno: "", age: "", email: ""});
  // const host = 'http://localhost:5000';
  // useEffect(() => {
  //   setupdate(true)
  // }, []);

  const onChange = (e) => {
    setCustomer({ ...customer, [e.target.name]: e.target.value });
    console.log(customer)
  }

  const handleClick = async() => {
      // make connection with api
      // let jsondata = customer;
      // let url = `${host}/api/data/customer`;

      // let response = await fetch(url, {
      //   method: 'POST',
      //   headers: {
      //     "Content-Type": "application/json"
      //   },
      //   body: JSON.stringify(jsondata)
      // })

      // let custDetails = await response.json();
      console.log(customer)

      // return custDetails;
  }

  return (
    <>
       <div className="signupcontainer">
        <div className="subcontainer">
          <Container maxWidth="sm" sx={{ ml: 3, pt: "7%" }}>
            <Typography variant="h4" sx={{ color: "white", pb: "4%" }}>Sign Up</Typography>

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
              value={customer.address}
              name="address"
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
                value={customer.fee}
                name="email"
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
                value={customer.mobileno}
                name="mobileno"
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
                value={customer.age}
                name="age"
                margin="dense"
                variant="filled"
                autoComplete="off"
              >
              </TextField>
            </div>

            <div className="buttoncontainer">
              <Button className="submitbtn" onClick={handleClick} size="small">
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