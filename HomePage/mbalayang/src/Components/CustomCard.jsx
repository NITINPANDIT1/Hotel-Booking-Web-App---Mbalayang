
import React from 'react';
import { Image, Box, Heading } from '@chakra-ui/react';

const CustomCard = ({ imageUrl, title }) => {
  return (

    <Box
       
      display="flex"
      flexDirection={{ base: 'column', sm: 'row' }}
      overflow="hidden"
      borderWidth="1px"
      borderRadius="md"
      // backgroundColor='red.200'
      bg="orange.500"
      color={"white"}
      h="80px"
    >
      <Image
        objectFit="cover"
        width= "37%"
        maxWidth={{ base: '37%', sm: '200px' }}
        src={imageUrl}
        alt={title}
      />
      <Box p={4}>
        <Heading size="md">{title}</Heading>
      </Box>
    </Box>
  )
}

export default CustomCard