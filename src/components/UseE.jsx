import { Button, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'

const UseE = () => {
    var [name,setName] = useState()
        const changeHname = ()=>{
            setName("Home")
        }
        const changeGname = ()=>{
            setName("Gallery")
        }
        const changeCname = ()=>{
            setName("Contact")
        }
        useEffect ( ()=>{
            changeGname()
        },[])
  return (
    <div>
        <Typography variant='h4'>Welcome to {name}</Typography><br></br>
        <Button variant='contained' color='success' onClick={changeHname}>Home</Button>&nbsp;
        <Button variant='contained' color='warning'onClick={changeGname}>Gallery</Button>&nbsp;
        <Button variant='contained' color='error'onClick={changeCname}>Contact</Button>

    </div>
  )
}
<Button variant='contained' color='error'>Gallery</Button>

export default UseE