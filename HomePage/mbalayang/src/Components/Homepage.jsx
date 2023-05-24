import { Box } from '@chakra-ui/react'
import React from 'react'
import Navbar from './Navbar'
import SearchBox from './SearchBox'

const Homepage = () => {


  return (
    <Box 
      backgroundImage="url('https://www.rd.com/wp-content/uploads/2023/01/GettyImages-564604962.jpg?resize=768')"
      backgroundSize="cover"
      backgroundPosition="center"
      minHeight="90vh"
      maxWidth={"90%"}
      margin="auto"
      borderBottomRadius="30%"
      display={"flex"}
      flexDirection="column"
>
   
    <Navbar/>
    <SearchBox />
    </Box>
  )
}

export default Homepage