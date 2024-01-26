import React from "react";
import {Box, Heading, Flex, Text, IconButton} from "@radix-ui/themes";
import {RxDotsVertical} from "react-icons/rx";

const PortfolioCard: React.FC<{color?: string}> = ({color = "bg-blue-100"}) => {
  return (
    <Box className={`${color} rounded-xl p-4 h-56`} my="3">
      <Flex direction="column">
        <Flex direction="row" justify="between">
          <Flex direction="column">
            <Text size="5" weight="bold">
              THB 21,000
            </Text>
            <Text weight="medium" mt="2">
              Total balance
            </Text>
          </Flex>
          <IconButton radius="full" variant="soft">
            <RxDotsVertical width="18" height="18" />
          </IconButton>
        </Flex>
      </Flex>
    </Box>
  );
};

export default PortfolioCard;
