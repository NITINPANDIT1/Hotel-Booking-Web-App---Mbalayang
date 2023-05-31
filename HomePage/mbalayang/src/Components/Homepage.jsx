import { Box,Heading ,Card, CardHeader, CardBody, Button ,CardFooter,Text,Image, Grid } from '@chakra-ui/react'
import React from 'react'
import CustomCard from './CustomCard'
import Grid8 from './Grid8'
import Navbar from './Navbar'
import SearchBox from './SearchBox'
import Aboutuss from './Aboutuss'
import Footer from './Footer'

let obj =  {
  imageUrl:'https://thumbs.dreamstime.com/z/plane-icon-red-black-colors-isolated-white-passenger-aircraft-symbol-wings-tail-presenting-fast-mean-93462216.jpg',
   title :"Kana package"
}

const Homepage = () => {


  return (
  <Box rowGap={"30"}>
    <Box 
      
      backgroundImage="url('https://images.pexels.com/photos/4476397/pexels-photo-4476397.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')"
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
    <Heading size={"2xl"} marginTop={"40"} marginBottom={"-60"} color='white'>Travel Around The World</Heading >
    <Heading size={"md"} marginTop={"40"} marginBottom={"-60"} color='white'>Enjoy our services for your trip anywhere anytime</Heading >
    <SearchBox />
    <Grid8/>

    
    </Box>
    <Card align='center' width={"70%"} margin={"auto"} border={"none"}>
  <CardHeader>
    <Heading size='xl' > Our Travel Partners</Heading>
  </CardHeader>
  <CardBody>
    <Text>View a summary of all your customers over the last monthView a summary of all your customers over the last month.</Text>
  </CardBody>
  <CardFooter  >
    {/* <Button colorScheme='blue'>View here</Button> */}
    <Grid display={"flex"} gap="1"  >
    <CustomCard imageUrl={obj.imageUrl} title={obj.title}/>
    <CustomCard imageUrl={obj.imageUrl} title={obj.title}/>
    <CustomCard imageUrl={obj.imageUrl} title={obj.title}/>
    <CustomCard imageUrl={obj.imageUrl} title={obj.title}/>
    </Grid>
  </CardFooter>
</Card>
<Aboutuss/>
<Footer/>
</Box>
  )
}

export default Homepage