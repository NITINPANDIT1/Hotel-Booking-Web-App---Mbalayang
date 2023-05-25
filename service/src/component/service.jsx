// import { Image,Box } from '@chakra-ui/react'
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

    return (
        <>
        {
            Ele.length>0 && Ele.map((ele,idx)=>{
                return (
                <div>
                    <Hotels src={ele.hotels}/>
                </div>
                )
            })
        }
        </>
    )
}
export default Services;