import { ScrollView, StatusBar, StyleSheet, Text, View } from "react-native";
import { router, useLocalSearchParams } from "expo-router";
import { Background, Gap, Header } from "@/components";

const AffirmationDetail = () => {
  const { image, affirmation, title } = useLocalSearchParams();
  const formattedAffirmation: string[] = affirmation
    .toString()
    .split(".")
    .map((text) => text.trim())
    .filter((text) => text !== "")
    .map((text) => text + ".");

  return (
    <View style={{ flex: 1 }}>
      <Background backgroundSource={image as any} />

      <ScrollView>
        <Gap height={20} />
        <Header title={title as string} onPress={() => router.back()} />
        <View style={{ padding: 20 }}>
          {formattedAffirmation.map((text) => (
            <Text key={text} style={styles.textAffirmation}>
              {text}
            </Text>
          ))}
        </View>
      </ScrollView>
    </View>
  );
};

export default AffirmationDetail;

const styles = StyleSheet.create({
  textAffirmation: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
    fontSize: 25,
    marginVertical: 20,
  },
});
