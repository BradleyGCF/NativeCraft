import React from 'react';
import { TouchableOpacity, StyleSheet ,Text } from 'react-native';

interface ButtonProps {
  title: string;
  onPress: () => void;
}

export const Button: React.FC<ButtonProps> = ({ title, onPress }) => {
  const handlePress = () => {
    console.log('Presionado!');
    onPress();
  };

  return (
    <TouchableOpacity
      style={styles.button}
      onPress={handlePress}
    >
      <Text style={{ color: 'white', fontSize: 16, textAlign: 'center' }}>
        {title}
      </Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
  backgroundColor: 'blue', padding: 10, borderRadius: 10
  },
});
