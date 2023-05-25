import { useEffect, useState } from "react";
import { Input,Center, Heading, Button, FormControl, FormErrorMessage, FormLabel } from "@chakra-ui/react";
// import { useNavigate } from "react-router-dom";

function PaymentPage() {
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

    // Check if there are any errors
    if (Object.keys(errors).length === 0) {
      console.log("Form submitted successfully!");

      // Redirect to the thank you page
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
    <Center maxW="container.sm"
      boxShadow='md'
      mt='30px'
      rounded='md'
      backgroundImage="url('https://img.freepik.com/free-photo/pouch-map-toy-airplane-blue-background-with-space-writing-text_23-2147958180.jpg?size=626&ext=jpg&ga=GA1.1.144004436.1678856088&semt=ais')"
      backgroundSize="cover"
      backgroundPosition="center"
      minHeight="90vh"
      maxWidth={"90%"}
      margin="auto"
      borderBottomRadius="30%"
      display={"flex"}
      flexDirection="column">
      <Heading mb='50px'>Make Your Payment Here </Heading>

 

      <form onSubmit={handleSubmit}>
        <FormControl isInvalid={formErrors.cardNumber} isRequired mt='10px'>
          <FormLabel>Card Number</FormLabel>
          <Input
          w='300px'
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
        <Button type="submit" colorScheme={'orange'} mt='20px' mb='30px'>Submit</Button>
      </form>
    </Center>
  );
}

export default PaymentPage;
