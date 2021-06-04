import React, { useEffect } from "react";
import {
  Text,
  View,
  Button,
  TextInput,
  TouchableOpacity,
  Image,
  StyleSheet,
} from "react-native";
import { useHistory } from "react-router";

const SearchCountry = () => {
  let history = useHistory();
  const [country, setSearchCountry] = React.useState("");
  const [countryName, setCountry] = React.useState({});
  let { container, cardText, card, cardImage } = styles;
  const { name, flag, capital  } = countryName;
  let x = {};
  if (x) {
    console.log("x is a true");
  } else {
  }

  const handleCountryButton = () => {
    const url = `https://restcountries.eu/rest/v2/name/${country}`;
    console.log(url);
    fetch(url)
      .then((res) => res.json())
      .then((data) => setCountry(data[0]));
  };

  return (
    <View style={container} style={{ flex: 1}}>
      <View>
        <TextInput 
          onChangeText={setSearchCountry}
          value={country}
          placeholder="Name"
          style={{
            padding: 5,
            height: 40,
            width: 400,
            borderColor: "#808080d9",
            borderWidth: 1,
            marginBottom:5,
          }}
        />
        <Button onPress={handleCountryButton} title="View Details" />
      </View>

      {countryName?.name ? (
        <View style={{flex: 3}}>
          <TouchableOpacity  style={card}>
            <Image source={countryName.flag} style={cardImage} />
            <Text style={cardText}>Name: {countryName.name}</Text>
            <Text style={cardText}>Capital: {countryName.capital}</Text>
            <Button  onPress={()=>history.push(`/country/${name}`)} title = "View Details"></Button>
          </TouchableOpacity>
          </View>
        
      ) : (
        <> </>
      )}
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    marginTop: 40,
    flex: 1,
  },
  cardText: {
    fontSize: 16,
    padding: 10,
    textAlign: "center",
    color: "red",
    fontWeight: "bold",
  },
  card: {
    backgroundColor: "#fff",
    borderRadius: "1px solid black",
    marginBottom: 10,
    marginLeft: "2%",
    width: 400,
    shadowColor: "#000",
    shadowOpacity: 0.2,
    shadowOffset: {
      width: 10,
      height: 5,
    },
  },
  cardImage: {
    padding: 10,
    margin: "5%",
    height: 200,
    resizeMode: "cover",
  },
});
export default SearchCountry;
