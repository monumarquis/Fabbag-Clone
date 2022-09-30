  import {Container,VStack,Text,Button,Divider} from '@chakra-ui/react'
import { NavLink } from 'react-router-dom'
import { getAuth, signOut } from "firebase/auth";
import {AuthContext} from'../Context/AuthContext'
import { useContext ,useState } from 'react';
  function Dropdown1(){
    return <>
    <Container maxW="200px" bg="#fff"  py="8" position="absolute" top="65px" right="10px" zIndex="99">
        <VStack spacing="2" justifyContent="right">
         <Text>Languages :<span style={{color:"black" }}>en</span> Or sp</Text>
         <Divider orientation='horizontal' borderColor="gray" maxW="400px" sx={{borderBottomWidth:1}} />
         <NavLink  style={{color:"#ECC94B"}}to='/cart'>Checkout</NavLink>
         <Divider orientation='horizontal' borderColor="gray" maxW="400px" sx={{borderBottomWidth:1}} />
         <NavLink style={{color:"#ECC94B"}}to='/login'>Sign in</NavLink>
          <Divider orientation='horizontal' borderColor="gray" maxW="400px" sx={{borderBottomWidth:1}} />
         <NavLink textAlign="right" style={{color:"#ECC94B"}}to='/register'>Create Account</NavLink>
        </VStack>
    </Container>
    </>
}
  function Dropdown2(){
    const{setusername,setAuth}=useContext(AuthContext)
    const [isloading,setloading]=useState(false)
    const handlesignout=()=>{
        const auth = getAuth();
        setloading(true)
        signOut(auth).then(() => {
          // Sign-out successful
          setloading(false)
          setAuth(false)
          setusername("")
        }).catch((error) => {
          // An error happened.
          setloading(false)
        });
    }
    return <>
    <Container maxW="200px" bg="#fff"  py="8" position="absolute" top="65px" right="10px" zIndex="99">
        <VStack spacing="2" >
         <Text textAlign="right" color="#ECC94B">Languages :<span style={{color:"black"}}>en</span> Or sp</Text>
         <Divider orientation='horizontal' borderColor="gray" maxW="400px" sx={{borderBottomWidth:1}} />
         <NavLink textAlign="right"to='/cart' style={{color:"#ECC94B"}} _hover={{color:"black"}}>Checkout</NavLink>
         <Divider orientation='horizontal' borderColor="gray" maxW="400px" sx={{borderBottomWidth:1}} />
         <Button onClick={handlesignout} isLoading={isloading} color="#ECC94B" bg="#fff">Sign out</Button>
        </VStack>
    </Container>
    </>
}
export {Dropdown1,Dropdown2}