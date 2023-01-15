import React from "react";
import { View, Text, TextInput, Button, Alert } from "react-native";
import { connect } from "react-redux";

const ToDo = (props) => {
    const handleSubmit = () => {
      if (!props.todo) {
        Alert.alert('Error', 'Please enter a to-do item');
        return;
      }
      props.addTodo(props.todo);
      props.updateTodo('');
    };
    const handleDelete = (index) => {
      props.deleteTodo(index)
    }
    return (
      <View>
        <TextInput
          value={props.todo}
          onChangeText={text => props.updateTodo(text)}
          placeholder="Enter a to-do item"
        />
        <Button title="Add" onPress={handleSubmit} />
        <View>
          {props.todos.map((item, index) => (
            <View key={index}>
              <Text >{item}</Text>
              <Button title="Delete" onPress={() => handleDelete(item)}/>
            </View>
          ))}
        </View>
      </View>
    );
  };
  
  const mapStateToProps = state => {
    return {
      todos: state.todos,
      todo: state.todo,
    };
  };
  
  const mapDispatchToProps = {
      addTodo: (todo) => ({type: 'ADD_TODO', payload: todo}),
      updateTodo: (todo) => ({type: 'UPDATE_TODO', payload: todo}),
      deleteTodo: (todo) => ({type: 'DELETE_TODO', payload: todo})
  }
  
  export default connect(mapStateToProps, mapDispatchToProps)(ToDo);
