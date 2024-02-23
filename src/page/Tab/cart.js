import React from 'react';
import {View, Text, StyleSheet, FlatList, Image} from 'react-native';
import useProduct from '../../store/store';

const Cart = () => {
  const cart = useProduct(state => state.cart);

  return (
    <View>
      <View style={styles.navbar}>
        <Text style={styles.navbartitle}>Cart</Text>
      </View>
      <FlatList
        data={cart}
        ListEmptyComponent={() => (
          <View
            style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
            <Text>Cart is Empty</Text>
          </View>
        )}
        keyExtractor={item => item.id.toString()}
        renderItem={({item}) => (
          <View style={styles.card}>
            <View style={styles.wrapperImage}>
              <Image
                source={{uri: item.image}}
                style={styles.image}
                resizeMode="contain"
              />
            </View>
            <View style={{flex: 1}}>
              <Text style={styles.title}>{item.title}</Text>
              <Text>{item.price}</Text>
            </View>
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  navbar: {
    backgroundColor: 'white',
    flexDirection: 'row',
    justifyContent: 'space-between',
    height: 50,
    alignItems: 'center',
    paddingHorizontal: 10,
  },
  navbartitle: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  card: {
    backgroundColor: 'white',
    flexDirection: 'row',
    padding: 10,
  },
  wrapperImage: {
    padding: 10,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 2,
    borderRadius: 2,
    borderColor: 'grey',
    height: 120,
    width: 120,
    marginRight: 10,
  },
  image: {
    width: 80,
    height: 100,
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default Cart;
