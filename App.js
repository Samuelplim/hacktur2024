import { StatusBar } from "expo-status-bar";
import { StyleSheet, View } from "react-native";
import { CheckIn } from "./src/screens/CheckIn";

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <CheckIn />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
