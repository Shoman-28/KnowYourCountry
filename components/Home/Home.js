import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';

const Home = () => {
    let {container,cardText,card,cardImage} = styles;
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
                    <Image source={country.flag} style={cardImage} />
                    <Text style={cardText}>{country.name}</Text>
                    </TouchableOpacity>
                </View>
            )}
        </View>
    );
};
const styles = StyleSheet.create({
    container: {
      marginTop:40
    },
    cardText:{
        fontSize:16,
        padding:10,
        textAlign:"center",
        color: "green",
        fontWeight:"bold"
        
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

    },
    cardImage:{
        width: '100%',
        height:200,
        resizeMode:'cover',


    }
});


export default Home;