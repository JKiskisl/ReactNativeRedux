import React from 'react'
import { Button } from 'react-native'
import { View } from 'react-native-animatable'
import { SafeAreaView, StyleSheet } from 'react-native-safe-area-context'

const Post = postData => {
  return (
    <SafeAreaView>
      <View>
        <Button title="pisknx">{postData.postName}</Button>
      </View>
    </SafeAreaView>
  )
}

export default Post
