import { StatusBar } from "expo-status-bar";
import { Image, StyleSheet, TouchableOpacity, View, Text } from "react-native";

export function CustomRatingBar({ maxRating, rating, setRate }) {
  const filedStarUri = "./assets/star_filled.png";
  const holoStarUri = "./assets/star_corner.png";

  return (
    <View style={styles.container}>
      {maxRating.map((item, key) => {
        return (
          <TouchableOpacity
            activeOpacity={0.7}
            key={item}
            onPress={() => {
              setRate(item);
            }}
          >
            <Image
              style={styles.image}
              source={
                item <= rating ? require(filedStarUri) : require(holoStarUri)
              }
            />
          </TouchableOpacity>
        );
      })}

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "center",
  },
  image: {
    top:20,
    resizeMode: "cover",
    height:50,
    width:50,
  },
});
