import React from 'react'
import { View, StyleSheet } from 'react-native'
import AnimateBackground from '../components/AnimateBackground'

const MainLayout = ({children}) => {
  return (
    <View style={layoutStyles.container}>
      {/* <AnimateBackground/> */}
        {children}
    </View>
  )
}

const layoutStyles = StyleSheet.create({
    container: {
        flex: 1,
    }
})

export default MainLayout