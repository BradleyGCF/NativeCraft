import React, { useState } from "react";
import { Modal, StyleSheet, View, Text } from "react-native";
import { Button } from "../Button/Button";

export const ModalComponent = () => {
  const [visible, setVisible] = useState(false);
  return (
    <View style={{ marginTop: "10%" }}>
      <Button title="Abrir Modal" onPress={() => setVisible(true)} />
      <Modal visible={visible} transparent>
        <View style={styles.modal}>
        <Button title="Cerrar Modal" onPress={() => setVisible(false)} />
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  modal: {
    marginHorizontal: 80,
    padding: 10,
    marginTop: "58%"
  },
});
