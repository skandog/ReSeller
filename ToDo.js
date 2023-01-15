import React from "react";
import {
  View,
  Text,
  TextInput,
  Button,
  Alert,
  TouchableOpacity,
} from "react-native";
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
  const handleDelete = (index) => {
    props.deleteTodo(index);
  };
  return (
    <View>
      <TextInput
        style={{
          fontSize: 30,
          marginTop: 10,
        }}
        value={props.todo}
        onChangeText={(text) => props.updateTodo(text)}
        placeholder="Enter a to-do item"
      />
      <Button title="Add" onPress={handleSubmit} />
      <View
        style={{
          marginTop: 10,
        }}
      >
        {props.todos.map((item, index) => (
          <View
            key={index}
            style={{
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-around",
            }}
          >
            <Text
              style={{
                fontSize: 30,
              }}
            >
              {item}
            </Text>
            <TouchableOpacity onPress={() => handleDelete(item)}>
              <Text style={{ marginLeft: 10, color: "tomato" }}>x</Text>
            </TouchableOpacity>
          </View>
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

const mapDispatchToProps = {
  addTodo: (todo) => ({ type: "ADD_TODO", payload: todo }),
  updateTodo: (todo) => ({ type: "UPDATE_TODO", payload: todo }),
  deleteTodo: (todo) => ({ type: "DELETE_TODO", payload: todo }),
};

export default connect(mapStateToProps, mapDispatchToProps)(ToDo);
