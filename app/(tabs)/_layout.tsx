import { Tabs } from "expo-router";
import { MaterialCommunityIcons as Icon } from "@expo/vector-icons";

const TabLayout = () => {
  return (
    <Tabs screenOptions={{ headerShown: false }}>
      <Tabs.Screen
        name="meditation"
        options={{
          tabBarLabel: "Meditate",
          tabBarIcon: ({ focused, color }) => (
            <Icon
              name={focused ? "flower-tulip" : "flower-tulip-outline"}
              size={24}
              color={color}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="affirmation"
        options={{
          tabBarLabel: "Affirmation",
          tabBarIcon: ({ focused, color }) => (
            <Icon
              name={focused ? "book-open-variant" : "book-open-blank-variant"}
              size={24}
              color={color}
            />
          ),
        }}
      />
    </Tabs>
  );
};

export default TabLayout;
