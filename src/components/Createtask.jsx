import React, { useState, useEffect } from 'react';
import { Box, 
  TextField, 
  Typography, 
  Button,
  Modal
} from '@mui/material';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  boxShadow: 24,
  p: 4,
  '& .MuiTextField-root': { 'marginBottom': '20px' }
};


function CreateTask({open}) {
  const [isOpen, setIsOpen] = useState(open);
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
  
  useEffect(() => {
    setIsOpen(open)
  }, [open])

  const createTask = () => {
    console.log('crated');
  }

  return (
    <Modal
      open={isOpen}
      onClose={() => {setIsOpen(false)}}
    >
      <Box sx={style} component="form" autoComplete="off" noValidate>
        <Typography id="modal-modal-title" variant="h6" component="h2" color="primary">
          Create your task
        </Typography>
        <div>
          <TextField
            required
            fullWidth
            id="title"
            label="Title"
            placeholder="Task Title"
            value={title}
            margin="normal"
            onChange={(e)=>{setTitle(e.target.value)}}
          />
          <TextField
            multiline
            rows={5}
            fullWidth
            id="body"
            placeholder="Task"
            value={body}
            margin="normal"
            onChange={(e)=>{setBody(e.target.value)}}
          />
        </div>
        <Button onClick={createTask} variant="contained" fullWidth>Create</Button>
      </Box>
    </Modal>
  )
}

export default CreateTask;
