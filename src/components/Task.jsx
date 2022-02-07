import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Box, 
  Typography, 
  Button,
  Card,
  CardContent
} from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import DoneIcon from '@mui/icons-material/Done';

import { deleteTask, completeTask, editTask } from '../redux/actions';
import EditTask from './EditTask';

const buttonStyle = {
  borderRadius: 0,
  width: '20px'
}

function Task( { task: { id, title, body, isDone } }) {
  const [isOpen, setIsOpen] = useState(false);

  const dispatch = useDispatch();

  const handleDelete = () => {
    dispatch(deleteTask(id));
  }

  const handleEdit = (title, body) => {
    setIsOpen(false)
    dispatch(editTask(id, title, body))
  }

  const handleCompletion = () => {
    dispatch(completeTask(id));
  }

  return (
    <>
      <Card sx={{display: 'flex', justifyContent: 'space-between', mt: '20px'}} >
        <CardContent sx={{flexGrow: '1'}}>
          <Typography variant="h6" sx={{textDecoration: isDone ? 'line-through' : 'none'}}>{ title }</Typography>
          <Typography variant="body" sx={{textDecoration: isDone ? 'line-through' : 'none'}}>{ body }</Typography>
        </CardContent>
        <Box sx={{display: 'flex', flexDirection: 'column'}}>
          <Button fullWidth color="primary" variant="contained" onClick={() => {handleCompletion(true)}} disableElevation sx={buttonStyle}>
            <DoneIcon />
          </Button>
          <Button fullWidth color="secondary" variant="contained" onClick={() => {setIsOpen(true)}} disableElevation sx={buttonStyle}>
            <EditIcon />
          </Button>
          <Button fullWidth color="error" variant="contained" onClick={() => {handleDelete(true)}} disableElevation sx={buttonStyle}>
            <DeleteIcon />
          </Button>
        </Box>
      </Card>
      <EditTask 
        isEditMode={true} 
        title={title} 
        body={body} 
        editTask={handleEdit} 
        open={isOpen}
        openAction={setIsOpen}
      />
    </>
  )
}

export default Task;