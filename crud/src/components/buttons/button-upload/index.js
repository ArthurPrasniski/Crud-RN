import { IconButton, Icon } from "native-base";
import { AntDesign } from "@expo/vector-icons";

export const ButtonUpload = ({...rest}) => {
  return (
    <IconButton
      w="7"
      h="7"
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
      {...rest}
    />
  );
};
