import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import { useTranslations } from 'dopenative'
import { HomeScreen } from '../screens'
import ShowAllAds from '../screens/showallads/Showallads'
import ShowMyAds from '../screens/showmyads/ShowMyAds'
import Addnewad from '../screens/addnewad/Addnewad'


const MainStack = createStackNavigator()
const MainStackNavigator = () => {
  const { localized } = useTranslations()
  return (
    <MainStack.Navigator
      screenOptions={{
        headerBackTitleVisible: false,
        headerBackTitle: localized('Back'),
      }}
      initialRouteName="Home">
      <MainStack.Screen name="Home" component={HomeScreen} />
      <MainStack.Screen name="ShowAllAds" component={ShowAllAds} />
      <MainStack.Screen name="ShowMyAds" component={ShowMyAds}/>
      <MainStack.Screen name="AddNewAd" component={Addnewad}/>
    </MainStack.Navigator>
  )
}

export default MainStackNavigator
