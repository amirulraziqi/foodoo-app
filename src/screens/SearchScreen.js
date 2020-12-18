import React, { useState, userEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import SearchBar from '../components/SearchBar';
import useResults from '../hooks/useResults'

const SearchScreen = () => {
    const [term, setTerm] = useState('');
    const [searchApi, results, errorMessage] = useResults();

    return (
        <View>
            <SearchBar 
                term={term} 
                onTermChange={setTerm}
                onTermSubmit={() => searchApi(term)}
            />
            <Text>Search Screen</Text>
            <Text>We have found {results.length} results</Text>
            {errorMessage ? <Text>{errorMessage}</Text> : null}
        </View>       
    )
};

const styles = StyleSheet.create({});

export default SearchScreen;