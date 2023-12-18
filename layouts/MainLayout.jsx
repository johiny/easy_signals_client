import React from 'react'
import { View, StyleSheet } from 'react-native'

const MainLayout = ({children}) => {
  return (
    <View style={layoutStyles.container}>
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