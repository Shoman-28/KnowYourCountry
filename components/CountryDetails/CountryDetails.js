import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, Button } from 'react-native';
import { useParams } from 'react-router';

const CountryDetails = () => {
    const { countryName } = useParams();
    const[countryInfo,setCountryInfo]=useState({});
    let {container,cardText,card,cardImage} = styles;

    useEffect(()=>{
         const url = `https://restcountries.eu/rest/v2/name/${countryName}`
         console.log(url);
         fetch(url)
        .then(res=> res.json())
        .then(data=> setCountryInfo(data[0]))
    },[countryName])
    return (
        <View style={container}>
                    <TouchableOpacity style={card}>
                    <Image source={countryInfo.flag} style={cardImage} />
                    <Text style={cardText}>Name: {countryInfo.name}</Text>
                    <Text style={cardText}>Capital: {countryInfo.capital}</Text>
                    <Text style={cardText}>population: {countryInfo.population}</Text>
                    <Text style={cardText}>Region: {countryInfo.Region}</Text>

                    </TouchableOpacity>
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
        color: "red",
        fontWeight:"bold"
        
    },
    card:{
        backgroundColor: '#fff',
        borderRadius:"1px solid black",
        marginBottom:10,
        marginLeft:"2%",
        width:'400px',
        shadowColor:'#000',
        shadowOpacity:0.2,
        shadowOffset:{
            width:5,
            height:5
        }

    },
    cardImage:{
      
        padding:10,
        margin:"5%",
        height:200,
        resizeMode:'cover',


    }
});

export default CountryDetails;