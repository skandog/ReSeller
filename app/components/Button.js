import React from "react";
import { TouchableOpacity, StyleSheet, Text } from "react-native";

import colors from "../config/colors";

function Button({ title, onPress, color = "primary" }) {
  return (
    <TouchableOpacity
      style={[styles.button, { backgroundColor: colors[color] }]}
      onPress={onPress}
      activeOpacity={0.5}
    >
      <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
  );
}

export default Button;

const styles = StyleSheet.create({
  button: {
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
    paddingVertical: 10,
    width: "100%",
    marginVertical: 10,
  },
});
