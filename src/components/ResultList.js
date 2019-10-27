import React from "react";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity
} from "react-native";
import ResultCard from "./ResultCard";
import { withNavigation } from "react-navigation";

const ResultList = ({ title, result, navigation }) => {
  if (!result.length) {
    return null;
  }
  return (
    <View style={styles.backgroundStyle}>
      <Text style={styles.headerStyle}>{title}</Text>
      {result.length > 0 ? (
        <View>
          <FlatList
            horizontal
            showsHorizontalScrollIndicator={false}
            data={result}
            keyExtractor={item => item.id}
            renderItem={({ item }) => (
              <TouchableOpacity
                onPress={() =>
                  navigation.navigate("ResultsShow", { id: item.id })
                }
              >
                <ResultCard result={item} />
              </TouchableOpacity>
            )}
          />
        </View>
      ) : (
        <View>
          <Text style={styles.emptyStyle}>No Results Found</Text>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  backgroundStyle: {},
  headerStyle: {
    fontSize: 22,
    fontWeight: "bold",
    marginHorizontal: 12
  },
  emptyStyle: {
    fontSize: 16,
    marginHorizontal: 12
  }
});

export default withNavigation(ResultList);
