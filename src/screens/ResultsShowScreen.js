import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, Image, Dimensions } from "react-native";
import yelp from "../api/yelp";
import { FlatList } from "react-native-gesture-handler";

import Carousel from "react-native-anchor-carousel";

const ResultsShowScreen = ({ navigation }) => {
  const id = navigation.getParam("id");
  const screenWidth = Math.round(Dimensions.get("window").width);

  const [result, setResult] = useState(null);
  const [photos, setPhotos] = useState([]);

  const getResults = async id => {
    const response = await yelp.get(`/${id}`);
    setResult(response.data);
  };

  useEffect(() => {
    getResults(id);
  }, []);

  useEffect(() => {
    if (result) {
      const photosArr = result.photos.map(data => {
        let image = new Object();
        image.image = data;
        return image;
      });

      setPhotos(photosArr);
    }
  }, [result]);

  if (!result) {
    return null;
  }

  const renderItem = ({ item }) => {
    const { image } = item;

    return <Image source={{ uri: image }} style={styles.ImageStyle} />;
  };

  return (
    <View>
      <Carousel
        style={styles.carousel}
        data={photos}
        renderItem={renderItem}
        itemWidth={200}
        containerWidth={screenWidth - 20}
        separatorWidth={20}
        ref={c => {
          this._carousel = c;
        }}
        initialIndex={1}
        //pagingEnable={false}
      />
      <View style={styles.DetailsList}>
        <Text style={styles.HeaderText}>{result.name}</Text>
        <Text>{result.display_phone}</Text>
        <Text>{result.location.display_address}</Text>
        <Text style={{ fontWeight: "bold" }}>{result.location.price}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  ImageStyle: {
    width: 300,
    height: 250
  },
  carousel: {
    height: 300
  },
  DetailsList: {
    flexDirection: "column",
    alignItems: "center"
  },
  HeaderText: {
    fontSize: 30,
    fontWeight: "bold"
  }
});

export default ResultsShowScreen;
