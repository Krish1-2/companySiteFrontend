import React, { useState, useEffect } from "react";
import Product from "../../../components/product/product";
import axios from "axios";

export default function Wires() {
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
        const response = await axios.get('http://localhost:8000?item=pipes',{
          headers: {
            // 'Content-Type': 'application/json',
            'Authorization': `Bearer ${newAccessToken}`,
          },}); 
        const brandNames = response.data.map(item => item.brand);
        const uniqueBrands = [...new Set(brandNames)];
        setBrands(uniqueBrands);
      } catch (error) {
        console.error("Error fetching brands:", error);
      }
    };

    fetchData();
  }, [brands]);

  return (
    <Product
      category="wires"
      mainimage1='./images/wires/mainCard1.jpeg'
      mainimage2='./images/wires/mainCard2.jpeg'
      mainimage3='./images/wires/mainCard3.jpg'
      brands={brands} // Pass the fetched brands to the Product component
    />
  );
}
