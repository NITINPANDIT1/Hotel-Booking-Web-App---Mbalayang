import React, { useEffect, useState } from 'react';
import { Box, Grid, GridItem, VStack, Heading, Text, SimpleGrid, Image, Button } from '@chakra-ui/react';
import { useSelector } from 'react-redux';
import Footer from './footer';
import { Link } from 'react-router-dom';
import axios from 'axios';

const HotelDetailsCard = () => {
  useEffect(() => {
    axios
      .get('https://run.mocky.io/v3/cc3553c7-c818-4d35-9eac-61881e7e0174')
      .then((data) => {
        setReviews(data.data.reviews);
        console.log(data.data.reviews);
      });
  }, []);

  const [reviews, setReviews] = useState([]);

  let data = useSelector((data) => data.detailsPageData);
  const amenities = data.facilities;

  return (
    <Box>
      <Grid templateColumns={["repeat(1,2fr)","repeat(2, minmax(0, 1fr))"]} gap={8} p={4}>
        <GridItem colSpan={1}>
          <Image src={data.image} alt={data.hotel_name} style={{ maxWidth: '100%' }} w={'100%'} />
        </GridItem>

        <GridItem colSpan={1}>
          <VStack align="start" spacing={4} w="100%">
            <Heading fontSize="3xl">{data.hotel_name}</Heading>
            <Text fontSize="xl" color="gray.500">Location</Text>

            <Box w="100%" pb={"5%"}>
              <Heading fontSize="xl" pb={"3%"}>Description</Heading>
              <Text color="gray.500" align={'center'}>
                {data.overview}
              </Text>
            </Box>

            <Box w="100%" pb={"5%"}>
              <Heading fontSize="xl" pb={"3%"}>Amenities</Heading>
              <SimpleGrid columns={4} spacing={4}>
                {amenities.map((amenity, index) => (
                  <Box key={index} border={'1px'} p={2} borderRadius="md">{amenity}</Box>
                ))}
              </SimpleGrid>
            </Box>

            <Box w="100%">
              <Heading fontSize="xl">Price</Heading>
              <Text color="green.500" fontSize="2xl">INR {data.price_inr} per night</Text>
            </Box>

            <Box w="100%">
              <Link to='/address'>
                <Button bg="#fb6435" color="white">
                  Book Now
                </Button>
              </Link>
            </Box>
          </VStack>
        </GridItem>
      </Grid>

      <Box mt={8} p={4}>
        <Heading fontSize="xl">Reviews</Heading>
        {reviews.length > 0 ? (
          <SimpleGrid columns={[1, 2, 3]} spacing={4}>
            {reviews.map((review, index) => (
              <Box key={index} borderWidth="1px" borderRadius="md" p={4} backgroundColor="white">
                <Text fontSize="xl" fontWeight="bold">{review.author}</Text>
                <Text color="gray.500" mt={2}>{review.date}</Text>
                <Text mt={4}>{review.review}</Text>
              </Box>
            ))}
          </SimpleGrid>
        ) : (
          <Box borderWidth="1px" borderRadius="md" p={4} backgroundColor="gray.100">
            <Text color="gray.500">No reviews yet.</Text>
          </Box>
        )}
      </Box>

      <Footer />
    </Box>
  );
};

export default HotelDetailsCard;
