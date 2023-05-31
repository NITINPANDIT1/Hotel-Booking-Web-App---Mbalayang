import { Box, Input, Button, Stack, IconButton } from '@chakra-ui/react';
import { useState } from 'react';
import { SearchIcon } from '@chakra-ui/icons';

const SearchBox = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [checkInDate, setCheckInDate] = useState('');
  const [guests, setGuests] = useState('');

  const handleSearch = () => {
   
    console.log('Search term:', searchTerm);
    console.log('Check-in date:', checkInDate);
    console.log('Number of guests:', guests);
   
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    if (name === 'searchTerm') {
      setSearchTerm(value);
    } else if (name === 'checkInDate') {
      setCheckInDate(value);
    } else if (name === 'guests') {
      setGuests(value);
    }
  };

  return (
    <Box marginTop={"300"} p={4} bg="gray.100" borderRadius="md" boxShadow="md" display="flex" alignItems="center" alignSelf="center">
      <Stack direction="row" spacing={2} alignItems="center">
        
        <Input
          name="searchTerm"
          type={"text"}
          color={"teal"}
          placeholder="Search destination"
          _placeholder={{ color: 'inherit' }}
          value={searchTerm}
          onChange={handleInputChange}
        />
        <Input
          type={"date"}
          name="checkInDate"
          color="teal"
          placeholder="Check In Date"
          _placeholder={{ color: 'inherit' }}
          value={checkInDate}
          onChange={handleInputChange}
        />
        <Input
         type={"number"}
          name="guests"
          color="teal"
          placeholder="Add Guests"
          _placeholder={{ color: 'inherit' }}
        //   _placeholder={{ opacity: 0.4, color: 'inherit' }}
          value={guests}
          onChange={handleInputChange}
        />
        <IconButton
          aria-label="Search"
          icon={<SearchIcon />}
          colorScheme="teal"
          onClick={handleSearch}
        />
        
      </Stack>
    </Box>
  );
};

export default SearchBox;
