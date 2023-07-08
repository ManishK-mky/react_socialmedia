import React , { useState } from "react";
import {Fab ,Avatar,Stack, TextField,Tooltip , Modal,styled, Typography,Button,ButtonGroup } from '@mui/material'
import AddIcon from '@mui/icons-material/Add';
// import { useState } from "react";
import Box from '@mui/material/Box';
import EmojiEmotionsIcon from '@mui/icons-material/EmojiEmotions';
import ImageIcon from '@mui/icons-material/Image';
import OndemandVideoIcon from '@mui/icons-material/OndemandVideo';
import PersonAddIcon from '@mui/icons-material/PersonAdd';  
import DateRangeIcon from '@mui/icons-material/DateRange';

const StyledModal = styled(Modal)({
    display:"flex",
    alignItems:"center",
    justifyContent:"center"
})

const UserBox = styled(Box)({
    display: "flex",
    alignItems: "center",
    gap: "10px",
    marginBottom: "20px",
  });

  const Add = () => {
    const [open, setOpen] = useState(false);
    return (
      <>
        <Tooltip
          onClick={(e) => setOpen(true)}
          title="Add"
          sx={{
            position: "fixed",
            bottom: 20,
            left: { xs: "calc(50% - 25px)", md: 30 },
          }}
        >
          <Fab color="primary" aria-label="add">
            <AddIcon />
          </Fab>
        </Tooltip>
        <StyledModal
            open={open}
            onClose={e=>setOpen(false)}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
            >
            <Box width={400} height={270} bgcolor={"background.default"} color={"text.primary"} p={3} borderRadius={3}> 
                <Typography fontWeight={700} color="gray" textAlign={"center"} >
                    Create Post
                </Typography> 
                <UserBox>
                    <Avatar alt="Remy Sharp" src="https://cdn.pixabay.com/photo/2020/01/21/08/11/indian-temple-4782312_640.jpg" sx={{width:30 , height:30}}/>
                    <Typography fontWeight={300} variant="span">Krishn</Typography>
                </UserBox>
                <TextField
                    sx={{width:"100%"}}
                    id="standard-multiline-static"
                    label="What's on your mind?"
                    multiline
                    rows={3}
                    // defaultValue="Default Value"
                    variant="standard"
                    />
                <Stack direction="row" gap={1} mt={2} mb={3}>
                  <EmojiEmotionsIcon color="primary"/>
                  <ImageIcon color="secondary" />
                  <OndemandVideoIcon color="success"/>
                  <PersonAddIcon color="error"/>
                </Stack>
                <ButtonGroup fullWidth variant="contained" aria-label="outlined primary button group">
                    <Button>Post</Button>
                    <Button><DateRangeIcon/></Button>
                </ButtonGroup>    
            </Box>
        </StyledModal>
        
      </>
    );
  };
  
  export default Add;