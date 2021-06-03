import React from "react";
import { Link } from "react-router-dom";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  Button,
} from "react-native";

const CountryList = (props) => {
  let { container, cardText, card, cardImage } = styles;
  const { name, flag, capital, id } = props.country;

  // const hendelAdProduct = (product) => {
  //     const newCart = [...cart, product];
  //     setCart(newCart);
  //     const sameProduct = newCart.filter((pd) => pd.key === product.key);
  //     const count = sameProduct.length;
  //     addToDatabaseCart(product.key, count);
  // };
  return (
    <View style={container}>
      <TouchableOpacity style={card}>
        <Image source={flag} style={cardImage} />
        <Text style={cardText}>Name: {name}</Text>
        <Text style={cardText}>Capital: {capital}</Text>

        <Button as={Link} to={`/country/${name}`} title="View Details"></Button>
        {/* <Button  onClick={() => props.hendelAdProduct(props.product)} title = "View"></Button> */}
      </TouchableOpacity>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    marginTop: 40,
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
    width: "96%",
    shadowColor: "#000",
    shadowOpacity: 0.2,
    shadowOffset: {
      width: 5,
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

export default CountryList;
