import { VStack, Heading,Button,Box,Container,Text} from "@chakra-ui/react"
export default function Subscription(){
    return<>
            <Container mb="10">
            <VStack spacing="-0.6">
            <Box py="5" w="360px"  borderWidth='1px'>
                <VStack>
                    <Heading as="h4" size="md"  mt="2">1 MONTH</Heading>
                    <Text>SUBSCRIPTION</Text>
                </VStack>
            </Box>
            <Box py="5"w="360px"  borderWidth='1px'>
                <VStack >
                    <Heading as="h4" size="md" mt="2">RS.599.00</Heading>
                    <Text>/per month</Text>
                </VStack>
            </Box>
            <Box pt="5" pb="40"w="360px" borderColor="gray.200"  borderWidth='1px'>
                <VStack>
                    <Heading as="h4" size="md" mt="2" color="#ECC94B">ONE TIME PAYMENT</Heading>
                    <Text>RS.599.00</Text>
                </VStack>
            </Box>
            <Box py="4"w="360px"  bg="#ECC94B" >
                <Button color="white"colorScheme='yellow' w="90%"  _hover={{  color: " black" }} borderColor="white" variant='outline'>ADD TO CART</Button>
            </Box>
            </VStack>
        </Container>   
    </>
}