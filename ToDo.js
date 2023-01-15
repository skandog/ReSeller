import React, { useState } from "react";
import { View, Text, TextInput, Button, Alert } from "react-native";
import { connect } from "react-redux";

const ToDo = (props) => {
  const handleSubmit = () => {
    if (!props.todo) {
      Alert.alert("Error", "Please enter a to-do item");
      return;
    }
    props.addTodo(props.todo);
    props.updateTodo("");
  };

  return (
    <View>
      <TextInput
        value={props.todo}
        onChangeText={(text) => props.updateTodo(text)}
        placeholder="Enter a to-do item"
      />
      <Button title="Add" onPress={handleSubmit} />
      <View>
        {props.todos.map((item, index) => (
          <Text key={index}>{item}</Text>
        ))}
      </View>
    </View>
  );
};

const mapStateToProps = (state) => {
  return {
    todos: state.todos,
    todo: state.todo,
  };
};

export default ToDo;
