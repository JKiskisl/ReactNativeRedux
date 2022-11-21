import { StyleSheet, Text, View, } from 'react-native'
import React, { useEffect, useState } from 'react'

import {firebase, database} from '@react-native-firebase/database';


import { FlatList } from 'react-native-gesture-handler';


function ShowallAds() {
    const [posts, setPosts] = useState([]);

    const reference = firebase
    .app()
    .database('https://fir-addtest-e6b1c-default-rtdb.firebaseio.com/')

    useEffect(() => {
        reference.ref('posts')
        .on('value', (snapshot) => {
          setPosts([]);
          //snapshot.forEach((child) => {
            const newObj = {
              id: snapshot.val().id,
              name: snapshot.val().name,
              price: snapshot.val().price,
              description: snapshot.val().description
            };
            setPosts(emptyArray => [...emptyArray, newObj]);
          //})
        }) 
      }, [])

    return (
        <View>
          <Text>Posts</Text>
            <FlatList 
              data={posts}
              renderItem={(item) => {
                return (
                  <View>
                  <Text>
                    {item.item.name} {item.item.price} {item.item.description}
                  </Text>
                </View>
              )
              }
              }            
              keyExtractor={item => item.id}
              scrollEnabled={true}
            />
        </View>
      );
    }


export default ShowallAds 
