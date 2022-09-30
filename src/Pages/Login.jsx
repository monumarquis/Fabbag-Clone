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
    useColorModeValue,
    Center,
    HStack,
    Divider,
    Container,
    Spinner
  } from '@chakra-ui/react';
  import{auth}from'../firebase'
  import { FcGoogle } from 'react-icons/fc';
import { FaFacebook } from 'react-icons/fa';
  import Footer from '../Components/Footer';
import { NavLink,useNavigate } from 'react-router-dom';
import { useEffect,useContext,useState } from 'react';
import {AuthContext} from'../Context/AuthContext'
import { signInWithEmailAndPassword } from 'firebase/auth';
  export default function Login() {
    const{setAuth,Auth,setusername,username}=useContext(AuthContext)
    const navigate = useNavigate();
    useEffect(()=>{
         auth.onAuthStateChanged((user)=>{
          if(user){
            setusername(user.displayName)
          }else setusername(null)
          console.log(user) 
         })
    },[])
    console.log(Auth)
    const [isloading,setloading]=useState(false)
    const [errorinput,seterrorinput]=useState("")
    const[loginerror,setloginerror]=useState(false)
    const[loginsucces,setloginsecces]=useState(false)
    const [sitefix,setsitefix]=useState(true)
    const [formdata,setformdata]=useState({
      email: '',
      password: '',
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
      setloading(true)
       seterrorinput("")
       signInWithEmailAndPassword(auth, formdata.email, formdata.password).then((res)=>{
        // console.log(res)
        setloading(false)
        setloginsecces(true)
        setAuth(true)
        navigate("/")
       })
       .catch((err)=>{
        setloginerror(true)
        setloading(false)
        setloginsecces(false)
        setAuth(false)
       })
      console.log(formdata)
    }
    setTimeout(()=>{
         setsitefix(false)
    },1500)
    if(sitefix){
      return<Container maxW="2xxl" centerContent  mt='10'>
            <Spinner
              thickness='4px'
              speed='0.7s'
              emptyColor='gray.200'
              color='#ECC94B'
              size='xl'
              />
      </Container>
  }
    return <>
      <Flex
        minH={'100vh'}
        align={'center'}
        justify={'center'}
        bg='gray.50' pb="6">
        <Stack spacing={8} mx={'auto'} maxW={'lg'} py={12} px={6} bg='white' >
          <Stack align={'center'}  bg='white'>
            <Heading fontSize={'4xl'}>Welcome {username}</Heading>
            <Text fontSize={'lg'} color={'gray.600'}>
            Let's Log in and enjoy our <Link color={'blue.400'}>Plan</Link> 
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
            <Stack spacing={4} py="10"  bg='white'>
              <FormControl id="email" onChange={(event)=>setformdata((prev)=> ({...prev,email:event.target.value}))}>
                <FormLabel>Email address</FormLabel>
                <Input type="email" />
              </FormControl>
              <FormControl id="password" onChange={(event)=>setformdata((prev)=> ({...prev,password:event.target.value}))}>
                <FormLabel>Password</FormLabel>
                <Input type="password" />
              </FormControl>
              <Stack spacing={10}>
                <Stack
                  direction={{ base: 'column', sm: 'row' }}
                  align={'start'}
                  justify={'space-between'}>
                  <Checkbox>Remember me</Checkbox>
                  <Link color={'blue.400'}>Forgot password?</Link>
                </Stack>
                <Button
                  bg={'#E5B95F'}
                  color={'black'}
                  _hover={{
                    bg: 'black',
                    color:'white'
                  }}
                  isLoading={isloading}
                  loadingText='Submitting'
                  onClick={handleSubmission}>
                  Sign in
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
                 <NavLink to="/register">Create a New Account </NavLink>
                </Button>
              </Stack>
            </Stack>
          </Box>
        </Stack>
      </Flex>
      <Footer/>
      </>
  }