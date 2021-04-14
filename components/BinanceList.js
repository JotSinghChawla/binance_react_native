import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, FlatList, Image } from 'react-native';
import { MaterialIcons, Ionicons } from '@expo/vector-icons';
import { Dimensions } from 'react-native';

const BinanceList = ({ max }) => {

  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([])

  const API = `https://api.binance.com/api/v3/ticker/24hr`
  
  const windowHeight = Dimensions.get('window').height;

  const iconsList = [
    { id: 0, link: 'https://s2.coinmarketcap.com/static/img/coins/64x64/1.png' },
    { id: 1, link: 'https://s2.coinmarketcap.com/static/img/coins/64x64/1027.png' },
    { id: 2, link: 'https://s2.coinmarketcap.com/static/img/coins/64x64/1839.png' },
    { id: 3, link: 'https://s2.coinmarketcap.com/static/img/coins/64x64/52.png' },
    { id: 4, link: 'https://s2.coinmarketcap.com/static/img/coins/64x64/2010.png' },
    { id: 5, link: 'https://s2.coinmarketcap.com/static/img/coins/64x64/825.png' },
    { id: 6, link: 'https://s2.coinmarketcap.com/static/img/coins/64x64/6636.png' },
    { id: 7, link: 'https://s2.coinmarketcap.com/static/img/coins/64x64/7083.png' },
    { id: 8, link: 'https://s2.coinmarketcap.com/static/img/coins/64x64/2.png' },
    { id: 9, link: 'https://s2.coinmarketcap.com/static/img/coins/64x64/74.png' },
    { id: 10, link: 'https://s2.coinmarketcap.com/static/img/coins/64x64/1975.png' },
    { id: 11, link: 'https://s2.coinmarketcap.com/static/img/coins/64x64/1831.png' },
    { id: 12, link: 'https://s2.coinmarketcap.com/static/img/coins/64x64/3408.png' }
]


  useEffect(async () => {
    fetch(API)
      .then((response) => response.json())
      .then((json) => setData(prev => json.slice(18,18+max)))
      .catch((error) => console.error(error))
      .finally(() => setLoading(false));

      return () => {
        console.log("This will be logged on unmount");
      }
    
  }, [])

  const renderBinance = ({ item, index }) => {
      return  <View  style={styles.listItemContainer}>
                <View style={{ flexDirection: 'row' }}>
                    <Image source={{uri: iconsList.filter( check => check.id === index )[0].link}} 
                            style={styles.listImage}/>
                    <View>
                        <Text style={styles.currencyText}>{item.symbol}</Text> 
                        <Text style={{ marginTop: 0 }}> 
                            {
                                item.priceChangePercent >= 0 ?
                                <Ionicons  name="arrow-up-sharp" color={'green'} size={22} /> :
                                <Ionicons  name="ios-arrow-down" color={'red'} size={22} />
                            }
                            
                             {item.priceChangePercent + '%' } 
                        </Text>
                    </View>
                </View>
                <View>
                    {
                        item.priceChangePercent >= 0 ?
                        <Image source={ require('../assets/up.png') } 
                                    style={ styles.upward}/> :
                        <Image source={ require('../assets/down.png') } 
                                    style={styles.downward}/>            
                    }
                </View>
                <View style={{ maxWidth: 100, alignItems: 'flex-end'}}>
                    <Text style={styles.currencyText}>{'$' + (item.openPrice * 1000).toFixed(3) }</Text>
                    <Text> {'vol: ' + (item.volume / 1000).toFixed(2) + 'k'} </Text>
                </View>
            </View>
  }

  return (


    <>
        {
            isLoading ? 
            <Text style={{ backgroundColor: 'tomato', height: windowHeight , justifyContent: 'center', alignContent: 'center'}}> LOADING THE DATA...  </Text>:
            // <Text> yello {data[9].symbol} {data[0].symbol} </Text>
            <View style={{ flex: 1 }}>
                <FlatList
                    data={data}
                    keyExtractor={(check, index) => index}
                    renderItem={ renderBinance }
                />
            </View>
        }
    </>
  );
};

const styles = StyleSheet.create({
    listItemContainer: {
        borderStyle: 'solid',
        borderColor: 'grey',
        borderBottomWidth: 2,
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 15
    },
    currencyText: {  
        color: 'black',
        fontWeight: 'bold',
        fontSize: 22,
    },
    listImage: {
        backgroundColor: 'transparent',
        height: 40,
        width: 40,
        marginRight: 10
    },
    upward: {
        height: 50,
        width: 100,
        opacity: 0.8

    },  
    downward: {
        height: 50,
        width: 100,
        opacity: 0.8
    },

});

export default BinanceList;
