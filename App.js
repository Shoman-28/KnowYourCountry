import React from 'react';
import { StyleSheet, Text, View, StatusBar } from 'react-native';
import Home from './components/Home/Home';

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import NotFound from './components/NotFound/NotFound';
import CountryDetails from './components/CountryDetails/CountryDetails'
export default function App() {
    return (
        <Router>
        <View style={styles.container}>
            <Text>Know Your Country Name</Text>
            <Switch>
                <Route exact path="/">
                    <Home />
                </Route>
                <Route  path='/country/:countryName' component={CountryDetails}/>
                  
                <Route path="*">
                    <NotFound></NotFound>
                </Route>
               
            </Switch>
            <StatusBar style='auto' />
        </View>
    </Router>

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
