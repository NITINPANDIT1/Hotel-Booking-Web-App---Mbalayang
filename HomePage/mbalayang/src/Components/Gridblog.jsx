import {Grid ,Image,Stack, Button ,Card,Heading, Text,CardHeader, CardBody, CardFooter ,GridItem} from '@chakra-ui/react'

import React from 'react'
import CustomCard from './CustomCard'

let arr =[
  {
      imageUrl:'https://media.istockphoto.com/id/1383383546/photo/arc-de-triomphe-illuminated-by-the-morning-light.webp?b=1&s=170667a&w=0&k=20&c=QdVMpa-SFLYExFTlbJnHw2ACeeXfYMYJE6duOXeUO_8=',
       title :`Kana Package`
  },
  {
      imageUrl:'https://media.istockphoto.com/id/1402881514/photo/tallinn-old-town-fat-margaret-tower-at-sunset-estonia.webp?b=1&s=170667a&w=0&k=20&c=GKQ8pe6Ry40Lz4PEPWjx9BNvpJ6RaRVrcUzxoCRt5CU=', 
      title :"Historical Package"
  }
  ,
  {
      imageUrl:'https://media.istockphoto.com/id/1356620786/photo/washington-dc-at-the-tidal-basin-and-jefferson-memorial.webp?b=1&s=170667a&w=0&k=20&c=hx3pEXM-rP1FUpShquFH0La_2zenKuY8Q4HVDPTBrR4=', 
      title :"Desert package"
  }
  ,
  {
    imageUrl:'https://media.istockphoto.com/id/1389974435/photo/los-angeles-chinatown-gate.webp?b=1&s=170667a&w=0&k=20&c=osZAshX6hGgk-4QzhM4R49w7cInGHnrBwIyCGWTMso0=', title :"Camping package"
  }
  ,
  {
    imageUrl:'https://media.istockphoto.com/id/547499548/photo/big-ben-and-westminster-bridge-at-sunset.webp?b=1&s=170667a&w=0&k=20&c=cTM51AKuVmpYZLY7AuF3Z7Ore86Cj3ODkSh0p58u7Cs=', title :"Oasis Package"
  }
  ,
  {
    imageUrl:'https://media.istockphoto.com/id/504985488/photo/bali-water-temple-pura-ulun-danu.jpg?s=612x612&w=0&k=20&c=Iot5kLt4uzW-FQfQHLj9BQ_gc6lvNm88_E8zqnvjQMU=', title :"Hiking package"
  }
  ,
  {
    imageUrl:'https://media.istockphoto.com/id/1192229302/photo/bangalore-skyline-city.jpg?s=612x612&w=0&k=20&c=xOeScPdzSuGKSQdRpLL3osmsa7P4nEAiDFIuTZ9cEl4=', title :"Eropa Destinations"
  }
  ,
  {
    imageUrl:'https://media.istockphoto.com/id/905049262/photo/varanasi-at-sunrise.jpg?s=612x612&w=0&k=20&c=ooiOJzZ4vYe8paql2eHINqyIW_3JX9Hm1FelZ9kBkZ8=', title :"Asia Destination "
  }
]

const Gridblog = () => {
  return (
    <Grid
    border={"none"}
    width={"70%"}
    h='200px'
    templateRows='repeat(2, 1fr)'
    templateColumns='repeat(4, 1fr)'
    gap={1}
    marginLeft="15%"  
    marginTop="200"  
    direction={{ base: 'column', sm: 'row' }}
    >
    
    {arr.map((item)=>{
      return <GridItem >
        <CustomCard imageUrl={item.imageUrl} title={item.title}/>
      </GridItem>
    })}
  </Grid>
  )
}

export default Gridblog