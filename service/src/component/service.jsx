import { Input, Stack, InputGroup, InputRightElement, Heading } from '@chakra-ui/react'
import { SearchIcon } from '@chakra-ui/icons';
import { useEffect, useState } from 'react';
import axios from "axios";
import Hotels from './Hotels';

function Services(){
    const [Hotel,setHotel]=useState([])
    const [Ele,setEle]=useState([])

    useEffect(()=>{
        axios.get(`https://run.mocky.io/v3/bbb81a69-991a-4ae5-880f-47b41581b2a6`)
        .then((data)=>{setHotel(data.data.places);setEle(data.data.places);console.log(data.data.places);})
    },[])

    function search(value){
        let newdata=Hotel.filter((ele,idx)=>{
            if(value===""){
                return Ele
            }
            return ele.place_name===value;
        })
        console.log(value)
        setEle(newdata);
    }
    return (
        <>
        <Stack alignItems="center">
        <InputGroup w="30%" marginTop="20px">
            <Input variant="filled" placeholder="Filled" onChange={(e)=>{search(e.target.value)}}/>
            <InputRightElement>
            <SearchIcon color="gray.500" />
            </InputRightElement>
        </InputGroup>
        </Stack>
        {
            
            Ele.length>0?
            Ele.map((ele,idx)=>{
                return (
                <div>
                    <Hotels src={[...ele.hotels,ele.place_name]}/>
                </div>
                )
            })
            :
            <Heading margin={"100px"} alignSelf={"center"}>Loading...</Heading>
        }
        </>
    )
}
export default Services;