import React from 'react'
import {useNavigate} from 'react-router-dom'
import {Button} from '@mui/material/Button'

export default function Home() {
    const navigate = useNavigate();
  return (
    <>
        <Button variant="contained" className="customer" onClick={()=>navigate('/customer')}> Start creating your fest </Button>
    </>
  )
}
