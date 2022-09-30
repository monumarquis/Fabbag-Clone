import {
    Flex,
    Box,
    FormControl,
    FormLabel,
    Input,
    Checkbox,
    Stack,
    Link,
    Button,
    Heading,
    Text,
    Center,
    HStack,
    Divider,
    Alert,
    Container,
    Spinner
  } from '@chakra-ui/react';
  import { AlertIcon,useToast } from '@chakra-ui/react';
  import { createUserWithEmailAndPassword ,updateProfile} from 'firebase/auth';
  import { useNavigate } from 'react-router-dom';
  import { auth } from '../firebase';
  import { FcGoogle } from 'react-icons/fc';
import { FaFacebook } from 'react-icons/fa';
import Footer from '../Components/Footer';
import { NavLink } from "react-router-dom";
import { useState } from 'react';
  export default function Register() {
    const navigate = useNavigate();
    const [isloading,setloading]=useState(false)
    const [errorinput,seterrorinput]=useState("")
    const[loginerror,setloginerror]=useState(false)
    const[loginsucces,setloginsecces]=useState(false)
    const [sitefix,setsitefix]=useState(true)
    const [formdata,setformdata]=useState({
      email: '',
      password: '',
      firstname: '',
      lastname: '',
    })
    const handleSubmission=()=>{
      if(formdata.email===''){
        seterrorinput("Please enter email")
        return 
      }
      if(formdata.password===''){
        seterrorinput("Please enter password")
        return 
      }
      if(formdata.lastname===''){
        seterrorinput("Please enter lastname")
        return 
      }
      if(formdata.firstname===''){
        seterrorinput("Please enter firstname")
        return 
      }
      setloading(true)
       seterrorinput("")
       createUserWithEmailAndPassword(auth, formdata.email, formdata.password).then((res)=>{
        // console.log(res)
        setloading(false)
        setloginsecces(true)
        const user = res.user
        updateProfile(user,{
          displayName:formdata.firstname+" "+formdata.lastname
        })
        console.log(user)

        navigate("/login")
       })
       .catch((err)=>{
        setloginerror(true)
        setloading(false)
        setloginsecces(false)
       })
        console.log(formdata)
      }
    setTimeout(()=>{
      setsitefix(false)
 },1500)
    if(sitefix){
      return<Container maxW="2xxl" centerContent mt='10'>
            <Spinner
              thickness='4px'
              speed='0.65s'
              emptyColor='gray.200'
              color='#ECC94B'
              size='xl'
              />
      </Container>
  }
   
    return <>
    {/* {loginerror ? <Button
      onClick={() =>
        toast({
          title: 'Account created.',
          description: "We've created your account for you.",
          status: 'success',
          duration: 9000,
          isClosable: true,
          position: 'top',
        })
      }
    >
      Show Toast
    </Button> :""} */}
      <Flex
        minH={'100vh'}
        align={'center'}
        justify={'center'}
        bg={'gray.50'} pb="6">
        <Stack spacing={8} mx={'auto'} maxW={'lg'} py={12} px={6}>
          <Stack align={'center'}>
            <Heading fontSize={'4xl'}>Welcome to our Family </Heading>
            <Text fontSize={'lg'} color={'gray.600'}>
               We have Best <Link color={'blue.400'}>Products</Link> for you 
            </Text>
          </Stack>
          <Button w={'full'} colorScheme={'facebook'} leftIcon={<FaFacebook />}>
          <Center>
            <Text>Continue with Facebook</Text>
          </Center>
        </Button>

        {/* Google */}
        <Button w={'full'} colorScheme={'google'} variant={'outline'} leftIcon={<FcGoogle />}>
          <Center>
            <Text>Sign in with Google</Text>
          </Center>
        </Button>
          <Box
            rounded={'lg'}
            bg={'#fff'}
            boxShadow={'lg'} 
            p={8}>
            <Stack spacing={4} py="10">
              <FormControl id="firstname">
                <FormLabel>First Name</FormLabel>
                <Input type="text" onChange={(event)=>setformdata((prev)=> ({...prev,firstname:event.target.value}))}/>
              </FormControl>
              <FormControl id="lastname">
                <FormLabel>Last Name</FormLabel>
                <Input type="text" onChange={(event)=>setformdata((prev)=> ({...prev,lastname:event.target.value}))}/>
              </FormControl>
              <FormControl id="email">
                <FormLabel>Email address</FormLabel>
                <Input type="email" onChange={(event)=>setformdata((prev)=> ({...prev,email:event.target.value}))} />
              </FormControl>
              <FormControl id="password">
                <FormLabel>Password</FormLabel>
                <Input required type="password"onChange={(event)=>setformdata((prev)=> ({...prev,password:event.target.value}))} />
              </FormControl>
              <Stack spacing={10}>
                <Stack
                  direction={{ base: 'column', sm: 'row' }}
                  align={'start'}
                  justify={'space-between'}>
                  <Checkbox>Remember me</Checkbox>
                  <Link color={'blue.400'}>Forgot password?</Link>
                </Stack>
                {errorinput!=="" ? <Alert status='error'>
                    <AlertIcon />
                    {errorinput}
                  </Alert>:""}
                <Button
                 isLoading={isloading}
                 loadingText='Submitting'
                  bg={'#E5B95F'}
                  color={'black'}
                  _hover={{
                    bg: 'black',
                    color:'white'
                  }}
                  onClick={handleSubmission}
                  
                  >
                  Create Account
                </Button>
                 <HStack spacing="5" justifyContent="center">
                    <Divider maxW="100px" borderColor="black" orientation='horizontal'/>
                    <Text fontSize="xl">OR</Text>
                    <Divider maxW="100px" borderColor="black" orientation='horizontal' />
                 </HStack>

                <Button
                  bg={'#E5B95F'}
                  color={'black'}
                  _hover={{
                    bg: 'black',
                    color:'white'
                  }}>
                 <NavLink to="/login">Log into your Account </NavLink>
                </Button>
              </Stack>
            </Stack>
          </Box>
        </Stack>
      </Flex>
      <Footer/>
      </>
  }