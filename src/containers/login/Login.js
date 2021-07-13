import React from 'react';
import './Login.css';
import logo from '../../assets/logo.png'
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import {Link} from 'react-router-dom'




function Login() {
  return (
      <Grid className={"login-container"} container spacing={0}>
          <Grid className={"photo-container"} item xs={8}>
          <h1 className={"photo-h1"}>Welcome!</h1>
          </Grid>
          <Grid className={"form-container"} item xs={4}>
            <img className={"form-logo-img"} src={logo} alt="Beliveo" />
            <form className={"form-inputs"} noValidate autoComplete="off">
                <TextField
                    id="standard-full-width"
                    style={{ margin: 8 }}
                    placeholder="Username"
                    fullWidth
                    margin="normal"
                    InputLabelProps={{
                        shrink: true,
                    }}
                />
                <br />
                <TextField
                    id="standard-full-width"
                    style={{ margin: 8, marginTop: 30 }}
                    placeholder="Password"
                    fullWidth
                    type="password"
                    margin="normal"
                    InputLabelProps={{
                        shrink: true,
                    }}
                />
                <div className={"form-btn-container"}>
                    <Link to={'/'}><Button 
                        className={"form-button"} 
                        variant="contained" 
                        color="primary"  
                        >
                        Login
                    </Button></Link>
                </div>
            </form>
          </Grid>
      </Grid>
  );
}

export default Login;