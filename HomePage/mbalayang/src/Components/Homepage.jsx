import { Box,Heading ,Card, CardHeader, CardBody, Button ,CardFooter,Text,Image, Grid } from '@chakra-ui/react'
import React ,{useEffect} from 'react'
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
    
    <Navbar  />
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
    <Text>Our travel partners are carefully selected to ensure exceptional experiences for our clients. With a shared passion for exploration and a commitment to quality, we collaborate with trusted airlines, hotels, tour operators, and local guides.</Text>
  </CardBody>
  <CardFooter  >
    {/* <Button colorScheme='blue'>View here</Button> */}
    <Grid display={"flex"} gap="1"  >
    <CustomCard imageUrl={"https://img.freepik.com/premium-photo/traveler-hiking-with-backpacks-ai-technology-generated-image_1112-12297.jpg?size=626&ext=jpg"} title={"Wanderlust Adventures"}/>
    <CustomCard imageUrl={"https://img.freepik.com/premium-vector/travelling-couple-logo-going-go-vacation-concept-illustration_194708-1762.jpg?w=740"} title={"Journey Mates"}/>
    <CustomCard imageUrl={"https://img.freepik.com/premium-vector/extreme-hike-wild-mountain-view-nature-mountaineering-sport-lifestyle-concept_94477-754.jpg?size=626&ext=jpg&ga=GA1.2.1864615653.1685698960&semt=ais"} title={"Globe Trek Partners"}/>
    <CustomCard imageUrl={"https://t4.ftcdn.net/jpg/05/99/31/75/240_F_599317563_PlOtCM5LHPIcd81fjEPYdRFyz80h7Asa.jpg"} title={"Explore Together"}/>
    </Grid>
  </CardFooter>
</Card>
<Aboutuss/>
<Footer/>
</Box>
  )
}

export default Homepage