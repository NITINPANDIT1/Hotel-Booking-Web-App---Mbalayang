import React from 'react';
import { Link } from 'react-router-dom';
import { Flex, Box, Button } from '@chakra-ui/react';

const Navbar = () => {
  return (
    <Flex   marginLeft="10%" align="center" justify="space-between" color={"white"} padding="1rem" bg="" width={"80%"}>
      <Box display ="flex" width="10%"  >
       <h3>MBALAYANG</h3>
   
        </Box>
        <Box margin={"auto"} >
        <Button as={Link} to="/signup" colorScheme='teal' variant="ghost" mx="0.5rem" textDecoration={"none"}>
          Signup
        </Button>
        <Button as={Link} to="/login" colorScheme='teal' variant="ghost" mx="0.5rem" textDecoration={"none"}>
          Login
        </Button>
        <Button as={Link} to="/products" colorScheme='teal' variant="ghost" mx="0.5rem" textDecoration={"none"}>
          Products
        </Button>
        <Button as={Link} to="/products" colorScheme='teal' variant="ghost" mx="0.5rem" textDecoration={"none"}>
          Products
        </Button>
        <Button as={Link} to="/products"  colorScheme='teal' variant="ghost" mx="0.5rem" textDecoration={"none"}>
          Products
        </Button>
        <Button as={Link} to="/products" colorScheme='teal' variant="ghost" mx="0.5rem" textDecoration={"none"}>
          Products
        </Button>
      </Box>
      <Box display ="flex" width="10%">
       <h5>CONTACT US</h5>
   
        </Box>
    </Flex>
  );
};

export default Navbar;