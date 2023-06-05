import { useState } from "react";
import { Link } from "react-router-dom";
import {
  FormControl,
  FormLabel,
  Input,
  Heading,
  Flex,
  Box,
  Button,
  FormErrorMessage,
} from "@chakra-ui/react";
import Navbar from "./Navbar";
import Footer from "./Footer";

function AddressPage() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [dateOfBirth, setDateOfBirth] = useState("");
  const [email, setEmail] = useState("");
  const [address1, setAddress1] = useState("");
  const [address2, setAddress2] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [zip, setZip] = useState("");
  const [formErrors, setFormErrors] = useState({});

  const handleSubmit = (e) => {
    e.preventDefault();

    const errors = {};
    if (!firstName) {
      errors.firstName = "First Name is required";
    }
    if (!lastName) {
      errors.lastName = "Last Name is required";
    }
    if (!phoneNumber) {
      errors.phoneNumber = "Phone Number is required";
    }
    if (!email) {
      errors.email = "Email is required";
    }
    if (!address1) {
      errors.address1 = "Address is required";
    }
    if (!city) {
      errors.city = "City is required";
    }
    if (!state) {
      errors.state = "State is required";
    }
    if (!zip) {
      errors.zip = "ZIP Code is required";
    }

    // Set form errors
    setFormErrors(errors);

    if (Object.keys(errors).length === 0) {
      console.log("Form submitted successfully");
      setFirstName("");
      setLastName("");
      setPhoneNumber("");
      setDateOfBirth("");
      setEmail("");
      setAddress1("");
      setAddress2("");
      setCity("");
      setState("");
      setZip("");
      setFormErrors({});
    } else {
      setFormErrors(errors);
    }
  };

  // Check if all mandatory fields are filled
  const isAllFieldsFilled =
    firstName &&
    lastName &&
    phoneNumber &&
    email &&
    address1 &&
    city &&
    state &&
    zip;

  return (
    <>
    <Box backgroundImage="url('https://i.pinimg.com/564x/55/e2/e9/55e2e9928218217a11358e5557461f3e.jpg')"
      backgroundSize="cover"
      backgroundPosition=''
      // minHeight="90vh"
      // maxWidth={"90%"}
      // borderBottomRadius="30%"
      // maxWidth={"100%"}
      margin="auto"
      display={"block"}
      alignItems={'center'}
      justifyContent='center'>
     <Navbar/>
      <Box maxW="container.sm"
        boxShadow="md"
        mt="30px"
        mb="30px"
        rounded="md"
        bg='orange.50'
        width='600px'
        p='25px'
        display={"flex"}
        flexDirection="column"
        margin={"auto"}
      >
        
        <Heading color={'orange'}
          mb='20px'>Traveller Address </Heading>
        <form onSubmit={handleSubmit}>
          <Flex mt='20px'>
            <FormControl isRequired mb="20px" isInvalid={!!formErrors.firstName}>
              <FormLabel color={"black"}>First Name</FormLabel>
              <Input
                type="text"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                placeholder="First Name"
                _placeholder={{ color: "grey" }}
                borderColor="blackAlpha.500"
                color="black"
                bg="transparent"
                autoComplete='off'
              />
              <FormErrorMessage>{formErrors.firstName}</FormErrorMessage>
            </FormControl>
            <FormControl mb="10px" isRequired isInvalid={!!formErrors.lastName}>
              <FormLabel color={"black"}>Last Name</FormLabel>
              <Input
                type="text"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
                placeholder="Last Name"
                _placeholder={{ color: "grey" }}
                borderColor="blackAlpha.500"
                color="black"
                bg="transparent"
                _webkitAutofill={{ backgroundColor: "transparent important" }}
              />
              <FormErrorMessage>{formErrors.lastName}</FormErrorMessage>
            </FormControl>
          </Flex>
          <Flex>
            <FormControl
              mb="10px"
              isRequired
              isInvalid={!!formErrors.phoneNumber}
            >
              <FormLabel color={"black"}>Phone Number</FormLabel>
              <Input
                type="number"
                value={phoneNumber}
                onChange={(e) => setPhoneNumber(e.target.value)}
                placeholder="Phone Number"
                _placeholder={{ color: "grey" }}
                borderColor="blackAlpha.500"
                color="black"
                bg="transparent"
                _webkitAutofill={{ backgroundColor: "transparent important" }}
              />
              <FormErrorMessage>{formErrors.phoneNumber}</FormErrorMessage>
            </FormControl>

            <FormControl isInvalid={!!formErrors.dateOfBirth}>
              <FormLabel color={"black"}>Date of Birth</FormLabel>
              <Input
                type="date"
                value={dateOfBirth}
                onChange={(e) => setDateOfBirth(e.target.value)}
                placeholder="Date of Birth"
                _placeholder={{ color: "grey" }}
                borderColor="blackAlpha.500"
                color="black"
                bg="transparent"
                _webkitAutofill={{ backgroundColor: "transparent important" }}
              />
              <FormErrorMessage>{formErrors.dateOfBirth}</FormErrorMessage>
            </FormControl>
          </Flex>

          <FormControl mb="10px" isRequired isInvalid={!!formErrors.email}>
            <FormLabel color={"black"}>Email</FormLabel>
            <Input
              type="text"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Email"
              _placeholder={{ color: "grey" }}
              borderColor="blackAlpha.500"
              color="black"
              bg="transparent"
              _webkitAutofill={{ backgroundColor: "transparent important" }}
            />
            <FormErrorMessage>{formErrors.email}</FormErrorMessage>
          </FormControl>

          <FormControl mb="10px" isRequired isInvalid={!!formErrors.address1}>
            <FormLabel color={"black"}>Address</FormLabel>
            <Input
              type="text"
              value={address1}
              onChange={(e) => setAddress1(e.target.value)}
              placeholder="H.No"
              _placeholder={{ color: "grey" }}
              borderColor="blackAlpha.500"
              color="black"
              bg="transparent"
              _webkitAutofill={{ backgroundColor: "transparent important" }}
            />
            <FormErrorMessage>{formErrors.address1}</FormErrorMessage>
          </FormControl>

          <FormControl mb="10px">
            <FormLabel color={"black"}>Street</FormLabel>
            <Input
              type="text"
              value={address2}
              onChange={(e) => setAddress2(e.target.value)}
              placeholder="Street"
              _placeholder={{ color: "grey" }}
              borderColor="blackAlpha.500"
              color="black"
              bg="transparent"
              _webkitAutofill={{ backgroundColor: "transparent important" }}
            />
          </FormControl>

          <Flex>
            <FormControl mb="10px" isRequired isInvalid={!!formErrors.city}>
              <FormLabel color={"black"}>City</FormLabel>
              <Input
                type="text"
                value={city}
                onChange={(e) => setCity(e.target.value)}
                placeholder="City"
                _placeholder={{ color: "grey" }}
                borderColor="blackAlpha.500"
                color="black"
                bg="transparent"
                _webkitAutofill={{ backgroundColor: "transparent important" }}
              />
              <FormErrorMessage>{formErrors.city}</FormErrorMessage>
            </FormControl>
            <FormControl mb="10px" isRequired isInvalid={!!formErrors.state}>
              <FormLabel color={"black"}>State</FormLabel>
              <Input
                type="text"
                value={state}
                onChange={(e) => setState(e.target.value)}
                placeholder="State"
                _placeholder={{ color: "grey" }}
                borderColor="blackAlpha.500"
                color="black"
                bg="transparent"
                _webkitAutofill={{ backgroundColor: "transparent important" }}
              />
              <FormErrorMessage>{formErrors.state}</FormErrorMessage>
            </FormControl>
          </Flex>

          <FormControl mb="10px" isRequired isInvalid={!!formErrors.zip}>
            <FormLabel color={"black"}>ZIP Code</FormLabel>
            <Input
              type="text"
              value={zip}
              onChange={(e) => setZip(e.target.value)}
              placeholder="Zip Code"
              _placeholder={{ color: "grey" }}
              borderColor="blackAlpha.500"
              color="black"
              bg="transparent"
              _webkitAutofill={{ backgroundColor: "transparent important" }}
            />
            <FormErrorMessage>{formErrors.zip}</FormErrorMessage>
          </FormControl>

          <Link to={isAllFieldsFilled ? "/payment" : "#"}>
            <Button
              mt="20px"
              type="submit"
              colorScheme="orange"
              isDisabled={!isAllFieldsFilled}
            >
              Submit
            </Button>
          </Link>
        </form>
      </Box>
      <Footer/>
    </Box>
    </>
  );
}

export default AddressPage;