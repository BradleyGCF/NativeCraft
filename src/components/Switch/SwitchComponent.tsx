import React, { useState } from "react";
import { View, Text, Switch, StyleSheet, ViewStyle, TextStyle } from "react-native";

interface SwitchProps {
  switchStyle?: ViewStyle;
  textStyle?: TextStyle;
  trackColorFalse?: string;
  trackColorTrue?: string;
  thumbColor?: string;
}

export const SwitchComponent: React.FC<SwitchProps> = ({
  switchStyle,
  textStyle,
  trackColorFalse = "#767577",
  trackColorTrue = "#3b04ff",
  thumbColor = "#f4f3f4",
}) => {
  const [isEnabled, setIsEnabled] = useState(false);

  const toggleSwitch = () => setIsEnabled((prev) => !prev);

  return (
    <View style={StyleSheet.flatten([styles.container, switchStyle])}>
      <Text style={StyleSheet.flatten([styles.text, textStyle])}>
        {isEnabled ? "Activado" : "Desactivado"}
      </Text>
      <Switch
        onValueChange={toggleSwitch}
        thumbColor={thumbColor}
        trackColor={{ false: trackColorFalse, true: trackColorTrue }}
        value={isEnabled}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 10,
  },
});
