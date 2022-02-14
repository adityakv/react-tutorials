import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
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

import { createTask, logout } from '../redux/actions';

import CreateTask from '../components/CreateTask';
import Task from '../components/Task';

function Todo() {
  const [search, setSearch] = useState('');
  const [isOpen, setIsOpen] = useState(false);
  const todos = useSelector(state => state.todos);
  const username = useSelector(state => state.userName);
  const [filtredTodos, setFilterdTodos] = useState(todos);
  const dispatch = useDispatch();

  const handleCreateTask = (title, body) => {
    setIsOpen(false)
    dispatch(createTask(Math.random().toString(16).slice(2), title, body));
  }

  useEffect(() => {
    if (search.length < 2) setFilterdTodos(...todos);

    let filterTodo = [];

    todos.forEach(todo => {
      if (todo.title.toLowerCase().includes(search.toLowerCase())) {
        filterTodo.push(todo);
      } else if (todo.body.toLowerCase().includes(search.toLowerCase())) {
        filterTodo.push(todo);
      }
    });

    setFilterdTodos(filterTodo);
  }, [todos, search])

  const onSearchClick = () => {
    if (search.length < 2) setFilterdTodos(...todos);

    let filterTodo = [];

    todos.forEach(todo => {
      if (todo.title.toLowerCase().includes(search.toLowerCase())) {
        filterTodo.push(todo);
      } else if (todo.body.toLowerCase().includes(search.toLowerCase())) {
        filterTodo.push(todo);
      }
    });

    setFilterdTodos(filterTodo);
  }

  return (
    <Container maxWidth="lg">
      <Box sx={{position: 'relative', top: '100px', textTransform: 'capitalize', display: 'flex', justifyContent: 'space-between'}}>
        <Typography variant="h4">Welcome: { username }</Typography>
        <Button variant='text' size='large' onClick={() => {dispatch(logout())}}>Logout</Button>
      </Box>
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
        {
          filtredTodos.map(task => (
            <Task task={task} key={task.id}/>
          ))
        }
        <CreateTask open={isOpen} openAction={setIsOpen} createTask={handleCreateTask}/>
      </Paper>
    </Container>
  )
}

export default Todo;