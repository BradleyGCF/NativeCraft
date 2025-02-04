import React, { useState } from "react";
import { View, Text, Switch, StyleSheet } from "react-native";
export const SwitchComponent = () => {
    const [isEnabled, setIsEnabled] = useState(false);
    const toggleSwitch = () => setIsEnabled((previousState) => !previousState);
    return (<View style={styles.container}>
      <Text>{isEnabled ? "Activado" : "Desactivado"}</Text>
      <Switch trackColor={{ false: "#767577", true: "#3b04ff" }} thumbColor={isEnabled ? "#f4f3f4" : "#f4f3f4"} onValueChange={toggleSwitch} value={isEnabled}/>
    </View>);
};
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
});
