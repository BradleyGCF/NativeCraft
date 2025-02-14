import React from "react";
import { Ionicons } from "@expo/vector-icons";
import { createBottomTabNavigator, BottomTabNavigationOptions } from "@react-navigation/bottom-tabs";

const Tab = createBottomTabNavigator();

export interface ScreenConfig {
  component: React.ComponentType<any>;
  iconName?: React.ComponentProps<typeof Ionicons>["name"];
  customIcon?: ({ color, size }: { color: string; size: number }) => React.ReactNode;
}

export interface NavigationProps {
  screens: { [key: string]: ScreenConfig };
  tabBarOptions?: Partial<BottomTabNavigationOptions>;
}

export const Navigation: React.FC<NavigationProps> = ({ screens, tabBarOptions = {} }) => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarActiveTintColor: "blue",
        tabBarInactiveTintColor: "gray",
        ...tabBarOptions,
      }}
    >
      {Object.entries(screens).map(([name, config]) => (
        <Tab.Screen
          key={name}
          name={name}
          component={config.component}
          options={{
            tabBarIcon: ({ color, size }) => {
              if (config.customIcon) {
                return config.customIcon({ color, size });
              } else if (config.iconName) {
                return <Ionicons name={config.iconName} color={color} size={size} />;
              }
              return null;
            },
          }}
        />
      ))}
    </Tab.Navigator>
  );
};
