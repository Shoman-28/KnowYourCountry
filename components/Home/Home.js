// import { StatusBar } from 'expo-status-bar';
// import React, { useEffect, useState } from 'react';
// import CountryList from '../CountryList/CountryList'
// import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';

// const Home = () => {
    
//     const [countries, setCountries] = useState([]);
//     useEffect(() => {
//         fetch('https://restcountries.eu/rest/v2/all')
//             .then((response) => response.json())
//             .then((data) => {
//                 setCountries(data);
//             });
//     }, []);
//     return (
//         <View >
//             {countries.map((country) => <CountryList country={country}></CountryList>)}
//         </View>
//     );
// };



// export default Home;