import React from "react";
import { SafeAreaView, StyleSheet, TextInput } from "react-native";
export const TextInputComponent = ({ text }) => {
    return (<SafeAreaView style={styles.container}>
      <TextInput style={styles.input} placeholder={text} keyboardType="default"/>
    </SafeAreaView>);
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
