import React from "react";
import { View, Text, StyleSheet, TextInput } from "react-native";
import { Feather } from "@expo/vector-icons";

const SearchBar = ({ term, onChangeTerm, onTermSubmit }) => {
  return (
    <View style={styles.backgroundStyle}>
      <Feather name="search" style={styles.iconStyle} />
      <TextInput
        autoCapitalize="none"
        autoCorrect={false}
        placeholder="Search"
        style={styles.inputStyle}
        value={term}
        onChangeText={onChangeTerm}
        onEndEditing={onTermSubmit}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  backgroundStyle: {
    backgroundColor: "#F0EEEE",
    height: 50,
    marginHorizontal: 12,
    borderRadius: 9,
    top: 10,
    flexDirection: "row"
  },
  inputStyle: {
    fontSize: 22,
    flex: 1,
    marginRight: 10
  },
  iconStyle: {
    fontSize: 30,
    marginHorizontal: 10,
    alignSelf: "center"
  }
});

export default SearchBar;
