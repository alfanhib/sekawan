/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, {useEffect} from 'react';
import {
  FlatList,
  Image,
  Pressable,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import EvilIcons from 'react-native-vector-icons/EvilIcons';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import useProduct from '../../store/store';

function Home({navigation}) {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  const listProducts = useProduct(state => state.listProducts);
  const addProduct = useProduct(state => state.addProduct);
  const fetchProducts = useProduct(state => state.fetchProducts);

  useEffect(() => {
    fetchProducts();
  }, [fetchProducts]);

  return (
    <SafeAreaView style={backgroundStyle}>
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={backgroundStyle.backgroundColor}
      />
      <View style={styles.navbar}>
        <Text style={styles.buluh}>Buluh</Text>
        <View style={styles.wrapper}>
          <EvilIcons
            name="search"
            size={30}
            color="#2C2620"
            style={styles.icon}
          />
        </View>
        <Pressable
          style={styles.wrapper}
          onPress={() => {
            navigation.navigate('Profile');
          }}>
          <EvilIcons name="user" size={30} color="#2C2620" />
        </Pressable>
      </View>
      <FlatList
        numColumns={2}
        data={listProducts}
        renderItem={({item}) => (
          <Pressable
            style={styles.card}
            onPress={() => {
              navigation.navigate('DetailProduct', {id: item.id});
            }}>
            <Image
              source={{uri: item.image}}
              style={{width: '100%', height: 150}}
              resizeMode="contain"
            />
            <View
              style={{flexDirection: 'row', justifyContent: 'space-between'}}>
              <View>
                <Text numberOfLines={1} style={styles.title}>
                  {item.title}
                </Text>
                <Text>{item.price}$</Text>
              </View>
            </View>
            <View
              style={{
                alignItems: 'flex-end',
              }}>
              <Pressable
                onPress={() => {
                  addProduct(item);
                }}
                style={{
                  backgroundColor: 'grey',
                  padding: 8,
                  borderRadius: 8,
                }}>
                <EvilIcons name="cart" size={30} color="#2C2620" />
              </Pressable>
            </View>
          </Pressable>
        )}
        keyExtractor={item => item.id}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  navbar: {
    flexDirection: 'row',
    borderTopWidth: 1,
    backgroundColor: 'white',
    borderBottomWidth: 1,
    borderColor: '#808B9D',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  },
  buluh: {
    fontSize: 36,
    fontWeight: 'bold',
    color: '#2C2620',
    padding: 8,
    flex: 1,
  },
  wrapper: {
    padding: 8,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderLeftWidth: 1,
    borderColor: '#808B9D',
    width: 70,
  },
  icon: {},
  card: {
    flex: 1,
    backgroundColor: 'white',
    margin: 8,
    paddingHorizontal: 8,
    paddingVertical: 12,
    borderRadius: 8,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default Home;
