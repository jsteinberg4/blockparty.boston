import * as React from "react";
import {
  ChakraProvider,
  Box,
  Text,
  Link,
  VStack,
  Grid,
  theme,
  Card,
  CardBody,
  Wrap,
} from "@chakra-ui/react";
import { ColorModeSwitcher } from "./ColorModeSwitcher";
import { Logo } from "./Logo";

export const App = () => (
  <ChakraProvider theme={theme}>
    <Box
      textAlign="center"
      fontSize="xl"
      bgImage="url('https://images.unsplash.com/photo-1606373664971-bf9b25eb508d?q=80&w=2571&auto=format&&ixlib=rb-4.0.3&')"
      bgPosition="center"
    >
      <Grid minH="100vh" p={3}>
        {/* <ColorModeSwitcher justifySelf="flex-end" /> */}
        <Wrap></Wrap>
        <VStack spacing={8}>
          <Logo h="40vmin" pointerEvents="none" />
          <Card>
            <CardBody>
              <Text>Welcome to Alleghany Block Parties</Text>
              <Text>More info coming soon...</Text>
            </CardBody>
          </Card>
          {/* <Link */}
          {/*   color="teal.500" */}
          {/*   href="https://chakra-ui.com" */}
          {/*   fontSize="2xl" */}
          {/*   target="_blank" */}
          {/*   rel="noopener noreferrer" */}
          {/* > */}
          {/*   Learn Chakra */}
          {/* </Link> */}
        </VStack>
      </Grid>
    </Box>
  </ChakraProvider>
);
