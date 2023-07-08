import React, { useState } from 'react';
import { Box ,Menu , MenuItem } from '@mui/material';
import {AppBar,Toolbar,Typography,styled } from '@mui/material';
import AcUnitRoundedIcon from '@mui/icons-material/AcUnitRounded';
import { InputBase , Badge ,Avatar } from '@mui/material';
import {Mail,Notifications} from '@mui/icons-material';

const StyledToolbar = styled(Toolbar)({
  display:"flex",
  // minHeight: 20,
  background:"#581845" ,
  alignItems: 'center',
  justifyContent:"space-between"
})

const Search = styled("div")(({theme})=>({
  backgroundColor:"white",
  padding:"0 10px",
  borderRadius: 6,
  width:"30%",
  height:"6vh"
}))

const Icons = styled(Box)(({theme})=>({
  display:"none",
  alignItems:"center",
  gap:"20px",
  [theme.breakpoints.up("sm")]:{
    display:"flex"                 //isk matlab hai ki agar screen ki size medium(600) se uppar kyuki (up) laga hai---> jaye tab displaflex kardo
    //nhi toh display :none jo 25 line me hai woh kardo
  }
}))

const UserBox = styled(Box)(({theme})=>({
  display:"flex",
  alignItems:"center",
  gap:"10px",
  [theme.breakpoints.up("sm")]:{
    display:"none"
  }
}))

function Navbar() {
  const [open , setOpen] = useState(false)
  return (
    <AppBar position='sticky'>
      <StyledToolbar >
        <Typography variant='h6' sx={{display:{xs:"none" , sm:"block"}}}>MW</Typography>
        <AcUnitRoundedIcon sx={{display:{xs:"block" , sm:"none"}}}/>
        <Search><InputBase placeholder='Search...'/></Search>
        <Icons>
          <Badge badgeContent={4} color="error">
            <Mail/>
          </Badge>
          <Badge  color="error">
            <Notifications/>
          </Badge>
          <Avatar
           src="https://images.unsplash.com/photo-1600486913747-55e5470d6f40?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80"
           sx={{width:30 , height:30}}
           onClick={(e) => setOpen(true)}
           />
        </Icons>
        <UserBox onClick={(e) => setOpen(false)}>
        <Avatar 
          src="https://images.unsplash.com/photo-1600486913747-55e5470d6f40?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80" 
          sx={{width:30 , height:30}}
          />
        <Typography>Krishn</Typography>
        </UserBox>
      </StyledToolbar>
      <Menu
        id="demo-positioned-menu"
        aria-labelledby="demo-positioned-button"
        open={open}
        onClose={(e) => setOpen(false)}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
      >
        <MenuItem>Profile</MenuItem>
        <MenuItem>My account</MenuItem>
        <MenuItem>Logout</MenuItem>
      </Menu>
    </AppBar>
  )
}

export default Navbar
