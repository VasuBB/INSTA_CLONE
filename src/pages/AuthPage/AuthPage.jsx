import { Container, Flex, Box, VStack, Image } from "@chakra-ui/react";

// const AuthPage = () => {
//     return (
//         <div>
//             <Flex minH={"100vh"} justifyContent={"center"} alignItems={"center"} px={4}>
//                 <Container maxW={"container.md"} padding={0}>
//                     <Box display={{ base: "none", md: "block" }}>
//                         <img src='/auth.png' h={650} alt='phone img' />
//                     </Box>
//                     <VStack>

//                     </VStack>
//                 </Container>
//             </Flex>
//         </div>
//     )
// }

const AuthPage = () => {
    return (
        <div>
            <Flex minH={"100vh"} justifyContent={"center"} alignItems={"center"} px={4}>
                <Container maxW={"container.md"} padding={0}>
                    <Box display={{ base: "none", md: "block" }}>
                        <img src='/auth.png' h={650} alt='phone img' />
                    </Box>
                    <VStack>

                    </VStack>
                </Container>
            </Flex>
        </div>
    )
}

export default AuthPage
