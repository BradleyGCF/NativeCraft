import React from 'react';
import {SafeAreaView, StyleSheet, TextInput} from 'react-native';

interface InputProps {
  text: string
}

export const TextInputComponent: React.FC<InputProps> = ({text}) => {

  return (
    <SafeAreaView style={{marginTop: 60}}>
      <TextInput
        style={styles.input}
        placeholder={text}
      />
      <TextInput
        style={styles.input}
        placeholder="Ingresar Email"
        keyboardType="email-address"
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  input: {
    width: 120,
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
});