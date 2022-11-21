import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native';
import { firebase } from '@react-native-firebase/database';




function Addnewad() {
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [price, setPrice] = useState('');

    const reference = firebase
        .app()
        .database('https://fir-addtest-e6b1c-default-rtdb.firebaseio.com/')
        .ref('posts')

    handleSubmit = () => {
        const newRef = reference.push();
        newRef.set({
            id: newRef.key,
            name: name,
            description: description,
            price: price
        })
        .then(() => console.log('Data inserted'));
        setName('')
        setDescription('')
        setPrice('')
    }

    

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Add post</Text>
            <View styles={styles.inputContainer}>
                <TextInput
                    style={styles.input}
                    value={name}
                    placeholder="name"
                    onChangeText={(text) => setName(text)}
                />
                <TextInput
                    style={styles.input}
                    value={description}
                    placeholder="description"
                    onChangeText={(text) => setDescription(text)}
                />
                <TextInput
                  style={styles.input}
                  value={price}
                  placeholder="price"
                  onChangeText={(text) => setPrice(text)}
                />

            </View>
            <View style={styles.addButtonContainer}>
                <TouchableOpacity onPress={handleSubmit}>
                    <View style={styles.addButton}>
                        <Text style={styles.addButtonText}>
                            ADD
                        </Text>
                    </View>
                </TouchableOpacity>
            </View>

        </View>
    );
}

const styles = StyleSheet.create({
  container: {
      flex: 2,
  },
  inputContainer: {
      backgroundColor: '#ffffff',
      borderTopColor: '#ededed',
      borderTopWidth: 1,
      flexDirection: 'row',
      height: 60,
      width: 60,
  },
  inputWrapper: {
      flex: 2,
  },
  input: {
      height: 40,
      padding: 7,
      backgroundColor: '#ededed',
      borderColor: '#ddd',
      borderWidth: 1,
      borderRadius: 10,

      marginBottom: 5,
  },
  addButtonText: {
      fontSize: 24,
      lineHeight: 24,
  },
  addButton: {
      width: 120,
      height: 40,
      backgroundColor: '#6cc900',
      marginLeft: 10,
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: 20,
  },
  addButtonContainer: {
      flex: 4,
      justifyContent: 'flex-start',
      alignItems: 'center',
  },
  title: {
      paddingTop: 30,
      paddingBottom: 20,
      fontSize: 20,
      textAlign: 'center',
      fontWeight: 'bold',
  },
});

export default Addnewad