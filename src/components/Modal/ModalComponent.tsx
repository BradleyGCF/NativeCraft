import React from "react";
import {
  Modal,
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ViewStyle,
  TextStyle,
} from "react-native";

interface ModalComponentProps {
  visible: boolean;
  onClose: () => void;
  modalOverlayStyle?: ViewStyle;
  modalContentStyle?: ViewStyle;
  modalText?: string;
  textStyle?: TextStyle;
  buttonStyle?: ViewStyle;
  buttonTextStyle?: TextStyle;
}

export const ModalComponent: React.FC<ModalComponentProps> = ({
  visible,
  onClose,
  modalOverlayStyle,
  modalContentStyle,
  modalText = "Modal personalizado",
  textStyle,
  buttonStyle,
  buttonTextStyle,
}) => {
  return (
    <Modal
      visible={visible}
      transparent
      animationType="fade"
      onRequestClose={onClose}
    >
      <View style={[styles.modalOverlay, modalOverlayStyle]}>
        <View style={[styles.modalContent, modalContentStyle]}>
          <Text style={[styles.modalText, textStyle]}>{modalText}</Text>
          <TouchableOpacity
            style={[styles.button, buttonStyle]}
            onPress={onClose}
          >
            <Text style={[styles.buttonText, buttonTextStyle]}>
              Cerrar Modal
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modalOverlay: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,0.5)",
    justifyContent: "center",
    alignItems: "center",
  },
  modalContent: {
    width: "80%",
    backgroundColor: "#fff",
    padding: 20,
    borderRadius: 10,
    alignItems: "center",
  },
  modalText: {
    fontSize: 18,
    marginBottom: 20,
    textAlign: "center",
  },
  button: {
    backgroundColor: "#6200EE",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
  },
});
