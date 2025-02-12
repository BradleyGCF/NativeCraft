import React from 'react';
import { TouchableOpacity, StyleSheet, Text, ViewStyle, TextStyle } from 'react-native';

interface ButtonProps {
  title: string;
  onPress?: () => void;
  buttonStyle?: ViewStyle;
  textStyle?: TextStyle; 
}

export const ButtonComponent: React.FC<ButtonProps> = ({ title, onPress, buttonStyle, textStyle }) => {
  const handlePress = () => {
    console.log('Presionado!');
    onPress?.();
  };

  return (
    <TouchableOpacity
    style={StyleSheet.flatten([styles.button, buttonStyle])}
      onPress={handlePress}
    >
      <Text style={StyleSheet.flatten([styles.text, textStyle])}>
        {title}
      </Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
  backgroundColor: 'blue',
  padding: 10,
  borderRadius: 10,
  marginHorizontal: 120,
  marginTop: 80
  },
  text: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
    textAlign: "center"
  },
});
