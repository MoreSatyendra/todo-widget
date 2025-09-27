import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Header } from '../../components'
import { useSafeAreaInsets } from 'react-native-safe-area-context'

type Props = {}

const Home = (props: Props) => {
    const insets = useSafeAreaInsets()
  return (
    <View style={[styles.container, { paddingTop: insets.top }]}>
        <View style={styles.content}>
            <Header />
            <Text style={styles.title}>Home</Text>
            <Text style={styles.subtitle}>Welcome to the Home screen</Text>
        </View>
    </View>
  )
}

export default Home

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    content: {
        flex: 1,
        backgroundColor: '#fff',
        paddingHorizontal: 20,
        paddingVertical: 10,
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