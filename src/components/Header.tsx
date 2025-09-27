import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

type Props = {}

const Header = (props: Props) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Header</Text>
      <Text style={styles.subtitle}>Subtitle</Text>
    </View>
  )
}

export default Header

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#000',
    },
    subtitle: {
        fontSize: 16,
        color: '#000',
    }
})