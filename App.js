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
import {
  useDimensions,
  useDeviceOrientation,
} from "@react-native-community/hooks";
import ToDo from "./ToDo";
import { Provider } from "react-redux";
import store from "./store";

export default function App() {
  return (
    <Provider store={store}>
      <View
        style={{
          backgroundColor: "#fff",
          flex: 1,
          flexDirection: "row",
        }}
      >
        <View style={{ backgroundColor: "tomato", width: 100, height: 100 }} />
        <View
          style={{ backgroundColor: "dodgerblue", width: 100, height: 100 }}
        />
        <View style={{ backgroundColor: "gold", width: 100, height: 100 }} />
      </View>
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
