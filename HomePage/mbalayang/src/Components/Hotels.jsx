// import { Image ,Box, Center, Heading, Text, Stack, Button, Grid, Flex } from '@chakra-ui/react';
// import { Link } from 'react-router-dom';
// import { useDispatch } from 'react-redux';
// import { getDetailsData } from '../Reducer/action';
// import { StarIcon } from '@chakra-ui/icons';

// function Hotels({ src }) {
//   let dispatch = useDispatch();

//   return (
//     <Grid templateColumns='repeat(3, 1fr)' gap={6}>
//       {src.length>0 && src.map((ele) => (
//         <Center py={6} key={ele.id}>
//           <Box
//             maxW={'445px'}
//             w={'full'}
//             bg={'white'}
//             boxShadow={'2xl'}
//             rounded={'md'}
//             p={6}
//             overflow={'hidden'}
//           >
//             <Box h={'240px'} bg={'gray.100'} mt={-6} mx={-6} mb={6} pos={'relative'}>
//               <Image
//                 w={'100%'}
//                 h={'100%'}
//                 src={ele.image}
//                 alt={ele.hotel_name}
//                 // layout={'fill'}
//               />
//               <Link to='/Details'>
//               <Button
//                 onClick={(e)=>{dispatch(getDetailsData(ele))}}
//                 position="absolute"
//                 bottom="-7%"
//                 right="38%"
//                 bg="#fb6435"
//                 color="white"
//                 >
//                 Show More
//             </Button>
//             </Link>
//             </Box>
//             <Stack>
//               <Text
//                 color={'green.500'}
//                 textTransform={'uppercase'}
//                 fontWeight={800}
//                 fontSize={'sm'}
//                 letterSpacing={1.1}
//               >
//                 {ele.category}
//               </Text>
//               <Heading
//                 color={'gray.700'}
//                 fontSize={'2xl'}
//                 fontFamily={'body'}
//               >
//                 {ele.hotel_name}
//               </Heading>
//               <Flex pl='39%'>
//                 <StarIcon/><StarIcon/><StarIcon/><StarIcon/><StarIcon/>
//               </Flex>
//               <Text color={'gray.500'}>
//                 {ele.description}
//               </Text>
//             </Stack>
//           </Box>
//         </Center>
//       ))}
//     </Grid>
//   );
// }

// export default Hotels;

import { Image ,Box, Center, Heading, Text, Stack, Button, Grid, Flex } from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { getDetailsData } from '../Reducer/action';
import { StarIcon } from '@chakra-ui/icons';

function Hotels({ src }) {
  let dispatch = useDispatch();

  return (
    <Grid templateColumns={["repeat(1, 1fr)","repeat(2, 1fr)","repeat(3, 1fr)"]} gap={6}>
      {src.length>0 && src.map((ele) => (
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
              <Link to='/Details'>
              <Center>
              <Button
                onClick={(e)=>{dispatch(getDetailsData(ele))}}
                position="absolute"
                bottom="-7%"
                // right="38%"
                bg="#fb6435"
                color="white"
                >
                Show More
              </Button>
              </Center>
            </Link>
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
              <Flex pl='39%'>
                <StarIcon/><StarIcon/><StarIcon/><StarIcon/><StarIcon/>
              </Flex>
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