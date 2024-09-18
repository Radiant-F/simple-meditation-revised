import {
  FlatList,
  StyleSheet,
  Text,
  View,
  StatusBar,
  TouchableNativeFeedback,
  Image,
  ImageProps,
} from "react-native";
import { Background, Gap } from "@/components";
import { AffirmationData } from "@/constants";
import { router } from "expo-router";

const Affirmation = () => {
  return (
    <View style={{ flex: 1 }}>
      <Background
        safeAreaView={false}
        colors={["#2e1f58", "#54426b", "#a790af"]}
      />

      <FlatList
        stickyHeaderHiddenOnScroll
        stickyHeaderIndices={[0]}
        ListHeaderComponent={
          <View style={styles.viewHeader}>
            <Text style={styles.textWelcome}>
              Change your beliefs with affirmations
            </Text>
            <Gap height={10} />
            <Text style={{ color: "white" }}>
              Select the image below to pick affirmation.
            </Text>
          </View>
        }
        nestedScrollEnabled
        data={AffirmationData}
        renderItem={({ item: data }) => {
          return (
            <View style={{ margin: 20 }}>
              <Text style={styles.textDataTitle}>{data.title}</Text>
              <FlatList
                horizontal
                showsHorizontalScrollIndicator={false}
                data={data.data}
                renderItem={({ item }) => {
                  return (
                    <TouchableNativeFeedback
                      useForeground
                      onPress={() =>
                        router.push({
                          pathname: `affirmation/${item.id}` as "/affirmation/",
                          params: {
                            affirmation: item.text,
                            image: item.image,
                            title: data.title,
                          },
                        })
                      }
                    >
                      <View style={styles.btnImgAffirmation}>
                        <Image
                          source={item.image as ImageProps}
                          resizeMethod="resize"
                          style={{ width: "100%", height: "100%" }}
                        />
                      </View>
                    </TouchableNativeFeedback>
                  );
                }}
              />
            </View>
          );
        }}
      />
    </View>
  );
};

export default Affirmation;

const styles = StyleSheet.create({
  viewHeader: {
    margin: 20,
    marginTop: StatusBar.currentHeight ? StatusBar.currentHeight + 20 : 20,
  },
  btnImgAffirmation: {
    width: 120,
    height: 120,
    backgroundColor: "black",
    margin: 5,
    borderRadius: 20,
    elevation: 5,
    overflow: "hidden",
  },
  textDataTitle: {
    color: "white",
    fontWeight: "bold",
    fontSize: 17,
  },
  textWelcome: {
    color: "white",
    fontSize: 25,
    fontWeight: "bold",
  },
});
