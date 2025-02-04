import React from "react";
import { View } from "react-native";
import { Button } from "../modules/library/components/Button/Button";
import { ModalComponent } from "../modules/library/components/Modal/Modal";
import { SwitchComponent } from "../modules/library/components/Switch/Switch";
import { TextInputComponent } from "../modules/library/components/Input/Input";
export const Home = () => {
    return (<View style={{ flex: 1, marginTop: "10%", justifyContent: "center", alignItems: "center" }}>
      <Button title="Presionar" onPress={() => console.log("Botón presionado")}/>
      <ModalComponent />
      <SwitchComponent />
      <TextInputComponent text="Ingresa un texto"/>
    </View>);
};
export default Home;
