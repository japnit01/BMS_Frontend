import React, { useEffect, useState, useContext } from "react";
import { CardActionArea,TextField, Typography,Button,CardContent,CardActions,Card,CardMedia,Grid,IconButton } from '@mui/material';
import { useNavigate } from "react-router-dom";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";

function Customers() {

//   const context = useContext(festContext);
//   const { FetchFests, DeleteFest, fest, setFest, update, setupdate } = context;
  const navigate = useNavigate();
  const [customers, setCustomers] = useState([]);
  const [open, setOpen] = useState(false);
  const [formdata, setFormdata] = useState({email: "",balance: 0});
  // const [balance, setBalance] = useState(0)

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  useEffect(() => {
    setCustomers([  {
      "custId": 1,
      "fname": "Japnit",
      "lname": "Singh",
      "Email": "japnit@gmail.com",
      "Address": "Punjabi Bagh",
      "MobileNo": "9818157732",
      "Age": 21,
      "account_type": 'savings'
  },
  {
      "custId": 2,
      "fname": "Japnit1",
      "lname": "Singh1",
      "Email": "japnit1@gmail.com",
      "Address": "Punjabi Bagh1",
      "MobileNo": "9819157732",
      "Age": 20,
      "account_type": 'current'
  }])
  }, []);

  const onChange = (e) => {
    setFormdata({ ...formdata, [e.target.name]: e.target.value });
    console.log(formdata)
  }

  const handleUpdate = async()=> {
    let jsonData = {
      email:formdata.email,
      balance:formdata.balance
    }
    console.log(jsonData)
    // loginuser(jsonData)
    setOpen(false);
  };
  
  return (
    <>
      <div className="myfest">
      <Button className="submitbtn" name="Update" onClick={handleClickOpen} size="small">
                  Update Balance
                </Button>
                <Button className="submitbtn" name="addcustomer" onClick={() => navigate(`/addcustomer`)} size="small">
                  Add Customer
                </Button>
      <Dialog open={open} onClose={handleClose}>

      <Typography variant="h4" sx={{ pb: "4%", fontWeight: "bold" }}>All Customers</Typography>
        <DialogTitle>Update Balance</DialogTitle>
        <DialogContent>
          <TextField
            label={"Email"}
            id={"email"}
            type={"email"}
            width={"100%"}
            onChange={onChange}
            value={formdata.email}
            name={"email"}
          ></TextField>
          <TextField
            label={"Balance"}
            id={"balance"}
            type={"text"}
            width={"100%"}
            onChange={onChange}
            value={formdata.balance}
            name={"balance"}
          ></TextField>
        </DialogContent>
        <DialogActions>
          <Button name={"Cancel"} onClick={handleClose}>Cancel</Button>
          <Button name={"Update"} onClick={handleUpdate}>Update</Button>
        </DialogActions>
      </Dialog>

        <Grid container rowSpacing={3} spacing={1} sx={{ position: 'relative',pt:"4%"}}>
          {customers.map((customer) => (
            <Grid key={customer.custId} item xs={4}>

              <Card id="customercard" sx={{ maxWidth: 345 }} >
                <CardActionArea className="customeractioncard">
                {/* onClick={() => navigate(`/c/fest/${fest.name}-${fest._id}`)} */}
                  

                  <CardContent>
                    <Typography variant="h5">
                      {customer.fname}
                    </Typography>
                    <Typography variant="h5">
                      {customer.lname}
                    </Typography>
                    <Typography variant="body2">
                      {customer.Email}
                    </Typography>
                    <Typography variant="body2">
                      {customer.Address}
                    </Typography>
                    <Typography variant="body2">
                      {customer.MobileNo}
                    </Typography>
                    <Typography variant="body2">
                      {customer.Age}
                    </Typography>
                    <Typography variant="body2">
                      {customer.account_type}
                    </Typography>
                  </CardContent>

                </CardActionArea>

                <CardActions>
                  {/* <IconButton aria-label="delete" sx={{ color: '#BB86FC' }} >
                </IconButton>  */}
                  {/* onClick={() => DeleteFest(fest._id)} />  */}
                    
                  
                  {/* <IconButton aria-label="edit"  >
                   onClick={() => handleupdatefest(fest)}
                     <EditOutlinedIcon sx={{ color: '#BB86FC' }} /> 
                  </IconButton> */}
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>

      </div>
    </>
  );
}

export default Customers;
