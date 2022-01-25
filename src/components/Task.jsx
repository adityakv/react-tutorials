import React from 'react';
import { Box, 
  TextField, 
  Typography, 
  Button,
  IconButton,
  Card,
  CardContent
} from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import DoneIcon from '@mui/icons-material/Done';

const buttonStyle = {
  borderRadius: 0,
  width: '20px'
}

function Task() {
  const handleDelete = () => {
    console.log('Delete');
  }

  return (
    <Card sx={{display: 'flex', justifyContent: 'space-between', mt: '20px'}}>
      <CardContent sx={{flexGrow: '1'}}>
        <Typography variant="h6">Your Title</Typography>
        <Typography variant="body">Task body </Typography>
      </CardContent>
      <Box sx={{display: 'flex', flexDirection: 'column'}}>
        <Button fullWidth color="primary" variant="contained" onClick={() => {handleDelete(true)}} disableElevation sx={buttonStyle}>
          <DoneIcon />
        </Button>
        <Button fullWidth color="secondary" variant="contained" onClick={() => {handleDelete(true)}} disableElevation sx={buttonStyle}>
          <EditIcon />
        </Button>
        <Button fullWidth color="error" variant="contained" onClick={() => {handleDelete(true)}} disableElevation sx={buttonStyle}>
          <DeleteIcon />
        </Button>
      </Box>
    </Card>
  )
}

export default Task;