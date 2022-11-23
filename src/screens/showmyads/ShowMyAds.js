import { StyleSheet, Text, View, Button } from 'react-native'
import React, { useEffect, useState } from 'react'

import { firebase, database } from '@react-native-firebase/database'
import { useCurrentUser } from '../../Core/onboarding'
import DeleteorUpdate from '../deleteorupdate/DeleteorUpdate'
import { useRoute } from '@react-navigation/native'

import { FlatList } from 'react-native-gesture-handler'

function ShowMyAds(props) {
  const [posts, setPosts] = useState([])

  const {navigation} = props
  const currentUser = useCurrentUser()

  const reference = firebase
    .app()
    .database('https://fir-addtest-e6b1c-default-rtdb.firebaseio.com/')

  useEffect(() => {
    reference.ref('posts').on('value', snapshot => {
      setPosts([])
      snapshot.forEach(child => {
        const newObj = {
          id: child.val().id,
          name: child.val().name,
          price: child.val().price,
          description: child.val().description,
          userPosted: child.val().userPosted,
        }

        setPosts(emptyArray => [...emptyArray, newObj])
      })
    })
  }, [])

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Posts</Text>
      <FlatList
        data={posts.filter(posts => posts.userPosted === currentUser?.id)}
        renderItem={item => {
          return (
            <View style={styles.posts}>
              <Button title={item.item.name}
              style={styles.name} 
              onPress={()=> navigation.navigate('DeleteorUpdate', 
                {postpass: item.item})}>
              </Button>
            </View>
          )
        }}
        keyExtractor={item => item.id}
        scrollEnabled={true}
      />
    </View>
  )
}

export default ShowMyAds

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  postsContainer: {
    borderTopWidth: 3,
    borderTopColor: '#ddd',
    flex: 1,
  },
  posts: {
    padding: 20,
    backgroundColor: '#ededed',
    borderColor: '#ddd',
    borderWidth: 1,
    borderRadius: 10,
    marginBottom: 5,
  },
  name: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  price: {
    fontSize: 14,
    color: '#999',
  },
  description: {
    fontSize: 14,
    color: '#999',
  },
  title: {
    paddingTop: 30,
    paddingBottom: 20,
    fontSize: 20,
    textAlign: 'center',
    fontWeight: 'bold',
  },
})
