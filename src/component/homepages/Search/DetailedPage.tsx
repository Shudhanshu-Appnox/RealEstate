import { SafeAreaView, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const DetailedPage = ({ route } : any) => {
    
  return (
   <SafeAreaView style={{flex: 1, backgroundColor: 'white'}}>
     <View>
      <Text>Detailed Page</Text>
    </View>
   </SafeAreaView>
  )
}

export default DetailedPage

const styles = StyleSheet.create({})