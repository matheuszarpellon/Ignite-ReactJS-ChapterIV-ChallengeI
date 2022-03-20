import { Heading, SimpleGrid } from "@chakra-ui/react";
import { City } from "./City";

export const Cities = () => {
  return (
    <>
      <Heading fontWeight="500" fontSize={["2xl", "4xl"]} mb="10">
        Cidades +100
      </Heading>
      <SimpleGrid
        templateColumns={["1fr", "1fr 1fr", "repeat(3, 1fr)", "repeat(4, 1fr)"]}
        gap={["20px", "45px"]}
        alignItems="center"
        justifyContent="center"
        px={["30px", "0"]}
      >
        <City city="Londres" citySlug="London" country="Reino Unido" countrySlug="UnitedKingdom" />
        <City city="Paris" citySlug="Paris" country="França" countrySlug="France" />
        <City city="Roma" citySlug="Rome" country="Itália" countrySlug="Italy" />
        <City city="Praga" citySlug="Praga" country="República Tcheca" countrySlug="Czech" />
        <City city="Amsterdã" citySlug="Amsterdam" country="Holanda" countrySlug="Netherlands" />
      </SimpleGrid>
    </>
  );
};
