import React, { useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { Tabs } from './src/Navigation';

export default function App() {

  return (
      <NavigationContainer>
        <Tabs />
      </NavigationContainer>
  );
}
