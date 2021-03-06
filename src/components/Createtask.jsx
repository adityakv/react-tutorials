import React from 'react';
import { Modal } from '@mui/material';

import TaskModalContent from './TaskModalContent';


function CreateTask({
  open,
  openAction,
  createTask,
}) {
  return (
    <Modal
      open={open}
      onClose={() => {openAction(false)}}
    >
      <TaskModalContent onClick={createTask}/>
    </Modal>
  )
}

export default CreateTask;
