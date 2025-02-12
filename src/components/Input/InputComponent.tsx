import React from "react";
import { SafeAreaView, StyleSheet, TextInput, TextStyle } from "react-native";

interface InputProps {
  placeholder: string;
  inputStyle?: TextStyle;
}

export const InputComponent: React.FC<InputProps> = ({ placeholder, inputStyle, ...props  }) => {
  return (
    <SafeAreaView style={styles.container}>
      <TextInput
        keyboardType="default"
        placeholder={placeholder}
        style={StyleSheet.flatten([styles.input, inputStyle])}
        {...props}
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
