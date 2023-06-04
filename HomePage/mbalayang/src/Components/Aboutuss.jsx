import React from 'react'
import {Stack, Box,Heading ,Card, CardHeader, CardBody, Button ,CardFooter,Text,Image, Grid } from '@chakra-ui/react'


const Aboutuss = () => {
  return (
    <>
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
      With a passion for exploration and a commitment to excellence, we strive to provide our clients with the highest level of service and personalized attention. Whether you're planning a relaxing beach getaway, an adventurous trek through the mountains, or a cultural immersion in a vibrant city, our team of travel experts is here to turn your dreams into reality.
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

<Card
border={"none"}
marginTop={"30"}
direction={{ base: 'column', sm: 'row' }}
overflow='hidden'
variant='outline'
width={"70%"}
marginLeft={"15%"}
>
<Image
objectFit='cover'
borderBottomRadius={"20%"}
 minWidth={"40%"}
maxW={{ base: '100%', sm: '200px' }}
src="https://static1.thetravelimages.com/wordpress/wp-content/uploads/2022/08/Goreme-town-in-CappadociaTurkey.jpg"alt='Caffe Latte'
/>
<Stack alignItems={"start"} >
<CardBody textAlign={"left"}>
  <Heading size='xl'>OUR  SERVICE</Heading>
  <Heading size='sm'>WHY CHOOSE US</Heading>
  <Text py='2'>
  We understand that every traveler is unique, and we take pride in crafting tailor-made itineraries that cater to your specific interests and preferences. From arranging flights and accommodations to organizing immersive tours and activities, we handle every aspect of your journey with meticulous attention to detail. With MBALAYANG Travel Agency, you can embark on a worry-free adventure, knowing that every aspect of your trip is expertly planned and executed.
  </Text>
</CardBody>

<CardFooter>
  <Button variant='solid' colorScheme='orange' margin={"auto"}>
  See More 
  </Button>
</CardFooter>
</Stack>



</Card>
</>

   
  )
}

export default Aboutuss