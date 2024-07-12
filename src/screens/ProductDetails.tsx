import { StyleSheet, Text, View, Image } from "react-native";
import React from "react";

const ProductDetails = ({ route }) => {
  const { product } = route.params;

  return (
    <View style={styles.container}>
      <Image source={{ uri: product.image }} style={styles.image} />
      <View style={styles.details}>
        <Text style={styles.title}>{product.title}</Text>
        <Text style={styles.price}>${product.price}</Text>
        <Text>{product.description}</Text>
        <Text style={styles.rating}>Rating: {product.rating.rate} ({product.rating.count} reviews)</Text>
        <Text style={styles.category}>Category: {product.category}</Text>
      </View>
    </View>
  );
};

export default ProductDetails;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    padding: 20
  },
  image: {
    width: 200,
    height: 200,
    marginBottom: 20
  },
  details: {
    alignItems: "center"
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 10,
    textAlign: "center"
  },
  price: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 10
  },
  rating: {
    marginTop: 10,
    marginBottom: 5
  },
  category: {
    marginTop: 5
  }
});
