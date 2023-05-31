import { Input, Stack, InputGroup, InputRightElement, Spinner, Heading } from '@chakra-ui/react'
import { SearchIcon } from '@chakra-ui/icons';
import { useEffect, useState } from 'react';
import axios from "axios";
import Hotels from './Hotels';
import Footer from './Footer';

function Services(){
    const [Hotel,setHotel]=useState([])
    const [Ele,setEle]=useState([])
    const [seconds, setSeconds] = useState(0);
    const [isActive, setIsActive] = useState(true);

    useEffect(()=>{
        axios.get(`https://run.mocky.io/v3/34cddf8b-c355-450a-a51b-7fc56e49f02e`)
        .then((data)=>{setHotel(data.data.places);setEle(data.data.places);console.log(data.data.places);});
        
        let interval=null;
        if (isActive) {
            interval = setInterval(() => {
              setSeconds((prevSeconds) => prevSeconds + 1);
            }, 1000);
      
            if (seconds === 2) {
              clearInterval(interval);
              setIsActive(false);
            }
        }
    },[])

    function search(value){
        let newdata=Hotel.filter((ele,idx)=>{
            if(value===""){
                return Ele
            }
            return ele.place_name.toLowerCase().includes(value.toLowerCase());
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
                    <Hotels src={ele.hotels}/>
                </div>
                )
            })
            :isActive===true?<Spinner margin={'20%'} alignSelf={'center'}/>:<Heading margin={'20%'} alignSelf={'center'}>Not found</Heading>
        }
        <Footer/>
        </>
    )
}
export default Services;