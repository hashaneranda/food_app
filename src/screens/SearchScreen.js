import React, { useState } from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";

//components
import SearchBar from "../components/SearchBar";

//hooks
import useResults from "../hooks/useResults";
import ResultList from "../components/ResultList";

const SearchScreen = () => {
  const [term, setTerm] = useState("");
  const [results, errors, searchTerm] = useResults();

  const filterByPrice = price => {
    //price = '$' || '$$' || '$$$'
    return results.filter(data => data.price === price);
  };

  return (
    <>
      {/* <Text>Search Screen</Text> */}
      <SearchBar
        term={term}
        onChangeTerm={setTerm}
        onTermSubmit={() => searchTerm(term)}
      />
      {errors ? <Text style={styles.errorText}>{errors}</Text> : null}

      {results.length ? (
        <View style={{ flex: 1 }}>
          <Text style={styles.resultTextStyle}>
            We found {results.length} results for "{term}"
          </Text>
          <ScrollView>
            <ResultList result={filterByPrice("$")} title="Cost Effective" />
            <ResultList result={filterByPrice("$$")} title="Bit Pricier" />
            <ResultList result={filterByPrice("$$$")} title="Big Spender" />
          </ScrollView>
        </View>
      ) : null}
    </>
  );
};

const styles = StyleSheet.create({
  resultTextStyle: {
    marginTop: 10,
    alignSelf: "center"
  },
  errorText: {
    color: "red",
    marginTop: 10,
    alignSelf: "center"
  }
});

export default SearchScreen;
