import React from "react";
import { Button } from "@mui/material";
import { 
    FormControl,
    InputLabel,
    Input,
    FormHelperText
 } from "@mui/material";

function SignIn() {
 return (
    <form action="">
        <h2>Marketplace</h2>
        <h3>Sign in</h3>
        <div className="top-row">
            <FormControl>
              <InputLabel htmlFor="email-input">Email address</InputLabel>
              <Input id="email-input" aria-describedby="enter your email" />
              <FormHelperText id="email-helper-text">We'll never share your email.</FormHelperText>
            </FormControl>
        </div>
        <FormControl>
          <InputLabel htmlFor="password-input">Password</InputLabel>
          <Input id="password-input" aria-describedby="enter your password" />
        </FormControl>
        <div id="bottom-row">
            <Button>Submit</Button>
        </div> 
    </form>
    )
}

export default SignIn;
