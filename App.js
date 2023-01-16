// import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  StatusBar,
  Image,
  TouchableHighlight,
  TouchableNativeFeedback,
  Alert,
  Button,
  Platform,
  Dimensions,
} from "react-native";
import ToDo from "./ToDo";
import { Provider } from "react-redux";
import store from "./store";

export default function App() {
  console.log(Dimensions.get("screen"));

  return (
    <Provider store={store}>
      <SafeAreaView style={styles.container}>
        <View
          style={{
            backgroundColor: "dodgerblue",
            height: "30%",
            width: "100%",
          }}
        ></View>
      </SafeAreaView>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "purple",
    alignItems: "center",
    justifyContent: "center",
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
    //marginTop: StatusBar.currentHeight,
  },
});
