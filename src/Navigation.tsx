import { Ionicons } from "@expo/vector-icons";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import { SettingScreen } from "./screens/SettingScreen";
import Home from "./screens/Home";

const Tab = createBottomTabNavigator();

export const Tabs = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarActiveTintColor: "blue",
        tabBarInactiveTintColor: "gray",
      }}
    >
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarIcon: ({ color }) => (
            <Ionicons name="home" color={color} size={25} />
          ),
          tabBarBadge: 2,
        }}
      />
      <Tab.Screen
        name="Settings"
        component={SettingScreen}
        options={{
          tabBarIcon: ({ color }) => (
            <Ionicons name="settings" color={color} size={25} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export const Navigation = () => {
  return (
    <NavigationContainer>
      <Tabs />
    </NavigationContainer>
  );
};
