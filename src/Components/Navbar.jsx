import { Box, Container, Text, HStack,Image} from "@chakra-ui/react"
import { BsSuitHeart,BsSearch } from 'react-icons/bs';
import { BiCartAlt } from 'react-icons/bi';
import{FaRegUserCircle} from 'react-icons/fa';
import {IconContext}from"react-icons"
import { Link } from "react-router-dom";
import { Dropdown1,Dropdown2 } from "./Dropdown"
import '../App.css';
import {AuthContext} from'../Context/AuthContext'
import { useContext,useState } from 'react';
export default function Navbar(){
    const{Auth}=useContext(AuthContext)
    const [Dropdown,setDropdown]=useState(false)
    console.log(Dropdown , Auth)
    return (
<Container  maxW="100%" centerContent  p='3' boxShadow='0px 15px 10px -15px #111' position="sticky" zIndex="99"
w="100%" bg="#fff" top="0"   >
    <HStack spacing="400" position="relative" mb='0'>
    <Box>
        <Text  color="#E5B95F" fontWeight="800" fontSize="18">SUBSCRIBE NOW</Text>
    </Box>
    <Box>
      <Link to="/"><Image width="200px" src="https://cdn.shopify.com/s/files/1/0052/7551/6995/files/FABBAG-LOGO_ea6e4404-93c0-4f54-9efc-23e6960bf4d4_2048x.png?v=1662004919" alt="Logo"/></Link> 
    </Box>
    <Box mb='0'>
        <HStack spacing="27" mb='0'>
            <IconContext.Provider value={{className: "top-react-icons"}}>
            <BsSearch size={20} color="#E5B95F" />
            <BsSuitHeart size={20} color="#E5B95F" />
            <Box h='10vh' display="flex" alignItems="center"  onClick={()=>setDropdown(!Dropdown) } >{Auth ?<Image borderRadius={'50%'} boxSize="25px" src="https://avatars.githubusercontent.com/u/103979538?s=40&v=4"alt='monu'/>:<FaRegUserCircle   size={20} color="#E5B95F"/>}</Box>
            <Link to="/cart"><BiCartAlt size={20} color="#E5B95F"/></Link>
            { Dropdown && !Auth && <Dropdown1/>}
            { Dropdown && Auth && <Dropdown2/>}

            </IconContext.Provider>
        </HStack>
    </Box>
    </HStack>
</Container>
    )
}