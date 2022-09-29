import { Box, Container, Text, HStack,Image} from "@chakra-ui/react"
import { BsSuitHeart,BsSearch } from 'react-icons/bs';
import { BiCartAlt } from 'react-icons/bi';
import{FaRegUserCircle} from 'react-icons/fa';
import {IconContext}from"react-icons"
import { Link } from "react-router-dom";

export default function Navbar(){
    return (
<Container  maxW="container.xll" centerContent p="3" bg="gray.100">
    <HStack spacing="400">
    <Box>
        <Text  color="#E5B95F" fontWeight="800" fontSize="18">SUBSCRIBE NOW</Text>
    </Box>
    <Box>
      <Link to="/"><Image width="200px" src="https://cdn.shopify.com/s/files/1/0052/7551/6995/files/FABBAG-LOGO_ea6e4404-93c0-4f54-9efc-23e6960bf4d4_2048x.png?v=1662004919" alt="Logo"/></Link> 
    </Box>
    <Box>
        <HStack spacing="27">
            <IconContext.Provider value={{className: "top-react-icons"}}>
            <BsSearch size={16} color="#E5B95F" />
            <BsSuitHeart size={16} color="#E5B95F" />
            <Link to="/login"><FaRegUserCircle  size={16} color="#E5B95F"/></Link>
            <BiCartAlt size={16} color="#E5B95F"/>
            </IconContext.Provider>
        </HStack>
    </Box>
    </HStack>
</Container>
    )
}