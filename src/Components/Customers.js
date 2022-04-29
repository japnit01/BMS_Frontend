import React, { useEffect, useState, useContext } from "react";
import { CardActionArea,TextField, Typography,Button,CardContent,CardActions,Card,CardMedia,Grid,IconButton } from '@mui/material';
import { useNavigate } from "react-router-dom";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import EditOutlinedIcon from '@mui/icons-material/EditOutlined';
import customerContext from '../Context/customerContext';

function Customers() {
  const context = useContext(customerContext);
  const {customer,setCustomer} = context;
  const navigate = useNavigate();
  const [customers, setCustomers] = useState([]);
  const [open, setOpen] = useState(false);
  const [formdata, setFormdata] = useState({email: "",balance: 0});
  const host = 'http://localhost:5000';
  // const [balance, setBalance] = useState(0)


  const [update,setupdate] = useState(true)

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const FetchCustomer = async() =>{
    let url = `${host}/api/c/getcustomer`;

    let response = await fetch(url, {
      method: 'GET',
      headers: {
        "Content-Type": "application/json"
      },
    })

    let custDetails = await response.json();
    return custDetails;
  }

  useEffect(() => {
    setupdate(true)
  }, []);

  useEffect(() => {
    if (update) {

    FetchCustomer().then((customers) => {
      const copycustomers = JSON.parse(JSON.stringify(customers));
      console.log(copycustomers)
      setCustomers(copycustomers);
    });
  }
  },[update]);

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
  
  const DeleteCustomer = async(id) => {
    let url = `${host}/api/c/deletecustomer/${id}`;

    let response = await fetch(url, {
      method: 'DELETE',
      headers: {
        "Content-Type": "application/json"
      },
    })

    let custDetails = await response.json();
  }

  const handleupdatecustomer = (custom) =>{
    const copycus = JSON.parse(JSON.stringify(custom));
    console.log(custom)
    setCustomer({
      custId: copycus.custId,
      fname: copycus.fname,
      lname: copycus.lname,
      Address: copycus.Address,
      MobileNo: copycus.MobileNo,
      Age: copycus.Age,
      Email: copycus.Email,
    });

    navigate('/editcustomer') 
  }

  return (
    <>
      <div className="myfest" style={{marginTop:"5%"}}>
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
          {customers && customers.map((customer) => (
            <Grid key={customer.custId} item xs={4}>

              <Card id="customercard" sx={{ maxWidth: 345 }} >
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
                <CardActions>
                <IconButton aria-label="delete" onClick={() => DeleteCustomer(customer.custId)}>
                    <DeleteOutlineIcon sx={{ color: '#BB86FC' }} />
                  </IconButton>
                  
                  <IconButton aria-label="edit" onClick={() => handleupdatecustomer(customer)} >
                    <EditOutlinedIcon sx={{ color: '#BB86FC' }} />
                  </IconButton>
               
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
