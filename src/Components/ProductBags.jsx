import { SimpleGrid, GridItem,VStack,Image,Container,Text} from "@chakra-ui/react"
export default function ProductBags(){
    return<>
      <Container>
          <SimpleGrid coloumns={[1,2,3,4]} gap="20">
            <GridItem>
                <VStack>
                     <Image src="" alt="anything" />
                </VStack>
            </GridItem>
            <GridItem></GridItem>
            <GridItem></GridItem>
            <GridItem></GridItem>
          </SimpleGrid>

      </Container>
    </>
}