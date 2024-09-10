import { Stack } from "expo-router";

const AffirmationLayout = () => {
  return (
    <Stack screenOptions={{ headerShown: false }}>
      <Stack.Screen name="index" />
      <Stack.Screen name="[itemId]" />
    </Stack>
  );
};

export default AffirmationLayout;
