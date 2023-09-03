import React, { useState, useEffect } from "react";
import Product from "../../../components/product/product";
import axios from "axios";

export default function Switches() {
  const [brands, setBrands] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:8000?item=accessories'); // Replace with your API endpoint
        // Assuming the API response contains an array of objects with brand names
        const brandNames = response.data.map(item => item.brand);
        setBrands(brandNames);
      } catch (error) {
        console.error("Error fetching brands:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <Product
      category="accessories"
      mainimage1='./images/pipes/mainCard1.png'
      mainimage2='./images/pipes/pipe1.png'
      mainimage3='./images/pipes/mainCard3.png'
      brands={brands} // Pass the fetched brands to the Product component
    />
  );
}
