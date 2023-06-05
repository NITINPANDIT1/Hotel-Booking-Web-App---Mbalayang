import { useState } from "react";
import { Input, Heading, Button, FormControl, Box, FormErrorMessage, FormLabel } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import Navbar from "./Navbar";
// import { useNavigate } from "react-router-dom";

function PaymentPage() {
  const navigate = useNavigate();
  const [cardNumber, setCardNumber] = useState("");
  const [cardHolder, setCardHolder] = useState("");
  const [expiryDate, setExpiryDate] = useState("");
  const [cvv, setCvv] = useState("");
  const [formErrors, setFormErrors] = useState({});

  // Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    // Perform form validation
    const errors = {};
    if (!cardNumber) {
      errors.cardNumber = "Card number is required";
    } else if (cardNumber.length !== 12) {
      errors.cardNumber = "Card number must be 12 digits";
    }
    if (!cardHolder) {
      errors.cardHolder = "Card holder name is required";
    }
    if (!expiryDate) {
      errors.expiryDate = "Expiry date is required";
    }
    if (!cvv) {
      errors.cvv = "CVV is required";
    } else if (cvv.length !== 3) {
      errors.cvv = "CVV must be 3 digits";
    }


    if (Object.keys(errors).length === 0) {
      console.log("Form submitted successfully!");
      navigate("/loading");

      setCardNumber("");
      setCardHolder("");
      setExpiryDate("");
      setCvv("");
      setFormErrors({});
    } else {
      setFormErrors(errors);
    }
  };

  return (
    <Box backgroundImage="url('https://i.pinimg.com/564x/d1/88/c8/d188c8076eada2a6514da6a96aadb20b.jpg')"
      backgroundSize="cover"
      backgroundPosition="center"
      margin="auto"
      display={"flex"}
      flexDirection="column"
      alignItems={'center'}
      justifyContent='center'
    >
        <Navbar/>
      <Box maxW="container.sm"
        m='127px'
        boxShadow="md"
        rounded="md"
        bg='orange.50'
        width='600px'
        p='25px'
        display={"flex"}
        flexDirection="column"
      >
        <Heading mt='20px'mb='35px' color={'orange'} >Make Your Payment Here </Heading>
        <form onSubmit={handleSubmit}>
          <FormControl isInvalid={formErrors.cardNumber} isRequired mt='10px'>
            <FormLabel>Card Number</FormLabel>
            <Input
              type="text"
              borderColor="blackAlpha.500"
              id="cardNumber"
              value={cardNumber}
              onChange={(e) => setCardNumber(e.target.value)}
              placeholder="1234 5678 9012 3456"
              _placeholder={{ color: "grey" }}
              color="black"
              bg="transparent"
              _webkitAutofill={{ backgroundColor: "transparent important" }}
            />
            <FormErrorMessage>{formErrors.cardNumber}</FormErrorMessage>
          </FormControl>

          <FormControl isInvalid={formErrors.cardHolder} isRequired mt='10px'>
            <FormLabel>Card Holder</FormLabel>
            <Input
              type="text"
              borderColor="blackAlpha.500"
              id="cardHolder"
              value={cardHolder}
              onChange={(e) => setCardHolder(e.target.value)}
              placeholder="John Doe"
              _placeholder={{ color: "grey" }}
              color="black"
              autoComplete="off"
            />
            <FormErrorMessage>{formErrors.cardHolder}</FormErrorMessage>
          </FormControl>

          <FormControl isInvalid={formErrors.expiryDate} isRequired mt='10px'>
            <FormLabel>Expiry Date</FormLabel>
            <Input
              type="text"
              borderColor="blackAlpha.500"
              id="expiryDate"
              value={expiryDate}
              onChange={(e) => setExpiryDate(e.target.value)}
              placeholder="MM/YY"
              _placeholder={{ color: "grey" }}
              color="black"
              autoComplete="off"
            />
            <FormErrorMessage>{formErrors.expiryDate}</FormErrorMessage>
          </FormControl>

          <FormControl isInvalid={formErrors.cvv} mt='10px' isRequired>
            <FormLabel>CVV</FormLabel>
            <Input
              type="text"
              borderColor="blackAlpha.500"
              id="cvv"
              value={cvv}
              onChange={(e) => setCvv(e.target.value)}
              placeholder="123"
              _placeholder={{ color: "grey" }}
              color="black"
              autoComplete="off"
              maxLength={3}
            />
            <FormErrorMessage>{formErrors.cvv}</FormErrorMessage>
          </FormControl>
          <Button type="submit" colorScheme={'orange'} mt='50px'>Submit</Button>
        </form>
      </Box>
    </Box>

  );
}

export default PaymentPage;