import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View, FlatList, Image, TouchableOpacity, Alert } from "react-native";
import { useNavigation } from '@react-navigation/native';

const ProductList = () => {
  const navigation = useNavigation();
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch('https://fakestoreapi.com/products');
        if (!response.ok) {
          throw new Error('Failed to fetch products');
        }
        const data = await response.json();
        setProducts(data);
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };

    fetchProducts();
  }, []);

  const handleProductPress = (product) => {
    navigation.navigate('Details', { product });
  };

  const handleAddToCart = (product) => {

    Alert.alert('Produto adicionado ao carrinho', `${product.title} foi adicionado ao carrinho.`);
  };

  const renderItem = ({ item }) => (
    <TouchableOpacity style={styles.item} onPress={() => handleProductPress(item)}>
      <Image source={{ uri: item.image }} style={styles.image} />
      <View style={styles.details}>
        <Text style={styles.title}>{item.title}</Text>
        <Text style={styles.price}>${item.price}</Text>
        <Text>{item.description}</Text>
        <TouchableOpacity style={styles.addToCartButton} onPress={() => handleAddToCart(item)}>
          <Text style={styles.addToCartText}>Adicionar ao Carrinho</Text>
        </TouchableOpacity>
      </View>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Lista de Produtos</Text>
      <FlatList
        data={products}
        renderItem={renderItem}
        keyExtractor={(item) => item.id.toString()}
      />
    </View>
  );
};

export default ProductList;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F5FCFF"
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    marginTop: 20,
    marginBottom: 10
  },
  item: {
    flexDirection: "row",
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#ccc"
  },
  image: {
    width: 100,
    height: 100,
    marginRight: 10
  },
  details: {
    flex: 1,
    justifyContent: "center"
  },
  price: {
    fontWeight: "bold",
    marginBottom: 5
  },
  addToCartButton: {
    backgroundColor: "#007bff",
    padding: 10,
    marginTop: 10,
    borderRadius: 5,
    alignItems: "center"
  },
  addToCartText: {
    color: "#fff",
    fontWeight: "bold"
  }
});
