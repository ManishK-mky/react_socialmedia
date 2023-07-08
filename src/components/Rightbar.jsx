import React from 'react';
import {Divider,ListItemText,List,ListItem, Box, ImageList, Typography , ImageListItem } from '@mui/material';
import { AvatarGroup,Avatar,ListItemAvatar } from '@mui/material';


export default function Rightbar() {
  return (
    <Box sx={{
      // background:"skyblue",
      flex:2,
      padding:2,
      // position:"fixed",
      // float:"right",
      display:{
        xs:"none",  //for mobile view 
        sm:"block"
      }
      }}>
      <Box position="fixed" width={300}>
         <Typography fontWeight={200} fontSize={18}> Online Friends</Typography>
         <AvatarGroup total={10} float={"left"}>
            <Avatar alt="Remy Sharp" src="https://images.unsplash.com/photo-1554126807-6b10f6f6692a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80" />
            <Avatar alt="Travis Howard" src="https://images.unsplash.com/photo-1631947430066-48c30d57b943?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=416&q=80" />
            <Avatar alt="Cindy Baker" src="https://images.unsplash.com/photo-1541101767792-f9b2b1c4f127?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=385&q=80" />
            <Avatar alt="Baker" src="https://images.unsplash.com/photo-1561643241-9abf82d76a68?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80" />
           
          </AvatarGroup>
          <Typography fontWeight={200} fontSize={18} mt={2} mb={2}>Latest Photos</Typography>
          <ImageList sx={{ width: 210, height: 90}} rowHeight={90}  cols={3} gap={5}>
            <ImageListItem >
              <img
                src="https://cdn.pixabay.com/photo/2017/12/17/21/44/drink-3025022_1280.jpg"
                alt=""
              />
            </ImageListItem>
            <ImageListItem >
              <img
                src="https://cdn.pixabay.com/photo/2017/12/10/14/47/pizza-3010062_1280.jpg"
                alt=""
              />
            </ImageListItem>
            <ImageListItem >
              <img
                src="https://cdn.pixabay.com/photo/2017/01/11/11/33/cake-1971552_1280.jpg"
                alt=""
              />
            </ImageListItem>
          </ImageList>
          <Typography fontWeight={200} fontSize={18} mt={2}>Latest Conversation</Typography>
          <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
            <ListItem alignItems="flex-start">
              <ListItemAvatar>
                <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
              </ListItemAvatar>
              <ListItemText sx={{fontSize:"30"}}
                primary="Brunch this weekend?"
                secondary={
                  <React.Fragment>
                    <Typography
                      sx={{ display: 'inline' }}
                      component="span"
                      variant="body2"
                      color="text.primary"
                    >
                      Ali Connors
                    </Typography>
                    {" — I'll be in your neighborhood doing errands this…"}
                  </React.Fragment>
                }
              />
            </ListItem>
            <Divider variant="inset" component="li" />
            <ListItem alignItems="flex-start">
              <ListItemAvatar>
                <Avatar alt="Travis Howard" src="/static/images/avatar/2.jpg" />
              </ListItemAvatar>
              <ListItemText
                primary="Summer BBQ"
                secondary={
                  <React.Fragment>
                    <Typography
                      sx={{ display: 'inline' }}
                      component="span"
                      variant="body2"
                      color="text.primary"
                    >
                      to Scott, Alex, Jennifer
                    </Typography>
                    {" — Wish I could come, but I'm out of town this…"}
                  </React.Fragment>
                }
              />
            </ListItem>
            <Divider variant="inset" component="li" />
            <ListItem alignItems="flex-start">
              <ListItemAvatar>
                <Avatar alt="Cindy Baker" src="/static/images/avatar/3.jpg" />
              </ListItemAvatar>
              <ListItemText
                primary="Oui Oui"
                secondary={
                  <React.Fragment>
                    <Typography
                      sx={{ display: 'inline' }}
                      component="span"
                      variant="body2"
                      color="text.primary"
                    >
                      Sandra Adams
                    </Typography>
                    {' — Do you have Paris recommendations? Have you ever…'}
                  </React.Fragment>
                }
              />
            </ListItem>
          </List>
      </Box>
    </Box>
  )
}
