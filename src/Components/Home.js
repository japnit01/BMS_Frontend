import React from 'react'
import {useNavigate} from 'react-router-dom'
import {Button} from '@mui/material/Button'

export default function Home() {
    const navigate = useNavigate();
  return (
    <>
        <Button variant="contained" className="addcustomer" onClick={()=>navigate('/addcustomer')}> Start creating your fest </Button>
        <Button variant="contained" className="addemployee" onClick={()=>navigate('/addemployee')}> Start creating your fest </Button>
    </>
  )
}
