import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';

const Home = () => {
    let {container,cardText,card} = styles;
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
        <View >
            {countries.map((country) => 
                <View style={container}>
                    <TouchableOpacity style={card}>
                    <Image source={country.flag} style={{ width: 200, height: 200 }} />
                    <Text style={cardText}>{country.name}</Text>
                    </TouchableOpacity>
                </View>
            )}
        </View>
    );
};
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    cardText:{
        fontSize:30
    },
    card:{
        backgroundColor: '#fff',
        marginBottom:10,
        marginLeft:"2%",
        width:'96%',
        shadowColor:'#000',
        shadowOpacity:1,
        shadowOffset:{
            width:3,
            height:3
        }

    }
});


export default Home;