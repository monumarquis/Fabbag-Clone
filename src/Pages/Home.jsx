import { VStack, Heading,Divider} from "@chakra-ui/react"
import Carousel from"../Components/Carousel"
import Testimonials from "../Components/Testimonials"
// import ProductCarousel from"../Components/ProductCarousel"
import Subscription from "../Components/Subscription"
import Footer from "../Components/Footer"
export default function Home(){
    return (
        <>
        <Carousel/>

        <VStack  mb="20" spacing="7">
            <Heading as="h1" fontWeight="bold" mt="2">WHAT'S IN THE BAG </Heading>
            <Divider orientation='horizontal' borderColor="#ECC94B" maxW="400px" sx={{borderBottomWidth:2.5}} />
        </VStack>

        {/* <ProductCarousel/> */}

        <VStack  mb="20" spacing="7">
            <Heading as="h1" fontWeight="bold" mt="2">SUBSCRIPTION</Heading>
            <Divider orientation='horizontal' borderColor="#ECC94B" maxW="300px" sx={{borderBottomWidth:2.5}} />
        </VStack>
         
         <Subscription />

         <VStack  mb="20" spacing="7">
            <Heading as="h1" fontWeight="bold" mt="2">PREVIOUS BAGS</Heading>
            <Divider orientation='horizontal' borderColor="#ECC94B" maxW="300px" sx={{borderBottomWidth:2.5}} />
        </VStack>

        <Testimonials/>
        <Footer/>
        </>
    )
}