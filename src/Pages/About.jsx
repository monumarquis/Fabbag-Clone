import Footer from'../Components/Footer'
import { useState } from "react"
import { VStack,Text,Divider,Container,Box,SkeletonCircle,SkeletonText} from '@chakra-ui/react'
export default function About(){
    const [sitefix,setsitefix]=useState(true)
    setTimeout(()=>{
         setsitefix(false)
    },1500)
    if(sitefix){
        return<Container maxW="2xxl"  mt='10'>
             <Box padding='6' bg='white'>
                <SkeletonCircle size='10' />
                <SkeletonText mt='4' noOfLines={20} h='10' spacing='4' />
            </Box>
        </Container>
    }
    return<>
    <VStack  mb="20" spacing="7" mt="10">
            <Text fontSize={'23'} fontWeight="bold" fontStyle='italic'>ABOUT US</Text>
            <Divider orientation='horizontal' borderColor="#ECC94B" maxW="1100px" sx={{borderBottomWidth:3}} />
        </VStack>
    
    <Container centerContent maxW='4xl' mb='20'>
        <VStack spacing='20' textAlign='left'>
           <Text lineHeight='1.5'>At FAB BAG, we are beauty experts and addicts driven by our passion for high-quality beauty products and delightful service. We recognize that our members are beauty enthusiastic women looking for great products that would work for their specific beauty needs and tastes, but do not have enough time, access or resources to try out and experience all that is available. We work hard in association with brands to select 3 or more amazing products exclusively customized for each member and send them in a delightful bag to her doorstep every month so that she never has to make the expensive mistake of buying products that do not work for her! We also advise members on how to make the best use of these products and keep them abreast of the latest beauty and fashion trends.</Text>
           <Text lineHeight='1.5'>We are growing our network of beauty addicts, experts and brands and would love to hear from you Contact Us</Text>
           <Text lineHeight='1.5'>The “FABBAG” trademark is wholly owned and operated by “Vellvette Lifestyle Private Limited”. Any products marketed or manufactured under the label “ FABBAG “is the property of the same Company and Parent brand “Vellvette”.</Text>
        </VStack>
        
    </Container>
    <Footer/>
    </>
}