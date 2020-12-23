import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, ScrollView, FlatList, Image } from 'react-native';
import yelp from '../api/yelp';

const ResultsShowScreen = ({ navigation }) => {
    const [result, setResult] = useState(null);
    const id = navigation.getParam('id');

    const getResult = async (id) => {
        const response = await yelp.get(`/${id}`);
        setResult(response.data);
    };

    useEffect(() => {
        getResult(id);
    }, []);

    console.log(result);

    if (!result) {
        return null;
    }

    return (
        <View>
            <Text>{result.name}</Text>
            <FlatList 
                data={result.photos}
                keyExtractor={(photo) => photo}
                renderItem={({ item }) => {
                    return <Image source={{ uri: item }} style={styles.imageStyle}/>
                }}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    imageStyle: {
        width: 300,
        height: 200,
        borderRadius: 4,
        marginBottom: 10,
    }
});

export default ResultsShowScreen;