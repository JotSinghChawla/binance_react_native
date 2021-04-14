import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Image, ScrollView } from 'react-native';
import { Chip, TouchableRipple } from 'react-native-paper';
import { MaterialCommunityIcons, Ionicons } from '@expo/vector-icons';
import BinanceList from '../components/BinanceList'

const Analytics = () => {

  return (
    <>
        <View style={ styles.container }>
            <View style={styles.topBar}>
                <Text style={styles.sizeone}> CryptoAssets </Text>
                <Text style={styles.size}> Exchanges </Text>
                <Text style={styles.size}> Sectors </Text>
                <Ionicons style={{ marginTop: -5, marginLeft: 42 }} name="search" color={'grey'} size={35} />
            </View>
        </View>

        <ScrollView horizontal={true} contentContainerStyle={styles.container} >
            <View style={styles.row}>
                <TouchableRipple onPress={ () => {}} rippleColor="steelblue">
                    <Chip icon='star-outline' style={{ margin: 4, borderRadius: 100, width: 35, fontWeight: 900}}> </Chip>
                </TouchableRipple>
                <TouchableRipple onPress={ () => {}} rippleColor="steelblue">
                    <Chip style={styles.chip}>
                        <Text style={styles.chipText}>USD</Text>
                    </Chip>
                </TouchableRipple>
                <TouchableRipple onPress={ () => {}} rippleColor="steelblue">
                    <Chip icon='arrow-up' style={styles.chip}>
                        <Text style={styles.chipText}>Sort by Rank</Text>
                    </Chip>
                </TouchableRipple>
                <TouchableRipple onPress={ () => {}} rippleColor="steelblue">
                    <Chip style={styles.chip}>
                        <Text style={styles.chipText}>Top 100</Text>
                    </Chip>
                </TouchableRipple>
                <TouchableRipple onPress={ () => {}} rippleColor="steelblue">
                    <Chip style={styles.chip}>
                        <Text style={styles.chipText}>All Cryptocurrencies</Text>
                    </Chip>
                </TouchableRipple>
            </View>
        </ScrollView>
        <ScrollView contentContainerStyle={styles.container}>
            <BinanceList />
        </ScrollView>
    </>
  );
};

const styles = StyleSheet.create({

    container: {
        marginTop: 40,
        backgroundColor: 'cyan',
    },
    topBar: {
        fontSize: 30,
        backgroundColor: 'yellow',
        flexDirection: 'row',
        flexWrap: 'wrap',
        paddingHorizontal: 11,
        height: 50,
        paddingVertical: 10

    },
    size: {
        fontSize: 20,
    },  
    sizeone: {
        fontSize: 22,
        fontWeight: 'bold'
    },  
    row: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        paddingHorizontal: 9,
    },
    chip: {
        // backgroundColor: "#2096F3",
        margin: 4
    },
    chipText: {
        color: "black"
    }
});

export default Analytics;
