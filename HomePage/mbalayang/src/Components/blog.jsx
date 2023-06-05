import React from "react";
import { Box, Heading, Text, Image, SimpleGrid, Button } from "@chakra-ui/react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import SearchBox from "./SearchBox";
import Gridblog from "./Gridblog";

const BlogPage = () => {
  const blogs = [
    {
      title: "News Japan",
      author: "Author 1",
      date: "May 1, 2023",
      imageSrc:
        "https://i.pinimg.com/736x/b6/ca/bf/b6cabf0f610529b4fed39386d8256fe8.jpg",
      description:
        "A captivating blend of ancient traditions and cutting-edge technology, Japan beckons travelers with its stunning cherry blossoms, historic temples, bustling cityscapes like Tokyo, and a unique cultural experience that combines old-world charm with modern innovations.",
    },
    {
      title: "News Malaysia",
      author: "Author 2",
      date: "May 5, 2023",
      imageSrc:
        "https://th.bing.com/th/id/OIP.QrDwqtdXg7Pf713lgQRB_gHaE7?pid=ImgDet&rs=1",
      description:
        "A tropical paradise with stunning natural beauty, Malaysia allures visitors with its pristine beaches, lush rainforests, and vibrant cities like Kuala Lumpur. The country's diverse cultural heritage and mouthwatering cuisine add to its allure as a top tourist destination.",
    },
    // Add more blog objects here
    // Add more blogs to achieve a 4x4 grid
    {
      title: "News USA",
      author: "Author 3",
      date: "May 10, 2023",
      imageSrc:
        "https://th.bing.com/th/id/OIP._qzg1mHEA6jo9Gte6bAeVwHaFj?w=239&h=180&c=7&r=0&o=5&pid=1.7",
      description:
        "With its vast landscapes and iconic cities like New York, Los Angeles, and San Francisco, the United States offers a wide range of attractions, including stunning national parks, world-class museums, and bustling entertainment hubs, ensuring there's something for every traveler.",
    },
    // Repeat the pattern to fill the grid
    {
      title: "News Korea",
      author: "Author 4",
      date: "May 15, 2023",
      imageSrc:
        "https://th.bing.com/th/id/OIP.9YOT7tEy6Htw_jQkVhjBzQHaE7?pid=ImgDet&rs=1",
      description:
        "From the bustling streets of Seoul to the serene beauty of its countryside, Korea entices visitors with its fascinating mix of traditional and modern attractions, including ancient palaces, vibrant street markets, and delicious cuisine like kimchi and bibimbap.",
    },
    {
      title: "News Indonesia",
      author: "Author 5",
      date: "May 20, 2023",
      imageSrc:
        "https://th.bing.com/th/id/OIP.p2E9Xl7ifEHzDf7oCwCbpwHaE8?w=287&h=191&c=7&r=0&o=5&pid=1.7",
      description:
        "With its enchanting islands like Bali, Komodo National Park, and the vibrant capital city of Jakarta, Indonesia offers a wealth of natural beauty, diverse cultures, and unique experiences, making it a haven for beach lovers, adventure seekers, and cultural enthusiasts alike.",
    },
    {
      title: "News Singapore",
      author: "Author 6",
      date: "May 25, 2023",
      imageSrc:
        "https://th.bing.com/th/id/OIP.-ROljymzLkXx955xlk6SeAHaE8?w=277&h=185&c=7&r=0&o=5&pid=1.7",
      description:
        "A modern metropolis with a unique blend of cultures, Singapore boasts impressive skyscrapers, iconic landmarks such as Marina Bay Sands, and a renowned food scene, making it a top choice for both business and leisure travelers.",
    },
    {
      title: "News India",
      author: "Author 7",
      date: "May 30, 2023",
      imageSrc:
        "https://th.bing.com/th/id/OIP.Bd9zBcDr9jXYxPjA-2AD1wHaEo?w=289&h=181&c=7&r=0&o=5&pid=1.7",
      description:
        "Known for its rich cultural heritage and diverse landscapes, India offers a captivating blend of ancient historical sites like the Taj Mahal and vibrant cities like Delhi and Mumbai, making it a must-visit destination for travelers.",
    },
    {
      title: "News China",
      author: "Author 8",
      date: "June 1, 2023",
      imageSrc:
        "https://th.bing.com/th/id/OIP.7yZ6H2h2_71wFRWUNjaf8gHaEK?w=322&h=181&c=7&r=0&o=5&pid=1.7",
      description:
        "Boasting a rich history spanning thousands of years, China offers an array of wonders, including the magnificent Great Wall, the terracotta warriors of Xi'an, bustling megacities like Shanghai, and picturesque landscapes like the Li River in Guilin.",
    },
  ];

  return (
    <Box
      backgroundImage="url('https://images.pexels.com/photos/4476397/pexels-photo-4476397.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')"
      backgroundSize="cover"
      backgroundPosition="top"
      maxHeight="115vh"
      maxWidth="90%"
      margin="auto"
      borderBottomRadius="30%"
      display="flex"
      flexDirection="column"
    >
      <Navbar />
      <Heading size={"2xl"} marginTop={"40"} marginBottom={"-60"} color="white">
        Destinations
      </Heading>
      <Heading size={"md"} marginTop={"40"} marginBottom={"-60"} color="white">
        {" "}
        Amazing Destinations in the World
      </Heading>
      <SearchBox />
      <Gridblog />

      <Box
        marginTop="200px"
        width="100%"
        display="flex"
        justifyContent="center"
      >
        <SimpleGrid
          columns={{ sm: 1, md: 2, lg: 4 }}
          spacing="2rem"
          mt="2rem"
          pb="2rem"
        >
          {blogs.map((blog, index) => (
            <Box
              key={index}
              boxShadow="md"
              rounded="md"
              bg="orange.50"
              p="1rem"
              width="300px"
            >
              <Heading as="h2" size="lg" mb="1rem">
                {blog.title}
              </Heading>
              <Text mb="1rem">
                {blog.author} | {blog.date}
              </Text>
              <Image
                src={blog.imageSrc}
                alt="Blog Image"
                mb="1rem"
                borderRadius="md"
                width="300px"
                height="200px"
                objectFit="cover"
              />

              <Text>{blog.description}</Text>

              <Button colorScheme="teal" mt="1rem">
                Read More
              </Button>
            </Box>
          ))}
        </SimpleGrid>
      </Box>

      <Footer />
    </Box>
  );
};

export default BlogPage;
