import React, { useState } from 'react';
import { Box, 
  TextField, 
  Typography, 
  Button,
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

function TaskModalContent({onClick, isEditMode, title, body}) {
  const [modalTitle, setModalTitle] = useState(title ? title : '');
  const [modalBody, setModalBody] = useState(body ? body : '');

  const handleButtonClick = () => {
    onClick(modalTitle, modalBody);
  }


  return (
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
          value={modalTitle}
          margin="normal"
          onChange={(e)=>{setModalTitle(e.target.value)}}
        />
        <TextField
          multiline
          rows={5}
          fullWidth
          id="body"
          placeholder="Task"
          value={modalBody}
          margin="normal"
          onChange={(e)=>{setModalBody(e.target.value)}}
        />
      </div>
      <Button onClick={handleButtonClick} variant="contained" fullWidth>{ isEditMode ? 'Update' : 'Create' }</Button>
    </Box>
  )
}

export default TaskModalContent;