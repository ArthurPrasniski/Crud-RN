import React, { useState } from "react";
import { SafeAreaView } from "react-native";
import { Center, Avatar, Box, FormControl, Text } from "native-base";
import { ButtonUpload } from "../../components/buttons/button-upload";
import { TextInput } from "../../components/input";
import { PrimaryButton } from "../../components/buttons/primary-button";
import { db } from "../../config";
import {
  collection,
  getDocs,
  addDoc,
  updateDoc,
  deleteDoc,
  doc,
} from "firebase/firestore";

export const FormScreen = () => {
  const [name, setName] = useState("");
  const [cep, setCep] = useState("");
  const [logradouro, setLogradouro] = useState("");
  const [numero, setNumero] = useState("");
  const [bairro, setBairro] = useState("");
  const [uf, setUf] = useState("");

  const usersCollectionRef = collection(db, "users");

  const handleChangeName = (value) => setName(value);
  const handleChangeCep = (number) => setCep(number);
  const handleChangeLogradouro = (value) => setLogradouro(value);
  const handleChangeNumero = (number) => setNumero(number);
  const handleChangeBairro = (value) => setBairro(value);
  const handleChangeUf = (value) => setUf(value);

  const createUser = async () => {
    await addDoc(usersCollectionRef, {
      name: name,
      cep: cep,
      logradouro: logradouro,
      numero: numero,
      bairro: bairro,
      uf: uf,
    });
  };

  return (
    <SafeAreaView style={{ backgroundColor: "#D4D4D8" }}>
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
          <TextInput value={name} onChangeText={handleChangeName} />
        </Box>
        <Box w="360px">
          <FormControl.Label ml="12px">
            <Text bold>CEP</Text>
          </FormControl.Label>
          <TextInput value={cep} onChangeText={handleChangeCep} />
        </Box>
        <Text fontSize="12px">
          busque automaticamente seu edereço atraves do cep
        </Text>
        <Box flexDirection="row" mt="47px">
          <Box w="208px" mr="34px">
            <FormControl.Label ml="12px">
              <Text bold>Logradouro</Text>
            </FormControl.Label>
            <TextInput
              value={logradouro}
              onChangeText={handleChangeLogradouro}
            />
          </Box>
          <Box w="109px">
            <FormControl.Label ml="12px">
              <Text bold>Número</Text>
            </FormControl.Label>
            <TextInput value={numero} onChangeText={handleChangeNumero} />
          </Box>
        </Box>
        <Box flexDirection="row" mt="16px">
          <Box w="208px" mr="34px">
            <FormControl.Label ml="12px">
              <Text bold>Bairro</Text>
            </FormControl.Label>
            <TextInput value={bairro} onChangeText={handleChangeBairro} />
          </Box>
          <Box w="109px">
            <FormControl.Label ml="12px">
              <Text bold>UF</Text>
            </FormControl.Label>
            <TextInput value={uf} onChangeText={handleChangeUf} />
          </Box>
        </Box>
        <Box mt="50px">
          <PrimaryButton onPress={createUser}>salvar</PrimaryButton>
        </Box>
      </Center>
    </SafeAreaView>
  );
};
