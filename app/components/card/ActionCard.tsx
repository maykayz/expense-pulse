"use client";
import React from "react";
import {Box, Heading, Flex, Text, Button} from "@radix-ui/themes";

interface ActionCardProps {
  title: string;
  buttonText: string;
  handleClick: () => void;
  textColor?: string;
  bgColor?: string;
}
const ActionCard = ({title, handleClick, buttonText, bgColor, textColor}: ActionCardProps) => {
  return (
    <Box className={`bg-black rounded-xl p-4 h-56`} my="3">
      <Flex direction="column">
        <Flex direction="row" justify="between">
          <Flex direction="column">
            <Text size="6" weight="bold" className="text-white">
              {title}
            </Text>
          </Flex>
          <Button onClick={() => handleClick()}>{buttonText}</Button>
        </Flex>
      </Flex>
    </Box>
  );
};

export default ActionCard;


