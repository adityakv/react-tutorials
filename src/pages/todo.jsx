import React, {useState} from 'react';
import { Box, 
  Container, 
  TextField, 
  Typography, 
  Paper, 
  Button,
  InputAdornment,
  IconButton,
  OutlinedInput,
} from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import SearchIcon from '@mui/icons-material/Search';

import CreateTask from '../components/Createtask';
import Task from '../components/Task';

function Todo() {
  const [search, setSearch] = useState('');
  const [isOpen, setIsOpen] = useState(false);
  const onSearchClick = () => {
    console.log(search);
  }

  return (
    <Container maxWidth="sm">
      <Paper sx={{padding: '30px', position: 'relative', top: '100px'}}>
        <OutlinedInput 
          fullWidth
          placeholder="Search the todos"
          value={search}
          id="search"
          onChange={(e) => {setSearch(e.target.value)}}
          endAdornment={
            <InputAdornment position="end">
              <IconButton
                aria-label="search"
                onClick={onSearchClick}
                edge="end"
              >
                <SearchIcon />
              </IconButton>
            </InputAdornment>
          }
          sx={{'marginBottom': '10px'}}
        />
        <Button fullWidth color="primary" variant="contained" onClick={() => {setIsOpen(true)}}>
          <AddIcon /> 
        </Button>
        <Task />
        <CreateTask open={isOpen} />
      </Paper>
    </Container>
  )
}

export default Todo;