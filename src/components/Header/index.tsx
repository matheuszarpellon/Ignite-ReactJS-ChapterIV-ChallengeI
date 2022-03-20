import { Flex, Icon, Image, SimpleGrid } from "@chakra-ui/react";
import Link from "next/link";
import { useRouter } from "next/router";
import {RiArrowLeftSLine} from "react-icons/ri";

export const Header = () => {
  const {asPath} = useRouter()
  const notHomePage = asPath !== "/"
  
  return (
    <Flex
      as="header"
      bg="white"
      w="100vw"
      mx="auto"
      px="4"
      h={["50px", "100px"]}
      align="center"
      justify="center"
    >
      <SimpleGrid
        h="100%"
        w="100%"
        maxW="1160px"
        mx="auto"
        templateColumns="repeat(3, 1fr)"
        alignItems="center"
        justifyContent="center"
      >
        {notHomePage && (
          <Link href="/">
            <a>
              <Icon as={RiArrowLeftSLine} fontSize={[20, 40]} justifySelf="start" />
            </a>
          </Link>          
        )}
        <Image
          src="/logo.svg"
          alt="Um avião voando sobre o nome da marca World Trip"
          w={["81px", "184px"]}
          justifySelf="center"
          gridColumn="2"
        />
      </SimpleGrid>
    </Flex>
  );
};
