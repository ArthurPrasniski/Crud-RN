import React from "react";
import { Button, Text } from "native-base";

export const SecondaryButton = ({ children }) => {
  return (
    <Button
      bg="orange.400"
      w="200px"
      borderRadius="20px"
      _pressed={{
        bg: "orange.600:alpha.50",
      }}
    >
      <Text bold fontSize="20px" color="white">
        {children}
      </Text>
    </Button>
  );
};