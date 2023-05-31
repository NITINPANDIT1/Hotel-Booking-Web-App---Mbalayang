import { useEffect, useState } from "react";
import { Box, Spinner, Text, Button } from "@chakra-ui/react";
import { Link } from "react-router-dom";

function LoadingPage() {
    const [isLoading, setIsLoading] = useState(true);
    const [isPaymentConfirmed, setIsPaymentConfirmed] = useState(false);

    useEffect(() => {
        setTimeout(() => {
            setIsLoading(false);
            setIsPaymentConfirmed(true);
        }, 3000);
    }, []);

    return (
        <Box
            display="flex"
            flexDirection="column"
            // justifyContent="center"
            // alignItems="center"
            margin={'250px auto'}
        >
            {isLoading ? (
                <Box >
                    <Spinner size="xl" color="orange" thickness="4px" />
                    <Text fontSize="xl" fontWeight="bold" color="orange" mt="20px">
                        Your transaction is being processed. Please be patient
                    </Text>
                </Box>
            ) : (
                <>
                    {isPaymentConfirmed && (
                        <Box>
                            <Text fontSize="xl" fontWeight="bold" color="orange" mb="20px">
                                Payment Confirmed.
                            </Text>
                            {/* <Text fontSize="xl" fontWeight="bold" color="orange" mb="20px">
                Start Packing Your Bags 
          </Text> */}
                        </Box>
                    )}
                    <Link to="/">
                        <Button colorScheme={'orange'}>Return to Home Page</Button>
                    </Link>
                </>
            )}
        </Box>
    );
}

export default LoadingPage;