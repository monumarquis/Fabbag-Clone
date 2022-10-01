import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalBody,
    Divider,
    ModalCloseButton,
    Container,
    Text,
    Button,
    HStack,
    Image,
    VStack
  } from '@chakra-ui/react'
  import { useDisclosure } from 'react'
export default function InstagaramPost(onClose,isOpen) {
    // const { isOpen, onOpen, onClose } = useDisclosure()
    return (
      <>
        {/* <Button onClick={onOpen}>Open Modal</Button> */}
        <Modal
          isCentered
          onClose={onClose}
          isOpen={isOpen}
          motionPreset='slideInBottom'
        >
          <ModalOverlay />
          <ModalContent>
            <ModalCloseButton />
            <ModalBody>
             <HStack spacing={'0'}>
                <Image width={'50%'} src='https://scontent.cdninstagram.com/v/t51.2885-15/308233127_3167714953481605_6137178861234008003_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=8ae9d6&_nc_ohc=kdz9ABG7v7gAX9RARuc&_nc_ht=scontent.cdninstagram.com&edm=ANo9K5cEAAAA&oh=00_AT8APhErOvEqaKzFJndre4nlsDHxOBwKz3AUaxxKAqdX1w&oe=633E5684' alt='avatar'/>
                <Container>
                    <VStack spacing={'10'}>
                    <HStack>
                        <Image src="https://instafeed.nfcube.com/assets/img/instagram-logo.png" alt='papa'/>
                        <VStack>
                            <Text fontSize={'20'}>thefabbag</Text>
                            <Text color={'gray.100'}>@thefabbag</Text>
                        </VStack>
                    </HStack>
                    <Divider orientation='horizontal' borderColor="gray.200" maxW="400px" sx={{borderBottomWidth:2.5}} />
                   
                   <VStack spacing={'10'}>
                    <Text>Gems from the September Edition ✨💕
                            Grab beauty rockstars from SUGAR, Plum & more of your faveee brands in the #SeptemberFabBag</Text>
                   <Text>Don’t just eye it, buy it! Booking link in bio 😉</Text>
                   <Text>#September #HelloSeptember #FabBag #BeautyBag #BeautySubscription #BeautyDiscovery #BeautyAddict #BeautyLover #BeautyBox #Beauty #Makeup #MakeupSubscription #MakeupJunkie #BeautyEssentials #BeautyFaves #BestOfBeauty #Skincare #BudgetBeauty #GrandFinale #TheFinale</Text>
                   </VStack>
                    </VStack>
                </Container>
             </HStack>
            </ModalBody>
           
          </ModalContent>
        </Modal>
      </>
    )
  }