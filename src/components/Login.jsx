import { Button, TextField, Typography } from '@mui/material'
import React from 'react'

const Login = () => {
  return (
    <div style={({marginTop:"80px"})}>
        {/* <h1> Login  </h1> */}
        {/* <input type="text"placeholder="Enter Name"/><br></br><br></br> */}
        {/* <input type="password"placeholder="Enter Password"/>  */}
        <br></br><br></br>

    <Typography variant='h4'>Login page</Typography><br></br><br></br>
    <TextField label="Enter Name" variant="outlined"/> <br></br><br></br>
    <TextField label="Enter password" type="password" variant="outlined"/><br></br><br></br>
    <Button variant="contained" color='success'>Log In</Button>
    </div>
  )
}

export default Login