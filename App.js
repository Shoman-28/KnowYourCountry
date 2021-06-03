

import React from 'react';
import { StyleSheet, Text, View, StatusBar } from 'react-native';
import Home from './components/Home/Home';

export default function App() {
    return (
        <View style={styles.container}>
            <Text>Know Your Country</Text>
            <Home></Home>
            <StatusBar style='auto' />
        </View>
    );

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});
