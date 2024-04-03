import { Button, TextField, Typography } from '@mui/material'
import React from 'react'

const Registrations = () => {
  return (
    <div style={({marginTop:"80px"})}>
    <Typography variant="h2">Registration Form</Typography><br></br><br></br>
    <TextField label="Enter Name" variant="outlined"/><br></br><br></br>
    <TextField label="Enter Password" type="password" variant="outlined"/><br></br><br></br>
    <TextField label="confirm Password" type="password" variant="outlined"/><br></br><br></br>
    <TextField label="Enter email" type="email" variant="outlined"/><br></br><br></br>
    <TextField label="Enter number" type="number" variant="outlined"/><br></br><br></br>
    <Button variant="contained" color="success">submit</Button>
        </div>
  )
}

export default Registrations