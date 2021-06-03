import React from 'react';

import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';

const CountryList = (props) => {
    let {container,cardText,card,cardImage} = styles;
    const { name, flag, capital } = props.country
    return (
        <div>
            <View style={container}>
                    <TouchableOpacity style={card}>
                    <Image source={flag} style={cardImage} />
                    <Text style={cardText}>{name}</Text>
                    <Text style={cardText}>{capital}</Text>
                    </TouchableOpacity>
                </View>
        </div>
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
        shadowOpacity:0.5,
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

export default CountryList;