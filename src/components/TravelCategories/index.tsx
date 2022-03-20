import {
  Flex,
  GridItem,
  Image,
  SimpleGrid,
  Text,
  useBreakpointValue,
} from "@chakra-ui/react";
import React from "react";
import { Category } from "./Category";

export const TravelCategories = () => {
  return (
    <SimpleGrid
      templateColumns={["1fr 1fr", "1fr 1fr", "1fr 1fr", "repeat(5, 1fr)"]}
      w="100%"
      justifyContent="space-between"
      alignItems="center"
      mt={["10", "32"]}
      mx="auto"
      maxW="1160px"
      gap={[1, 5]}
    >
      <GridItem>
        <Category icon="cocktail" text="vida noturna" />
      </GridItem>
      <GridItem>
        <Category icon="surf" text="praia" />
      </GridItem>
      <GridItem>
        <Category icon="building" text="moderno" />
      </GridItem>
      <GridItem>
        <Category icon="museum" text="clássico" />
      </GridItem>
      <GridItem colSpan={[2, 2, 2, 1]}>
        <Category icon="earth" text="e mais..." />
      </GridItem>
    </SimpleGrid>
  );
};
