import React from 'react';
import { Box,List,Switch,styled } from '@mui/material';
import { ListItemButton, ListItemIcon, ListItemText, ListItem } from '@mui/material';
import HomeRoundedIcon from '@mui/icons-material/HomeRounded';
import LayersIcon from '@mui/icons-material/Layers';
import GroupsIcon from '@mui/icons-material/Groups';
import StorefrontIcon from '@mui/icons-material/Storefront';
import PeopleIcon from '@mui/icons-material/People';
import SettingsIcon from '@mui/icons-material/Settings';
import PersonIcon from '@mui/icons-material/Person';
import DarkModeIcon from '@mui/icons-material/DarkMode';

const Text = styled(Box)(({theme})=>({
    position:'fixed',  //this is to fix the position of the {sidebar}  because scrolling down to the feed ---> it goes up and by dong this we have fixed this position 
    fontSize: '12px',
    '& .MuiListItemText-primary': {
      fontSize: '12px',
    },
}))

export default function Sidebar({mode ,setMode}) {
  return (
    <Box sx={{
      flex:1,
      fontSize:12,
      // padding:2,
      display:{
        xs:"none",  //for mobile view 
        sm:"block"
      }
    }}>
      <List>
        <Text>
        <ListItem disablePadding>
            <ListItemButton component="a" href="#home">
              <ListItemIcon>
                <HomeRoundedIcon fontSize='small'/>
              </ListItemIcon>
              <ListItemText primary="Homepage" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton component="a" href="#pages">
              <ListItemIcon>
                <LayersIcon fontSize='small'/>
              </ListItemIcon>
              <ListItemText primary="Pages" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton component="a" href="#groups">
              <ListItemIcon>
                <GroupsIcon fontSize='small'/>
              </ListItemIcon>
              <ListItemText primary="Groups" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton component="a" href="#marketplace">
              <ListItemIcon>
                <StorefrontIcon fontSize='small'/>
              </ListItemIcon>
              <ListItemText primary="Marketplace" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton component="a" href="#friends">
              <ListItemIcon>
                <PeopleIcon fontSize='small'/>
              </ListItemIcon>
              <ListItemText primary="Friends" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton component="a" href="#settings">
              <ListItemIcon>
                <SettingsIcon fontSize='small'/>
              </ListItemIcon>
              <ListItemText primary="Settings" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton component="a" href="#profile">
              <ListItemIcon>
                <PersonIcon fontSize='small'/>
              </ListItemIcon>
              <ListItemText primary="Profile" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton component="a" href="#light_dark_theme">
              <ListItemIcon>
                <DarkModeIcon fontSize='small'/>
              </ListItemIcon>
              <Switch onChange={e=>setMode(mode==="light" ? "dark" :"light")}/>
            </ListItemButton>
          </ListItem>
        </Text>           
      </List>
    </Box>
  )
}
