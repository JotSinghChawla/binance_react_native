import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Image, ScrollView, Alert, } from 'react-native';

const BinanceList = () => {

  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([])

  const API = `https://api.binance.com/api/v3/ticker/24hr`

  useEffect(async () => {
    fetch(API)
      .then((response) => response.json())
      .then((json) => setData(prev => json.slice(0,10)))
      .catch((error) => console.error(error))
      .finally(() => setLoading(false));

      return () => {
        console.log("This will be logged on unmount");
      }
    
  }, [])

  return (
    <>
        {
            isLoading ? 
            <Text> LOADING THE DATA...  </Text>:
            <Text> yello {data[9].symbol} {data[0].symbol} </Text>
        }
    </>
  );
};

const styles = StyleSheet.create({

});

export default BinanceList;
