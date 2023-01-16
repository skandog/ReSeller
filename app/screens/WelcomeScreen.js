import React from "react";
import { Image, ImageBackground, StyleSheet, View, Text } from "react-native";
import Button from "../components/Button";
import colors from "../config/colors";

function WelcomeScreen(props) {
  return (
    <ImageBackground
      style={styles.background}
      source={require("../assets/background.jpg")}
    >
      <View style={styles.logoContainer}>
        <Image
          style={styles.logo}
          source={require("../assets/skandy-logo-v3.png")}
        />
        <Text style={styles.text}>Get rid of old stufff for dosh</Text>
      </View>
      <Button title={"Login"} />
      {/* <View style={styles.loginButton}></View> */}
      <View style={styles.registerButton}></View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
  },
  logo: {
    width: 150,
    height: 100,
  },
  logoContainer: {
    position: "absolute",
    top: 30,
    alignItems: "center",
  },
  loginButton: {
    width: "100%",
    height: 70,
    backgroundColor: colors.primary,
  },
  registerButton: {
    width: "100%",
    height: 70,
    backgroundColor: colors.secondary,
  },
  text: {
    color: colors.primary,
    fontFamily: "Roboto",
    fontSize: 20,
    fontWeight: "700",
    textTransform: "capitalize",
    paddingTop: 10,
  },
});

export default WelcomeScreen;
