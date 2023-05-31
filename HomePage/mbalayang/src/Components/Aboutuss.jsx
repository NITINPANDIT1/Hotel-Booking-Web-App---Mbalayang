import React from 'react'
import {Stack, Box,Heading ,Card, CardHeader, CardBody, Button ,CardFooter,Text,Image, Grid } from '@chakra-ui/react'


const Aboutuss = () => {
  return (
    
    <Card
    border={"none"}
    marginTop={"30"}
  direction={{ base: 'column', sm: 'row' }}
  overflow='hidden'
  variant='outline'
  width={"70%"}
  marginLeft={"15%"}
>
  
  <Stack alignItems={"start"} >
    <CardBody textAlign={"left"}>
      <Heading size='xl'>ABOUT US</Heading>
      <Heading size='sm'>MBALAYANG TRAVEL AGENCY</Heading>
      <Text py='2'>
        Caffè latte is a coffee beverage of Italian origin made with espresso
        and steamed milk.Caffè latte is a coffee beverage of Italian origin made with espresso
        and steamed milk.Caffè latte is a coffee beverage of Italian origin made with espresso
        and steamed milk.
      </Text>
    </CardBody>

    <CardFooter>
      <Button variant='solid' colorScheme='orange' margin={"auto"}>
      See More 
      </Button>
    </CardFooter>
  </Stack>

  <Image
    objectFit='cover'
    borderBottomRadius={"20%"}
     minWidth={"40%"}
    maxW={{ base: '100%', sm: '200px' }}
    src="https://www.indianluxurytrains.com/wp-content/uploads/2014/04/Hawa-Mahal-Palace-Jaipur-Monuments-Of-India-1.jpg"
    alt='Caffe Latte'
  />

</Card>


   
  )
}

export default Aboutuss