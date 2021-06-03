import React from 'react';
import { StyleSheet, Text, View, StatusBar, TouchableOpacity } from 'react-native';

const CountryDetails = (props) => {
    let {container, cardText, card,cardImage} = styles;
    const { name, flag, capital, timezones, area, currencies, languages, population } = props.country;
    return (
        <View style={container}>
            <TouchableOpacity style={card}>
                <Image source={flag} style={cardImage} />
                <Text>{name}</Text>
                <Text  style={cardText}>{capital}</Text>
                <Text style={cardText}>{languages}</Text>
                <Text style={cardText}>{population}</Text>            
                <Text style={cardText}>{area}</Text>            
                <Text style={cardText}>{currencies}</Text>
                <Text style={cardText}>{timezones}</Text>   
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
        width:'96%',
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