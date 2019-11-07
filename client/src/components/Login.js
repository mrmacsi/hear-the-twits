import React from "react";
import { Button } from 'react-materialize'


const Login = () => {
  return (
    <div style={{textAlign:'center'}}>
    <br/><br/><br/><br/>
      <div>Please Login</div>
      <a href="/auth/twitter"><Button>Login With Twitter</Button></a>
    </div>
  );
};

export default Login;