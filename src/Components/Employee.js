import React, { useEffect, useState, useContext } from 'react'
import { Typography, TextField, InputLabel, MenuItem, Select, FormControl, Button, InputAdornment, Container } from "@mui/material";

function Employee() {

  const [employee, setEmployee] = useState({fname: "", lname: "", dept: ""});
  const host = 'http://localhost:5000';
  // useEffect(() => {
  //   setupdate(true)
  // }, []);

  const onChange = (e) => {
    setEmployee({ ...employee, [e.target.name]: e.target.value });
    console.log(employee)
  }

  const handleClick = async() => {
      // make connection with api
      let jsondata = employee;
      let url = `${host}/api/data/customer`;

      let response = await fetch(url, {
        method: 'POST',
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(jsondata)
      })

      let custDetails = await response.json();
      console.log(employee)
  }

  return (
    <>
       <div className="signupcontainer">
        <div className="subcontainer">
          <Container maxWidth="sm" sx={{ ml: 3, pt: "7%" }}>
            <Typography variant="h4" sx={{pb: "4%" }}>New Employee</Typography>

            <TextField
              label="First Name"
              id="fname"
              type="text"
              className="fname"
              sx={{ width: "100%" }}
              onChange={onChange}
              value={employee.fname}
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
              value={employee.lname}
              name="lname"
              margin="dense"
              variant="filled"
              autoComplete="off"
            ></TextField>

            <TextField
              label="Department"
              id="dept"
              type="text"
              className="dept"
              sx={{ width: "100%" }}
              onChange={onChange}
              value={employee.dept}
              name="dept"
              margin="dense"
              variant="filled"
              autoComplete="off"
            >
            </TextField>

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

export default Employee;