import { Stack } from "expo-router";

const RootLayout = () => {
  return (
    <Stack
      screenOptions={{
        headerShown: false,
        statusBarTranslucent: true,
        statusBarColor: "transparent",
      }}
    >
      <Stack.Screen name="index" />
    </Stack>
  );
};

export default RootLayout;
