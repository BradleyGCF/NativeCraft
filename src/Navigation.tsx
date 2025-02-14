import React from "react";
import { createBottomTabNavigator, BottomTabNavigationOptions } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";
import { NavigationContainer } from "@react-navigation/native";
import { Home } from "./screens/Home";
import { SettingScreen } from "./screens/SettingScreen";

const Tab = createBottomTabNavigator();

interface TabsProps {
  screenOptions?: Partial<BottomTabNavigationOptions>;
}

export const Tabs: React.FC<TabsProps> = ({ screenOptions = {} }) => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarActiveTintColor: "blue",
        tabBarInactiveTintColor: "gray",
        ...screenOptions,
      }}
    >
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarIcon: ({ color }) => <Ionicons name="home" color={color} size={25} />,
          tabBarBadge: 2,
        }}
      />
      <Tab.Screen
        name="Settings"
        component={SettingScreen}
        options={{
          tabBarIcon: ({ color }) => <Ionicons name="settings" color={color} size={25} />,
        }}
      />
    </Tab.Navigator>
  );
};

export const Navigation = () => {
  return (
    <NavigationContainer>
      <Tabs
        screenOptions={{
          tabBarActiveTintColor: "green",
          tabBarInactiveTintColor: "red",
          tabBarStyle: { backgroundColor: "#222" }
        }}
      />
    </NavigationContainer>
  );
};
