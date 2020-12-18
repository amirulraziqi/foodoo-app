import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import SearchBar from '../components/SearchBar';
import yelp from '../api/yelp';

const SearchScreen = () => {
    const [term, setTerm] = useState('');
    const [results, setResults] = useState([]);
    const [errorMessage, setErrorMessage] = useState('');

    // Making the request here, appending to baseURL '/search?limit=50?term?location='singapore'
    const searchApi = async () => {
        try{
            const response = await yelp.get('/search', {
                params: {
                    limit: 50,
                    term: term,
                    location: 'singapore'
                }
            });
            setResults(response.data.businesses);
        } catch (err) {
            console.log(err)
            setErrorMessage('Something went wrong');
        }
    };

    return (
        <View>
            <SearchBar 
                term={term} 
                onTermChange={setTerm}
                onTermSubmit={searchApi}
            />
            <Text>Search Screen</Text>
            <Text>We have found {results.length} results</Text>
            {errorMessage ? <Text>{errorMessage}</Text> : null}
        </View>       
    )
};

const styles = StyleSheet.create({});

export default SearchScreen;