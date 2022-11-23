import React, { useState, useEffect } from 'react'
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from 'react-native'
import { firebase } from '@react-native-firebase/database'
import { useCurrentUser } from '../../Core/onboarding'
import { useRoute } from '@react-navigation/native'

function DeleteorUpdate({route}) {


  const {postpass} = route.params
  console.log(postpass)

  return (
    <View>
      <Text>{postpass.name} {postpass.id}</Text>
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
  title: {
    paddingTop: 30,
    paddingBottom: 20,
    fontSize: 20,
    textAlign: 'center',
    fontWeight: 'bold',
  },
})

export default DeleteorUpdate
