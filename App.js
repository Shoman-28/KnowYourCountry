import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

export default function App() {
    const [countries, setCountries] = useState([]);
    useEffect(() => {
        fetch('https://restcountries.eu/rest/v2/all')
            .then((response) => response.json())
            .then((data) => {
                console.log(data);
                setCountries(data);
            });
    }, []);
    return (
        <View style={styles.container}>
            <Text>Know Your Country</Text>
            {countries.map((country) => 
                <View>
                    <Image source={country.flag} style={{ width: 200, height: 200 }} />
                    <Text>{country.name}</Text>
                </View>
            )}
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
