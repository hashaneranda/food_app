import { useState, useEffect } from "react";

//network APIs
import yelp from "../api/yelp";

export default () => {
  const [results, setResults] = useState([]);
  const [errors, setErrors] = useState("");

  const searchTerm = async searchTerm => {
    try {
      const response = await yelp.get("/search", {
        params: {
          limit: 50,
          term: searchTerm,
          location: "san jose"
        }
      });

      setResults(response.data.businesses);
    } catch (err) {
      console.log(err);
      setErrors("Opps! Something went wrong");
    }
  };

  useEffect(() => {
    searchTerm("pasta");
  }, []);

  return [results, errors, searchTerm];
};
