import React, {useEffect} from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Image,
  Pressable,
} from 'react-native';
import useProduct from '../store/store';
import Entypo from 'react-native-vector-icons/Entypo';
import Ionicons from 'react-native-vector-icons/Ionicons';

const DetailProduct = ({route, navigation}) => {
  const {id} = route.params;

  const fetchProduct = useProduct(state => state.fetchProduct);
  const product = useProduct(state => state.detailProduct);
  const addProduct = useProduct(state => state.addProduct);

  useEffect(() => {
    fetchProduct(id);
  }, [fetchProduct, id]);

  return (
    <ScrollView style={{backgroundColor: 'white'}}>
      <View style={{backgroundColor: 'white', flex: 1}}>
        <View style={styles.navbar}>
          <Pressable
            onPress={() => {
              navigation.goBack();
            }}>
            <Ionicons name="arrow-back" size={20} color="black" />
          </Pressable>
          <Text style={styles.navbartitle}>Detail Product</Text>
        </View>
        <View style={styles.wrapperImage}>
          <Image
            source={{uri: product?.image}}
            style={styles.image}
            resizeMode="contain"
          />
        </View>
        <View style={styles.card}>
          <View style={{flex: 1}}>
            <Text style={styles.title}>{product?.title}</Text>
            <Text style={styles.price}>${product?.price}</Text>
          </View>
        </View>
        <View style={{padding: 10, flexDirection: 'row', alignItems: 'center'}}>
          <Entypo name="star" size={30} color="#FFDA5D" />
          <Text>{`${product.rating.rate} (${product.rating.count})`}</Text>
        </View>
        <View style={{padding: 10}}>
          <Text>{product.description}</Text>
        </View>
      </View>
      <View style={{height: 50}} />
      <Pressable
        onPress={() => {
          addProduct(product);
        }}
        style={{
          backgroundColor: '#3AA39F',
          padding: 10,
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Text style={{color: 'white'}}>Add to Cart</Text>
      </Pressable>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  navbar: {
    backgroundColor: 'white',
    flexDirection: 'row',
    height: 50,
    alignItems: 'center',
    paddingHorizontal: 10,
  },
  navbartitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginLeft: 10,
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
    height: 350,
    width: '100%',
    backgroundColor: 'white',
  },
  image: {
    width: 239,
    height: 286,
  },
  title: {
    fontSize: 18,
    color: '#2D1601',
  },
  price: {
    fontSize: 18,
    color: '#3AA39F',
    fontWeight: 'bold',
  },
});

export default DetailProduct;
