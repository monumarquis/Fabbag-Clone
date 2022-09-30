import {
    Box,
    chakra,
    Container,
    SimpleGrid,
    Stack,
    Text,
    VisuallyHidden,
    Input,
    IconButton,
    useColorModeValue,
    VStack
  } from '@chakra-ui/react';
//   import { ReactNode } from 'react';
  import { FaInstagram, FaTwitter, FaYoutube,FaFacebook } from 'react-icons/fa';
  import { BiMailSend } from 'react-icons/bi';
  import { Link } from 'react-router-dom';
  
  const SocialButton = ({
    children,
    label,
    href,
  }) => {
    return (
      <chakra.button
        bg={useColorModeValue('blackAlpha.100', 'whiteAlpha.100')}
        rounded={'full'}
        w={8}
        h={8}
        cursor={'pointer'}
        as={'a'}
        href={href}
        display={'inline-flex'}
        alignItems={'center'}
        justifyContent={'center'}
        transition={'background 0.3s ease'}
        _hover={{
          bg: useColorModeValue('blackAlpha.200', 'whiteAlpha.200'),
        }}>
        <VisuallyHidden>{label}</VisuallyHidden>
        {children}
      </chakra.button>
    );
  };
  
  const ListHeader = ({ children }) => {
    return (
      <Text fontWeight={'500'} fontSize={'lg'} mb={2}>
        {children}
      </Text>
    );
  };
  
  export default function Footer() {
    return (
      <Box py="20"
        bg={useColorModeValue('#fff', '#fff')}
        color={useColorModeValue('gray.700', 'gray.200')}
        boxShadow="0 -10px 20px -5px rgba(115,115,115,0.75)"
        >
        <Container as={Stack} maxW={'6xl'} mb='20'>
          <SimpleGrid
            templateColumns={{ sm: '1fr 1fr', md: '2fr 2fr  3fr' }}
            spacing="20">
            
            <Stack align={'flex-start'} spacing="5">
              <ListHeader>INFORMATION</ListHeader>
              <Link color="gray" className='navlink'  to="/about-us"><span style={{":hover":{textDecoration:"none" , color:"#ECC94B"}}}>About us</span></Link>
              <Link  color="gray" _hover={{textDecoration:"none" , color:"#ECC94B"}}to="/associative-brands">Associative Brands</Link>
              <Link  color="gray" _hover={{textDecoration:"none" , color:"#ECC94B"}}to="/associative-brands">FAQ</Link>
              <Link color="gray" _hover={{textDecoration:"none" , color:"#ECC94B"}}to="/associative-brands">Collaborate with Fab Bag</Link>
              <Link color="gray" _hover={{textDecoration:"none" , color:"#ECC94B"}}to="/associative-brands">Contact us</Link>
              <Link color="gray" _hover={{textDecoration:"none" , color:"#ECC94B"}}to="/associative-brands">Returns & Refunds</Link>
              <Link color="gray" _hover={{textDecoration:"none" , color:"#ECC94B"}}to="/associative-brands">Terms & Conditions</Link>
            </Stack>
            <Stack align={'flex-start'} spacing="5">
              <ListHeader>CUSTOMER CARE</ListHeader>
              <VStack spacing="-1"><Box color="gray" ml="-20">Call : <Link color="black"_hover={{textDecoration:"none" , color:"#ECC94B"}}href={'#'}>022-6805-6010</Link></Box><Box color="gray">(Monday to Friday : 9 AM - 7 PM)</Box></VStack>
              <Box color="gray">Mail :<Link color="gray"_hover={{textDecoration:"none" , color:"#ECC94B"}}href={'#'}>crew@fabag.com</Link></Box>
             
            </Stack>
            <Stack align={'flex-start'}>
              <ListHeader>NEWSLETTER</ListHeader>
              <Text color="gray">Signup for the latest offers, updates and news</Text>
              <Stack direction={'row'}>
                <Input
                  placeholder={'Your email address'}
                  bg={useColorModeValue('blackAlpha.100', 'whiteAlpha.100')}
                  border={0}
                  _focus={{
                    bg: 'whiteAlpha.300',
                  }}
                />
                <IconButton
                  bg={useColorModeValue('green.400', 'green.800')}
                  color={useColorModeValue('white', 'gray.800')}
                  _hover={{
                    bg: '#ECC94B',
                  }}
                  aria-label="Subscribe"
                  icon={<BiMailSend />}
                />
              </Stack>
              <Text color="gray">Don’t worry we don’t spam</Text>
            </Stack>
          </SimpleGrid>
        </Container>
        <Container>
          <Stack spacing={6}>
          <Stack direction={'row'} spacing={5} justifyContent="center">
              <SocialButton label={'Twitter'} href={'#'}>
                <FaTwitter _hover={{color:"#fff", bg:"lightblue"}} color='gray'/>
              </SocialButton>
              <SocialButton label={'YouTube'} href={'#'}>
                <FaYoutube _hover={{color:"#fff", bg:"red"}} color='gray' />
              </SocialButton>
              <SocialButton label={'Instagram'} href={'#'}>
                <FaInstagram _hover={{color:"#fff", bg:"#3f729b"}} color='gray' />
              </SocialButton >
              <SocialButton label={'Facebook'} href={'#'}>
                <FaFacebook  color='gray' _hover={{color:"#fff", bg:"blue"}}/>
              </SocialButton>
            </Stack>
            <Text fontSize={'sm'} color="gray">
              © 2022 Chakra Templates. All rights reserved
            </Text>
           
          </Stack>
        </Container>
      </Box>
    );
  }