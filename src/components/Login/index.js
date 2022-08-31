import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import {useState} from 'react';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };
  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  return (
    <Box p={10}>
      <TextField
        id="outlined-name"
        label="Email"
        value={email}
        onChange={handleEmailChange}
        fullWidth
      />
      <TextField
        id="outlined-name"
        label="Password"
        value={password}
        onChange={handlePasswordChange}
        fullWidth
      />
    </Box>
  );
}