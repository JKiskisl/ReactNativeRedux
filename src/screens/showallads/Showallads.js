import { StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'

import { firebase, database } from '@react-native-firebase/database'

import { FlatList } from 'react-native-gesture-handler'

function ShowallAds() {
  const [posts, setPosts] = useState([])

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
        }
        setPosts(emptyArray => [...emptyArray, newObj])
      })
    })
  }, [])

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Posts</Text>
      <FlatList
        data={posts}
        renderItem={item => {
          return (
            <View style={styles.posts}>
              <Text style={styles.name}>
                {item.item.name} {item.item.price} {item.item.description}{' '}
                {item.item.id}
              </Text>
            </View>
          )
        }}
        keyExtractor={item => item.id}
        scrollEnabled={true}
      />
    </View>
  )
}

export default ShowallAds

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
