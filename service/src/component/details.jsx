import React from 'react';
import { Grid, GridItem, VStack, Heading, Text, UnorderedList, ListItem, Box } from '@chakra-ui/react';
import { useSelector } from 'react-redux';

const HotelDetailsCard = () => {
  const reviews = []; // Assuming reviews data is fetched from an API or database
  let data = useSelector((data) => data.detailsPageData);
  const amenities = data.facilities;
  console.log(data);
  return (
    <Grid templateColumns="repeat(2, minmax(0, 1fr))" gap={8} p={4}>
      <GridItem colSpan={1}>
        <img src={data.image} alt={data.hotel_name} style={{ maxWidth: '100%' }} />
      </GridItem>

      <GridItem colSpan={1}>
        <VStack align="start" spacing={4} w="100%">
          <Heading fontSize="3xl">{data.hotel_name}</Heading>
          <Text fontSize="xl" color="gray.500">Location</Text>

          <Box w="100%">
            <Heading fontSize="xl">Description</Heading>
            <Text color="gray.500">
              {data.overview}
            </Text>
          </Box>

          <Box w="100%">
            <Heading fontSize="xl">Amenities</Heading>
            <UnorderedList>
              {amenities.map((amenity, index) => (
                <ListItem key={index}>{amenity}</ListItem>
              ))}
            </UnorderedList>
          </Box>

          <Box w="100%">
            <Heading fontSize="xl">Price</Heading>
            <Text color="green.500" fontSize="2xl">INR {data.price_inr} per night</Text>
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
  );
};

export default HotelDetailsCard;
