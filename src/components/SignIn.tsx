import React from "react";
import { 
    FormControl,
    InputLabel,
    Input,
    FormHelperText
 } from "@mui/material";
 
function SignIn() {
 return (
    <FormControl>
      <InputLabel htmlFor="email-input">Email address</InputLabel>
      <Input id="email-input" aria-describedby="enter your email" />
      <FormHelperText id="my-helper-text">We'll never share your email.</FormHelperText>
    </FormControl> )
}

export default SignIn;
