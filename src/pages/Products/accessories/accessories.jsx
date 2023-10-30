import React, { useState, useEffect } from "react";
import Product from "../../../components/product/product";
import axios from "axios";

export default function Switches() {
  const [brands, setBrands] = useState([]);

  useEffect(() => {
    var accessToken=sessionStorage.getItem('accessToken');
    if(accessToken==null){
      accessToken='*';
    }
    const newAccessToken =  accessToken.replace(/^"|"$/g, '');
    console.log(newAccessToken);
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:8000?item=accessories',{
          headers: {
            'Authorization': `Bearer ${newAccessToken}`,
          },});
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
      mainimage1='./images/accessories/mainCard1.jpg'
      mainimage2='./images/accessories/mainCard2.jpg'
      mainimage3='./images/accessories/mainCard3.jpg'
      brands={brands} // Pass the fetched brands to the Product component
    />
  );
}
