import { HStack, Icon, Stack, Text } from "@chakra-ui/react";
import { AiOutlineInfoCircle } from "react-icons/ai";

const Portfolio = () => {
  return (
    <HStack>
      <Stack>
        <HStack>
          <Text>Total Portfolio Value</Text>
        </HStack>
        <Icon as={AiOutlineInfoCircle} />
      </Stack>
    </HStack>
  );
};

export default Portfolio;
