import React from "react";
import { Text, Center, Box, Avatar } from "native-base";
import { SafeAreaView } from "react-native";
import { PrimaryButton } from "../../components/buttons/primary-button";
import { SecondaryButton } from "../../components/buttons/secondary-button";

export const HomeScreen = () => {
  return (
    <>
      <SafeAreaView style={{ backgroundColor: "#ea580c" }} />
      <SafeAreaView style={{ backgroundColor: "#D4D4D8" }}>
        <Box w="100%" h="368px" bg="orange.600" borderBottomRadius="40px">
          <Center h="100%">
            <Avatar
              w="40"
              h="40"
              source={{
                uri: "https://avatars.githubusercontent.com/u/29102493?v=4",
              }}
            />
            <Box mt="20px">
              <Text bold color="black" fontSize="20px">
                Arthur Prasniski Ventura
              </Text>
            </Box>
            <Box flexDirection="row" mt="20px">
              <Box flexDirection="row" mr="10px">
                <Text bold color="white" fontSize="12px">
                  Rua:
                </Text>
                <Text bold color="black" fontSize="12px">
                  Ispsum dolor sit amet
                </Text>
              </Box>
              <Box flexDirection="row">
                <Text bold color="white" fontSize="12px">
                  Cidade:
                </Text>
                <Text bold color="black" fontSize="12px">
                  Ispsum dolor
                </Text>
              </Box>
            </Box>
            <Box flexDirection="row" mt="20px">
              <Box flexDirection="row" mr="10px">
                <Text bold color="white" fontSize="12px">
                  Número:
                </Text>
                <Text bold color="black" fontSize="12px">
                  1234
                </Text>
              </Box>
              <Box flexDirection="row">
                <Text bold color="white" fontSize="12px">
                  UF:
                </Text>
                <Text bold color="black" fontSize="12px">
                  RS
                </Text>
              </Box>
            </Box>
          </Center>
        </Box>
        <Center h="60%">
          <PrimaryButton>Editar Perfil</PrimaryButton>
          <Box mt="20px">
            <SecondaryButton>Deletar Perfil</SecondaryButton>
          </Box>
        </Center>
      </SafeAreaView>
    </>
  );
};
