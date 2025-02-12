import React, { useState } from "react";
import { Modal, StyleSheet, View, ViewStyle } from "react-native";
import { ButtonComponent } from "../ButtonComponent";
interface ModalProps {
  modalStyle?: ViewStyle;
  buttonStyle?: ViewStyle;
}

export const ModalComponent: React.FC<ModalProps> = ({
  modalStyle,
  buttonStyle,
}) => {
  const [visible, setVisible] = useState(false);
  return (
    <View style={StyleSheet.flatten([styles.container, buttonStyle])}>
      <ButtonComponent title="Abrir Modal" onPress={() => setVisible(true)} />
      <Modal visible={visible} transparent>
        <View style={StyleSheet.flatten([styles.modal, modalStyle])}>
          <ButtonComponent
            title="Cerrar Modal"
            onPress={() => setVisible(false)}
          />
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: "10%",
  },
  modal: {
    marginHorizontal: 80,
    padding: 10,
    marginTop: "58%",
  },
});
