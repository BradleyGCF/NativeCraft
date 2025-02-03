import { StatusBar } from "expo-status-bar";
import { StyleSheet, View } from "react-native";
import { ModalComponent } from "./src/components/Modal/Modal";
import { Button } from "./src/components/Button/Button";
import { TextInputComponent } from "./src/components/Input/Input";


export default function App() {
  return (

      <View style={styles.container}>
        <Button title="Button" onPress={() => console.log('Holaa')}/>
        <ModalComponent/>
        <TextInputComponent text="Ingresar Texto"/>
        <StatusBar style="auto"  />
      </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 70,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
