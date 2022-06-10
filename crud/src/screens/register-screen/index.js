import React from "react";
import { SafeAreaView } from "react-native";
import { Center, Avatar, Box, FormControl, Text } from "native-base";
import { ButtonUpload } from "../../components/buttons/button-upload";
import { TextInput } from "../../components/input";
import { PrimaryButton } from "../../components/buttons/primary-button";


export const FormScreen = () => {
  return (
    <SafeAreaView style={{ backgroundColor: '#D4D4D8' }}>
      <Center h="100%" bg="dark.600">
        <Box>
          <Avatar bg="muted.500" h="40" w="40">
            IMG
          </Avatar>
        </Box>
        <Box ml="80px" mt="-25px">
          <ButtonUpload />
        </Box>
        <Box mb="25px" w="360px">
          <FormControl.Label ml="12px">
            <Text bold>Nome</Text>
          </FormControl.Label>
          <TextInput />
        </Box>
        <Box w="360px">
          <FormControl.Label ml="12px">
            <Text bold>CEP</Text>
          </FormControl.Label>
          <TextInput />
        </Box>
        <Text fontSize="12px">
          busque automaticamente seu edereço atraves do cep
        </Text>
        <Box flexDirection="row" mt="47px">
          <Box w="208px" mr="34px">
            <FormControl.Label ml="12px">
              <Text bold>Logradouro</Text>
            </FormControl.Label>
            <TextInput />
          </Box>
          <Box w="109px">
            <FormControl.Label ml="12px">
              <Text bold>Número</Text>
            </FormControl.Label>
            <TextInput />
          </Box>
        </Box>
        <Box flexDirection="row" mt="16px">
          <Box w="208px" mr="34px">
            <FormControl.Label ml="12px">
              <Text bold>Bairro</Text>
            </FormControl.Label>
            <TextInput />
          </Box>
          <Box w="109px">
            <FormControl.Label ml="12px">
              <Text bold>UF</Text>
            </FormControl.Label>
            <TextInput />
          </Box>
        </Box>
        <Box mt="50px">
          <PrimaryButton>salvar</PrimaryButton>
        </Box>
      </Center>
    </SafeAreaView>
  );
};
