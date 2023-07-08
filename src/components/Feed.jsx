import React  from 'react';
import {Box} from '@mui/material';
import Post from './Post';
// import FavoriteIcon from '@mui/icons-material/Favorite';

export default function Feed() {

  return (
    <Box flex={4} p={2}>
      <Post/>
      <Post/>
    </Box>
  )
}
