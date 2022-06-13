import React from "react";
import { Button, Text, Icon } from "native-base";

export const PrimaryButton = ({ children, ...rest }) => {
  return (
    <Button
      bg="orange.600"
      w="200px"
      borderRadius="20px"
      _pressed={{
        bg: "orange.600:alpha.50",
      }}
      {...rest}
    >
      <Text bold fontSize="20px" color="white">
        {children}
      </Text>
    </Button>
  );
};
