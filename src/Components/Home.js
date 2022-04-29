import React from 'react'
import {useNavigate} from 'react-router-dom'
import {Button} from '@mui/material'

export default function Home() {
    const navigate = useNavigate();
  return (
    <>
        <Button variant="contained" className="addcustomer" onClick={()=>navigate('/addcustomer')}> Add customer </Button>
        <Button variant="contained" className="addemployee" onClick={()=>navigate('/addemployee')}> Add Employee </Button>
        <Button variant="contained" className="customers" onClick={()=>navigate('/customers')}> Customers </Button>
    </>
  )
}
