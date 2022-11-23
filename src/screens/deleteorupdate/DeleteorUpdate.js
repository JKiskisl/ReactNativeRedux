import React, { useState, useEffect } from 'react'
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Alert,
} from 'react-native'
import { firebase } from '@react-native-firebase/database'
import { useCurrentUser } from '../../Core/onboarding'

function DeleteorUpdate({ route }) {
  const [name, setName] = useState('')
  const [description, setDescription] = useState('')
  const [price, setPrice] = useState('')
  const [userID, setuserID] = useState('')

  const currentUser = useCurrentUser()

  const { postpass } = route.params

  const reference = firebase
    .app()
    .database('https://fir-addtest-e6b1c-default-rtdb.firebaseio.com/')

  handleSubmit = () => {
    const newRef = reference.ref('posts/' + postpass.id)
    newRef
      .update({
        id: postpass.id,
        name: name,
        description: description,
        price: price,
        userPosted: postpass.userPosted,
      })
      .then(() => console.log('Data updated'))
      
    setName('')
    setDescription('')
    setPrice('')
    setuserID('')
  }

  const deleteItem = (id) => {
    reference
      .ref('posts/' + id)
      .remove()
      .then(() => console.log('success', id))
      .catch(() => console.log('nope'))
  }

  const successDelete = () =>{
    Alert.alert("Deleted succesfully")
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Add post</Text>
      <View styles={styles.inputContainer}>
        <TextInput
          style={styles.input}
          value={name}
          placeholder={postpass.name}
          onChangeText={text => setName(text)}
        />
        <TextInput
          style={styles.input}
          value={description}
          placeholder={postpass.description}
          onChangeText={text => setDescription(text)}
        />
        <TextInput
          style={styles.input}
          value={price}
          placeholder={postpass.price}
          onChangeText={text => setPrice(text)}
        />
      </View>
      <View style={styles.addButtonContainer}>
        <TouchableOpacity onPress={handleSubmit}>
          <View style={styles.addButton}>
            <Text style={styles.addButtonText}>Update</Text>
          </View>
        </TouchableOpacity>
      </View>
      <View style={styles.addButtonContainer}>
        <TouchableOpacity onPress={() => deleteItem(postpass.id)}
        onPressIn={() => successDelete()}>
          <View style={styles.deleteButton}>
            <Text style={styles.addButtonText}>DELETE</Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
    
  )
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
  deleteButton: {
    width: 120,
    height: 40,
    backgroundColor: 'red',
    marginLeft: 10,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 20,
  },
  title: {
    paddingTop: 30,
    paddingBottom: 20,
    fontSize: 20,
    textAlign: 'center',
    fontWeight: 'bold',
  },
})

export default DeleteorUpdate
