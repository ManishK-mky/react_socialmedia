import React from 'react'
import {Card, CardMedia, CardContent, CardActions, CardHeader ,Avatar , IconButton ,Typography} from '@mui/material';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import Checkbox from '@mui/material/Checkbox';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';

export default function Post() {
  return (
    <div>
      <Card sx={{ maxWidth: 600 ,maxHeight:450, fontSize:12 ,margin:2 }}>
      <CardHeader
        avatar={
          <Avatar src="https://images.unsplash.com/photo-1600486913747-55e5470d6f40?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80" sx={{ bgcolor: "red[500]" , fontSize:12}} aria-label="recipe"/>
        }
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon fontSize='small'/>
          </IconButton>
        }
        title="Krishn"
        subheader="September 14, 2016"
      />
      <CardMedia
        component="img"
        height="240"
        image="https://images.unsplash.com/photo-1516339901601-2e1b62dc0c45?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=371&q=80"
        alt="Universe"
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary" fontSize={12}>
          This impressive paella is a perfect party dish and a fun meal to cook
          together with your guests. Add 1 cup of frozen peas along with the mussels,
          if you like.
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
        <Checkbox icon={<FavoriteBorderIcon />} checkedIcon={<FavoriteIcon sx={{color:"red"}}/>}/>
        </IconButton>
        <IconButton aria-label="share">
          <ShareIcon fontSize='small'/>
        </IconButton>
      </CardActions>
    </Card>
    <Card sx={{ maxWidth: 600 , maxHeight: 500 , fontSize:12 ,margin:2}}>
      <CardHeader
        avatar={
          <Avatar src="https://images.unsplash.com/photo-1600486913747-55e5470d6f40?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80" sx={{ bgcolor: "red[500]" , fontSize:12}} aria-label="recipe"/>
        }
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon fontSize='small'/>
          </IconButton>
        }
        title="Radhe"
        subheader="Oct. 14, 2016"
      />
      <CardMedia
        component="img"
        height="240"
        image="https://images.unsplash.com/photo-1510797215324-95aa89f43c33?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=435&q=80"
        alt="Universe"
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary" fontSize={12}>
          This impressive paella is a perfect party dish and a fun meal to cook
          together with your guests. Add 1 cup of frozen peas along with the mussels,
          if you like.
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
        <Checkbox icon={<FavoriteBorderIcon />} checkedIcon={<FavoriteIcon sx={{color:"red"}} />} />
        </IconButton>
        <IconButton aria-label="share">
          <ShareIcon fontSize='small'/>
        </IconButton>
      </CardActions>
    </Card>
    </div>
  )
}
