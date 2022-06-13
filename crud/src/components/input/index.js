import { Input } from "native-base";

export const TextInput = ({...rest}) => {
  return (
    <Input
      width="100%"
      height='60px'
      variant="filled"
      bg="muted.50"
      borderRadius="15px"
      size="xl"
      {...rest}
    />
  );
};
