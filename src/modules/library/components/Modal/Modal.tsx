import React, { useState } from "react";
import { Modal, StyleSheet, View } from "react-native";
import { Button } from "../Button/Button";

export const ModalComponent = () => {
  const [visible, setVisible] = useState(false);
  return (
    <View style={{ marginTop: 40 }}>
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
    backgroundColor: "white",
    marginHorizontal: 50,
    padding: 10,
    marginTop: 160,
  },
});
