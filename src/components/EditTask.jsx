import React from 'react';
import {
  Modal
} from '@mui/material';

import TaskModalContent from './TaskModalContent';

function EditTask({
  open,
  openAction,
  editTask,
  title,
  body
}) {
  return (
    <Modal
      open={open}
      onClose={() => {openAction(false)}}
    >
      <TaskModalContent onClick={editTask} title={title} body={body} isEditMode={true}/>
    </Modal>
  )
}

export default EditTask;
