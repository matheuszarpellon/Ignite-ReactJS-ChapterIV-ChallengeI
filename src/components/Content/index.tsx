import { SimpleGrid, Text } from "@chakra-ui/react";
import React from "react";
import { Infos } from "./Infos";

export const Content = () => {
  return (
    <SimpleGrid
      templateColumns={["1fr", "1fr", "1fr 1fr", "1.2fr 1fr"]}
      gap={[5, 10, 16, 20]}
      my={["8", "20"]}
    >
      <Text
        fontSize={["lg", "xl", "xl", "2xl"]}
        color="gray.700"
        textAlign="justify"
      >
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque
        voluptatibus natus quia rerum accusantium ipsam nesciunt aliquam tenetur
        ut, molestiae tempora rem veniam quidem maiores neque et, ducimus a
        dolorem ipsa assumenda laudantium! Quod, odio saepe, non repellendus
        consectetur enim dolores inventore sint unde assumenda maiores officia?
        Ipsam, quasi asperiores.
      </Text>
      <Infos />
    </SimpleGrid>
  );
};
