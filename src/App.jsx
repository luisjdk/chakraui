import { Box, Heading, Button, Flex, Stack } from "@chakra-ui/react";
import bgImage from "./resources/images/imagen.jpg";

function App() {
  return (
    <Box
      h="40vh"
      bg="black"
      bgImage={`url(${bgImage})`}
      bgRepeat="no-repeat"
      bgSize="cover"
      bgPosition="center"
      display="flex"
      justifyContent="center"
      alignItems="center"
    >
      <Flex
        direction="column"
        alignItems="center"
        justify="center"
        h="80%"
        bg="rgba(0, 0, 0, 0.5)"
        p={["0 10%", null, "0 20%"]}
      >
        <Heading color="white" textTransform="uppercase" textAlign="center">
          DOMINA EL TERRENO
        </Heading>
        <Stack
          direction={{ base: "column", md: "row" }}
          spacing="40px"
          mt="30px"
          w={["100%", null, "auto"]}
        >
          <Button variant="outline" fontWeight="light" color="white">
            VER DETALLES
          </Button>
          <Button variant="outline" fontWeight="light" color="white">
            VER VIDEO
          </Button>
        </Stack>
      </Flex>
    </Box>
  );
}

export default App;
