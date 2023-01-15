import React, { useState } from 'react';
import { View, Text, TextInput, Button } from 'react-native';

const ToDo = () => {
  const [todo, setTodo] = useState('');
  const [todos, setTodos] = useState([]);

  const handleSubmit = () => {
    setTodos([...todos, todo]);
    setTodo('');
  };

  return (
    <View>
      <TextInput
        value={todo}
        onChangeText={text => setTodo(text)}
        placeholder="Enter a to-do item"
      />
      <Button title="Add" onPress={handleSubmit} />
      <View>
        {todos.map((item, index) => (
          <Text key={index}>{item}</Text>
        ))}
      </View>
    </View>
  );
};

export default ToDo;
