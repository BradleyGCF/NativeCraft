import React from "react";
import { SafeAreaView, StyleSheet, TextInput } from "react-native";

interface InputProps {
  text: string;
}

export const TextInputComponent: React.FC<InputProps> = ({ text }) => {
  return (
    <SafeAreaView style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder={text}
        keyboardType="default"
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  input: {
    width: 120,
    height: 40,
    borderWidth: 1,
    padding: 10,
  },
  container: {
    flex: 1,
    marginTop: "-90%",
    justifyContent: "center",
    alignItems: "center",
  },
});
