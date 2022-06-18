import React, { useEffect, useState } from "react";
import { Text, Center, Box, Avatar, IconButton, Icon } from "native-base";
import { SafeAreaView } from "react-native";
import { PrimaryButton } from "../../components/buttons/primary-button";
import { db } from "../../config";
import { collection, getDocs, deleteDoc, doc } from "firebase/firestore";
import { AntDesign } from "@expo/vector-icons";

export const HomeScreen = ({ navigation }) => {
  const [users, setUsers] = useState([]);

  const usersCollectionRef = collection(db, "users");

  useEffect(() => {
    const getUsers = async () => {
      const data = await getDocs(usersCollectionRef);
      setUsers(data.docs.map((doc) => ({ ...doc.data([]), id: doc.id })));
    };
    getUsers();
  }, [users]);

  const handleDelete = async (id) => {
    deleteDoc(doc(db, "users", id));
  };

  return (
    <SafeAreaView style={{ backgroundColor: "#D4D4D8" }}>
      <Center h="100%">
        {users.map((user) => (
          <Box
            w="380px"
            h="180px"
            bg="muted.50"
            mb="20px"
            alignItems="center"
            borderRadius="20px"
            flexDirection="row"
            borderLeftWidth="10"
            borderColor="orange.600"
          >
            <Box>
              <Avatar
                w="10"
                h="10"
                ml="20px"
                source={{
                  uri: "https://avatars.githubusercontent.com/u/29102493?v=4",
                }}
              />
              <Text ml="20px">Nome: {user.name}</Text>
              <Text ml="20px">Cep: {user.cep}</Text>
              <Text ml="20px">Logradouro: {user.logradouro}</Text>
              <Text ml="20px">Bairro: {user.bairro}</Text>
              <Text ml="20px">Numero: {user.numero}</Text>
              <Text ml="20px">UF: {user.uf}</Text>
            </Box>
            <Box flexDirection="row" ml="10px" minW="100px">
              <IconButton
                icon={<Icon as={AntDesign} name="edit" color="success.900" />}
                borderRadius="full"
                onPress={() => navigation.navigate("EditScreen")}
              />
              <IconButton
                icon={<Icon as={AntDesign} name="delete" color="red.600" />}
                borderRadius="full"
                onPress={() => handleDelete(user.id)}
              />
            </Box>
          </Box>
        ))}
        <PrimaryButton onPress={() => navigation.navigate("RegisterScreen")}>
          Novo Registro
        </PrimaryButton>
      </Center>
    </SafeAreaView>
  );
};
