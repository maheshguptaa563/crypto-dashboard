import { Box, HStack, Heading, Icon, Stack, Text } from "@chakra-ui/react";
import { RxDashboard } from "react-icons/rx";
import { BsArrowDownUp } from "react-icons/bs";
import { BiSupport } from "react-icons/bi";

const SideNav = () => {
  const navLinks = [
    {
      icon: RxDashboard,
      text: "Dashboard",
      link: "/",
    },
    {
      icon: BsArrowDownUp,
      text: "Transaction",
      link: "/transaction",
    },
  ];
  return (
    <Stack
      bg="white"
      boxShadow={{
        base: "none",
        lg: "lg",
      }}
      w={{
        base: "full",
        lg: "16rem",
      }}
      h="100vh"
      justify="space-between"
      display={{
        base: "none",
        lg: "flex",
      }}
    >
      <Box>
        <Heading fontSize="20px" as="h1" pt="3.5rem" textAlign="center">
          DOSOMECODING
        </Heading>
        <Box mt="6" mx="3">
          {navLinks.map((nav) => (
            <HStack
              borderRadius="10px"
              key={nav.text}
              py="3"
              px="4"
              _hover={{
                bg: "#F3F3F7",
                color: "#171717",
              }}
              color="#797E82"
            >
              <Icon as={nav.icon} />
              <Text fontSize="14px" fontWeight="medium">
                {nav.text}
              </Text>
            </HStack>
          ))}
        </Box>
      </Box>
      <Box mt="6" mx="3" mb="6">
        <HStack
          borderRadius="10px"
          py="3"
          px="4"
          _hover={{
            bg: "#F3F3F7",
            color: "#171717",
          }}
          color="#797E82"
        >
          <Icon as={BiSupport} />
          <Text fontSize="14px" fontWeight="medium">
            Support
          </Text>
        </HStack>
      </Box>
    </Stack>
  );
};

export default SideNav;
