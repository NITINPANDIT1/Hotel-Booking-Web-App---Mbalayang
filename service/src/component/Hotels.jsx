import { Image ,Box, Center, Heading, Text, Stack, Button, Grid } from '@chakra-ui/react';

function Hotels({ src }) {
  return (
    <Grid templateColumns='repeat(3, 1fr)' gap={6}>
      {src.map((ele) => (
        <Center py={6} key={ele.id}>
          <Box
            maxW={'445px'}
            w={'full'}
            bg={'white'}
            boxShadow={'2xl'}
            rounded={'md'}
            p={6}
            overflow={'hidden'}
          >
            <Box h={'240px'} bg={'gray.100'} mt={-6} mx={-6} mb={6} pos={'relative'}>
              <Image
                w={'100%'}
                h={'100%'}
                src={ele.image}
                alt={ele.hotel_name}
                // layout={'fill'}
              />
              <Button
                position="absolute"
                bottom="-7%"
                right="38%"
                bg="#fb6435"
                color="white"
                >
                Show More
            </Button>
            </Box>
            <Stack>
              <Text
                color={'green.500'}
                textTransform={'uppercase'}
                fontWeight={800}
                fontSize={'sm'}
                letterSpacing={1.1}
              >
                {ele.category}
              </Text>
              <Heading
                color={'gray.700'}
                fontSize={'2xl'}
                fontFamily={'body'}
              >
                {ele.hotel_name}
              </Heading>
              <Text color={'gray.500'}>
                {ele.description}
              </Text>
            </Stack>
          </Box>
        </Center>
      ))}
    </Grid>
  );
}

export default Hotels;