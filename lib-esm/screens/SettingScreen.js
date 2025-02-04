import { View } from "react-native";
import { SwitchComponent } from "../modules/library/components/Switch/Switch";
import { TextInputComponent } from "../modules/library/components/Input/Input";
export const SettingScreen = () => {
    return (<View style={{ flex: 1, justifyContent: "center" }}>
      <SwitchComponent />
      <TextInputComponent text="Enter a text"/>
    </View>);
};
