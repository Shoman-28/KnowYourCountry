import React from "react";
import { StyleSheet, Text, View, StatusBar } from "react-native";
import Home from "./components/Home/Home";

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import NotFound from "./components/NotFound/NotFound";
import CountryDetails from "./components/CountryDetails/CountryDetails";
import SearchCountry from "./components/SearchCountry/SearchCountry";
export default function App() {
  return (
    <Router>
      <View style={styles.container}>
        <Text style={{ fontSize:50, marginBottom:30}}>Know Your Country</Text>

        <Switch>
          <Route exact path="/">
            <SearchCountry/>
          </Route>
          <Route path="/country/:countryName" component={CountryDetails} />
            <CountryDetails/>
          <Route path="*">
            <NotFound/>
          </Route>
        </Switch>
        <StatusBar style="auto" />
      </View>
    </Router>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    top:30,
  },
});
