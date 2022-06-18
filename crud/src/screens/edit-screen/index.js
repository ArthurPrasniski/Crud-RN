import React, { useEffect, useState } from "react";
import { SafeAreaView } from "react-native";
import {
  Center,
  Avatar,
  Box,
  FormControl,
  Text,
  IconButton,
  Icon,
} from "native-base";
import { ButtonUpload } from "../../components/buttons/button-upload";
import { TextInput } from "../../components/input";
import { PrimaryButton } from "../../components/buttons/primary-button";
import { db } from "../../config";
import { collection, updateDoc, getDocs, doc } from "firebase/firestore";
import { AntDesign } from "@expo/vector-icons";

export const EditScreen = ({ navigation, id }) => {
  const [name, setName] = useState("");
  const [cep, setCep] = useState("");
  const [logradouro, setLogradouro] = useState("");
  const [numero, setNumero] = useState("");
  const [bairro, setBairro] = useState("");
  const [uf, setUf] = useState("");
  const [users, setUsers] = useState([]);

  const usersCollectionRef = collection(db, "users");

  const handleChangeName = (value) => setName(value);
  const handleChangeCep = (number) => setCep(number);
  const handleChangeLogradouro = (value) => setLogradouro(value);
  const handleChangeNumero = (number) => setNumero(number);
  const handleChangeBairro = (value) => setBairro(value);
  const handleChangeUf = (value) => setUf(value);

  const updateUser = async (id) => {
    const userDoc = doc(usersCollectionRef, id);
    const newFields = {
      name: handleChangeName,
      cep: handleChangeCep,
      logradouro: handleChangeLogradouro,
      numero: setNuhandleChangeNumeromero,
      bairro: handleChangeBairro,
      uf: handleChangeUf,
    };
    await updateDoc(userDoc, newFields);
    navigation.navigate("HomeScreen");
  };

  useEffect(() => {
    const getUsers = async () => {
      const data = await getDocs(usersCollectionRef);
      setUsers(data.docs.map((doc) => ({ ...doc.data([]), id: doc.id })));
    };
    getUsers();
  }, []);

  console.log(users.id)

  return (
    <SafeAreaView style={{ backgroundColor: "#D4D4D8" }}>
      <Center h="100%" bg="dark.600">
        <Box ml="-300px" mb="-10px">
          <IconButton
            size="lg"
            icon={<Icon as={AntDesign} name="left" color="orange.600" />}
            borderRadius="full"
            onPress={() => navigation.navigate("HomeScreen")}
          />
        </Box>
        <Box>
          <Avatar bg="muted.500" h="20" w="20">
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
          <PrimaryButton onPress={updateUser(users.id)}>salvar</PrimaryButton>
        </Box>
      </Center>
    </SafeAreaView>
  );
};
