import React from 'react';
import { Grid, GridItem, VStack, Heading, Text, SimpleGrid, Box, Image, Button } from '@chakra-ui/react';
import { useSelector } from 'react-redux';
import Footer from './Footer';
import { Link } from 'react-router-dom';

const HotelDetailsCard = () => {
  const reviews = []; // Assuming reviews data is fetched from an API or database
  let data = useSelector((data) => data.detailsPageData);
  const amenities = data.facilities;
  console.log(data);
  return (
    <div>
    <Grid templateColumns="repeat(2, minmax(0, 1fr))" gap={8} p={4}>
      <GridItem colSpan={1}>
        <Image src={data.image} alt={data.hotel_name} style={{ maxWidth: '100%' }} w={'100%'} h={'100%'}/>
      </GridItem>

      <GridItem colSpan={1}>
        <VStack align="start" spacing={4} w="100%">
          <Heading fontSize="3xl">{data.hotel_name}</Heading>
          <Text fontSize="xl" color="gray.500">Location</Text>

          <Box w="100%">
            <Heading fontSize="xl">Description</Heading>
            <Text color="gray.500" align={'left'}>
              {data.overview}
            </Text>
          </Box>

          <Box w="100%">
            <Heading fontSize="xl">Amenities</Heading>
            <SimpleGrid columns={4} spacing={4}>
              {amenities.map((amenity, index) => (
                <Box border={'1px'} key={index}>{amenity}</Box>
              ))}
            </SimpleGrid>
          </Box>

          <Box w="100%">
            <Heading fontSize="xl">Price</Heading>
            <Text color="green.500" fontSize="2xl">INR {data.price_inr} per night</Text>
          </Box>
          <Box w="100%">
          <Link to='/address'>
          <Button
                bg="#fb6435"
                color="white"
                >
                Book Now
            </Button>
            </Link>
          </Box>
          <Box w="100%">
            <Heading fontSize="xl">Reviews</Heading>
            {reviews.length > 0 ? (
              <Box borderWidth="1px" borderRadius="md" p={4} w="100%">
                {reviews.map((review, index) => (
                  <Text key={index} color="gray.500">
                    {/* Render review details */}
                  </Text>
                ))}
              </Box>
            ) : (
              <Box borderWidth="1px" borderRadius="md" p={4} backgroundColor="gray.100" w="100%">
                <Text color="gray.500">No reviews yet.</Text>
              </Box>
            )}
          </Box>
        </VStack>
      </GridItem>
    </Grid>
    <Footer/>
    </div>
  );
};

export default HotelDetailsCard;