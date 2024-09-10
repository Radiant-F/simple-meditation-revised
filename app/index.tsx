import { StatusBar, StyleSheet, Text, View } from "react-native";
import { Background, Gap, ButtonPrimary } from "@/components";
import { Href, router } from "expo-router";

const App = () => {
  return (
    <View style={{ flex: 1 }}>
      <Background />
      <Gap height={40} />
      <Text style={styles.textTitle}>Simple Meditation</Text>
      <Gap height={10} />
      <Text style={styles.textSubtitle}>
        Simplifying Meditation for Everyone
      </Text>
      <Gap flex={1} />
      <ButtonPrimary
        title="Get Started"
        onPress={() => router.push("/meditation")}
      />
      <Gap height={30} />
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  textSubtitle: {
    color: "white",
    textAlign: "center",
    fontSize: 19,
  },
  textTitle: {
    color: "white",
    textAlign: "center",
    fontSize: 30,
    fontWeight: "bold",
  },
});
