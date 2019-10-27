import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";

const ResultCard = ({ result }) => {
  return (
    <View style={styles.backgroundStyle}>
      <Image style={styles.image} source={{ uri: result.image_url }} />
      <Text style={styles.headerStyle}>{result.name}</Text>
      <Text style={styles.subHeaderStyle}>
        {result.rating} Stars , {result.review_count} Reviews
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  backgroundStyle: {
    marginHorizontal: 12,
    marginVertical: 10
  },
  headerStyle: {
    fontSize: 15,
    fontWeight: "bold"
  },
  image: {
    width: 259,
    height: 196,
    borderRadius: 8
  },
  subHeaderStyle: {
    fontSize: 12
  }
});

export default ResultCard;
