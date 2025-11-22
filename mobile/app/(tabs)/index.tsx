import { Link } from "expo-router";
import { Text, View, StyleSheet } from "react-native";

export default function Index() {
  return (
    <View
      style={styles.view}
    >
      <Text>Ini adalah halaman Hom</Text>
      
    </View>
  );
}

const styles = StyleSheet.create({
  view: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      },
      navButton: {
          width: 100,
          height: 20,
          backgroundColor: "coral",
          borderRadius: 10,
          textAlign: "center",
        }
});
