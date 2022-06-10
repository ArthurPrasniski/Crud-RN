import React from "react";
import { NativeBaseProvider } from "native-base";
// import { FormScreen } from "./src/screens/form-screen";
import { HomeScreen } from "./src/screens/home-screen";

export default function App() {
  return (
    <NativeBaseProvider>
      <HomeScreen />
    </NativeBaseProvider>
  );
}
