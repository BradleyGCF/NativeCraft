import { ProgressBarAndroidBase, Text, View } from "react-native";
import { SwitchComponent } from '../components/Switch/SwitchComponent';
import { InputComponent } from "../components/Input/InputComponent";
import React, { useState } from "react";
import { ModalComponent } from '../components/Modal/ModalComponent';
export const SettingScreen = () => {
  const [modalVisible, setModalVisible] = useState(false);
  return (
    <View style={{flex: 1, justifyContent: "center"}}>
      <SwitchComponent/>
      <InputComponent placeholder="Enter a text"/>
      <ModalComponent
              visible={modalVisible}
              onClose={() => setModalVisible(false)}
              modalText="Modal personalizado"
              modalOverlayStyle={{ backgroundColor: "rgba(172, 7, 7, 0.7)" }}
              modalContentStyle={{ padding: 30, borderRadius: 15 }}
              textStyle={{ fontSize: 20, fontWeight: "bold", color: "yellow" }}
              buttonStyle={{ backgroundColor: "red" }}
              buttonTextStyle={{ fontSize: 18 }}
            />
    </View>
  );
};
