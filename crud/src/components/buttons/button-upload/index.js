import { IconButton, Icon } from "native-base";
import { AntDesign } from "@expo/vector-icons";

export const ButtonUpload = () => {
  return (
    <IconButton
      w="10"
      h="10"
      borderRadius="full"
      bg="orange.600"
      icon={<Icon as={AntDesign} name="plus" />}
      _icon={{
        color: "light.50",
        size: "md",
      }}
      _pressed={{
        bg: "orange.600:alpha.50",
      }}
    />
  );
};
