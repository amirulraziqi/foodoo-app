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
            <Image source={{ uri: result.image_url }} style={styles.imageOneStyle} />
            <Text style={styles.nameStyle}>{result.name}</Text>
            <Text style={styles.categoryStyle}>{result.categories[0].title}</Text>
            <Text styles={styles.subheaderStyle}>Photos</Text>
            <FlatList 
                horizontal
                showsHorizontalScrollIndicator={false}
                data={result.photos}
                keyExtractor={(photo) => photo}
                renderItem={({ item }) => {
                    return <Image source={{ uri: item }} style={styles.imageTwoStyle}/>
                }}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    nameStyle: {
        fontSize: 24,
        fontWeight: 'bold',
    },
    categoryStyle: {
        fontSize: 14,
    },
    subheaderStyle: {
        fontSize: 16,
        fontWeight: 'bold',
    },
    imageOneStyle: {
        width: 300,
        height: 200,
        marginBottom: 10,
        position: 'absolute',
    },
    imageTwoStyle: {
        width: 300,
        height: 200,
        borderRadius: 4,
        marginBottom: 10,
    }
});

export default ResultsShowScreen;