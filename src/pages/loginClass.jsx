import React, { useState } from 'react';
import { connect, useDispatch } from 'react-redux';
import { Box, 
  Container, 
  TextField, 
  Typography, 
  Paper, 
  Button } from '@mui/material';

import { login, loginUser } from '../redux/actions';

class Login extends React.Component {
  // const [username, setUsername] = useState('');
  // const [password, setPassword] = useState('');
  // const dispatch = useDispatch();
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
    }
  }

  handleInput = (e) => {
    console.log(this.props.stateUsername)
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  render() {
    return (
      <Container maxWidth="sm" >
        <Paper sx={{padding: '30px', position: 'relative', top: '100px'}}>
        <Box
          component="form"
          sx={{
            '& .MuiTextField-root': { 'marginBottom': '20px' },
          }}
          noValidate
          autoComplete="off"
        >
          <Typography variant="h6" textAlign="center" color="primary" marginBottom="20px">
            Sign in to access your todos
          </Typography>
          <div>
            <TextField
              required
              fullWidth
              id="username"
              label="Username"
              placeholder="Enter username or email"
              value={this.state.username}
              name="username"
              onChange={this.handleInput}
            />
            <TextField
              id="outlined-disabled"
              required
              fullWidth
              label="password"
              type="password"
              placeholder="Password"
              name="password"
              value={this.state.password}
              onChange={this.handleInput}
            />
          </div>
          <Button onClick={() => this.props.login(this.state.username, this.state.password)} variant="contained" fullWidth>Login</Button>
        </Box>
        </Paper>
      </Container>
    )
  }
}

const reduxStateToProps = (state) => {
  return {
    stateUsername: state.username,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    login: (username, password) => dispatch(login(username, password))
  }
}

export default connect(reduxStateToProps, mapDispatchToProps)(Login);