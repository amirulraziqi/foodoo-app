import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';

const ResultsShowScreen = ({ navigation }) => {
    const id = navigation.getParam('id');

    console.log(id)
    return (
        <View>
            <Text>Results Show</Text>
        </View>
    );
};

const styles = StyleSheet.create({});

export default ResultsShowScreen;