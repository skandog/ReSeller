import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import ToDo from "./ToDo";

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your buuuuggomg app!</Text>
      <StatusBar style="auto" />
      <ToDo />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "purple",
    alignItems: "center",
    justifyContent: "center",
  },
});
