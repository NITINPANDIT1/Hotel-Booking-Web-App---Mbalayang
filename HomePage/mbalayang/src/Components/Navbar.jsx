import React,{useEffect} from 'react';
import { Link } from 'react-router-dom';
import { Flex, Box, Button } from '@chakra-ui/react';


const Navbar = () => {
 
  return (
   

    <div >
    <Flex   marginLeft="10%" align="center" justify="space-between" color={"white"} padding="1rem" bg="" width={"80%"}  >
      <Box display ="flex" width="10%"  >
      <Button as={Link} to="/" variant="ghost" mx="0.2rem" colorScheme='white' >
      <h3 >MBALAYANG</h3>
        </Button>
   
        </Box>
        <Box margin={"auto"} >
        <Button as={Link} to="/signup" colorScheme='teal' variant="ghost" mx="0.5rem" textDecoration={"none"}>
          Signup
        </Button>
        <Button as={Link} to="/login" colorScheme='teal' variant="ghost" mx="0.5rem" textDecoration={"none"}>
          Login
        </Button>
        <Button as={Link} to="/services" colorScheme='teal' variant="ghost" mx="0.5rem" textDecoration={"none"}>
        Services
        </Button>
        <Button as={Link} to="/Details" colorScheme='teal' variant="ghost" mx="0.5rem" textDecoration={"none"}>
          Details
        </Button>
        {/* <Button as={Link} to="/products"  colorScheme='teal' variant="ghost" mx="0.5rem" textDecoration={"none"}>
          Products
        </Button> */}
        {/* <Button as={Link} to="/products" colorScheme='teal' variant="ghost" mx="0.5rem" textDecoration={"none"}>
          Products
        </Button> */}
      </Box>
      <Box display ="flex" width="10%">
      <Button as={Link} to="#" variant="ghost" mx="0.2rem" colorScheme='white' >
      <h5>CONTACT US</h5>
        </Button>
       
       
        </Box>
    </Flex>
    </div>
  );
};

export default Navbar;