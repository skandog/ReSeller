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
} from "react-native";
import ToDo from "./ToDo";
import { Provider } from "react-redux";
import store from "./store";

export default function App() {
  return (
    <Provider store={store}>
      <SafeAreaView style={styles.container}>
        <Text>This is a todo app</Text>
        <TouchableHighlight onPress={() => console.log("image tapped")}>
          <Image
            fadeDuration={1000}
            source={{
              width: 200,
              height: 300,
              uri: "https://picsum.photos/200/300",
            }}
          />
        </TouchableHighlight>
        {/* Bative only really works with views, and not on iOS */}
        <TouchableNativeFeedback>
          <View
            style={{
              width: 200,
              height: 70,
              backgroundColor: "tomato",
              marginTop: 20,
            }}
          ></View>
        </TouchableNativeFeedback>
        {/* <StatusBar style="auto" /> */}
        <Button
          // This only works in iOS
          title="alert.prompt"
          onPress={() => {
            Alert.prompt("Title", "Message", (text) => console.log(text));
          }}
        />
        <ToDo />
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
    marginTop: StatusBar.currentHeight,
  },
});
