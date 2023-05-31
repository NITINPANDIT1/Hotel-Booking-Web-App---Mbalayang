import {
    FormControl,
    FormLabel,
    HStack,
    InputGroup,
    InputRightElement,
    Heading,
    Input,
    Button,
    FormHelperText,
    FormErrorMessage,
  } from "@chakra-ui/react";
  import React from "react";
  import {  useNavigate } from "react-router-dom";
  import video1 from "../assets/video4.mp4";
  import { useState } from "react";
  import axios from "axios";
  import './SignUp.css'

  
  const SignUp = () => {
    const [show, setShow] = React.useState(false);
    const navigate = useNavigate();
    const [input, setInput] = useState("");
    const isError = input === "";
    const [state, setState] = useState({
      name: "",
      username: "",
      email: "",
      password: "",
    });
    const handleClick = () => setShow(!show);
    const handleChange = (e) => {
      setState({ ...state, [e.target.name]: e.target.value });
    };
  
    const handleSubmit = (e) => {
      e.preventDefault();
      if (
        state.name.length != 0 &&
        state.username.length != 0 &&
        state.email.length != 0 &&
        state.password.length > 6
      ) {
        axios.post(`http://localhost:8080/users`, state).then((res) => {
          console.log(res.data);
          navigate("/login");
        });
      } else {
        alert("All fields are compulsory");
      }
    };
  
    return (
        
      <div className="mainLogin">
    
        <div className="overlayLogin"></div>
        <video className="videoLogin" src={video1} autoPlay muted loop />
        <div className="containerLogin">
          <form className="formLogin" onSubmit={handleSubmit}>
            <Heading as="h4" size="lg">
              Sign up
            </Heading>
            &nbsp;&nbsp;
            <HStack>
              <FormControl>
                <FormLabel>Name</FormLabel>
                <Input
                  name="name"
                  placeholder="Enter Name"
                  onChange={handleChange}
                />
              </FormControl>
              <FormControl>
                <FormLabel>UserName</FormLabel>
                <Input
                  placeholder="Enter UserName"
                  name="username"
                  onChange={handleChange}
                />
              </FormControl>
            </HStack>
            &nbsp;
            <FormControl>
              <FormLabel>Email</FormLabel>
              <Input
                name="email"
                type="email"
                // value={input}
                placeholder="abc@gmail.com"
                onChange={handleChange}
              />
              {!isError ? (
                <FormHelperText>
                  Enter the email you'd like to receive the newsletter on.
                </FormHelperText>
              ) : (
                <FormErrorMessage color="black">
                  Email is required.
                </FormErrorMessage>
              )}
            </FormControl>
            &nbsp;
            <FormLabel>Password</FormLabel>
            <FormControl isRequired>
              <InputGroup size="md">
                <Input
                  name="password"
                  pr="4.5rem"
                  type={show ? "text" : "password"}
                  placeholder="6+characters"
                  onChange={handleChange}
                />
                <InputRightElement width="4.5rem">
                  <Button h="1.75rem" size="sm" onClick={handleClick}>
                    {show ? "Hide" : "Show"}
                  </Button>
                </InputRightElement>
              </InputGroup>
            </FormControl>
            <input type="submit" value={"Signup"} className="signbtn" />
          </form>
        </div>
      </div>
    );
  };
  
  export default SignUp;