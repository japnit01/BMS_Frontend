import React, { useEffect, useState, useContext } from "react";
import { CardActionArea,Typography,Button,CardContent,CardActions,Card,CardMedia,Grid,IconButton } from '@mui/material';
import { useNavigate } from "react-router-dom";

function Customers() {

//   const context = useContext(festContext);
//   const { FetchFests, DeleteFest, fest, setFest, update, setupdate } = context;
  const navigate = useNavigate();
  const [customers, setCustomers] = useState([]);

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


  
  return (
    <>
      <div className="myfest">
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
                  <IconButton aria-label="delete" sx={{ color: '#BB86FC' }} >
                </IconButton>
                  {/* onClick={() => DeleteFest(fest._id)}> */}
                    {/* <DeleteOutlineIcon */}
                  
                  <IconButton aria-label="edit"  >
                  {/* onClick={() => handleupdatefest(fest)} */}
                    {/* <EditOutlinedIcon sx={{ color: '#BB86FC' }} /> */}
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
