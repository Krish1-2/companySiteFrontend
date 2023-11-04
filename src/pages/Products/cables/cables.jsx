import React, { useState, useEffect } from "react";
import Product from "../../../components/product/product";
import axios from "axios";

export default function Cables() {
  const [brands, setBrands] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      var accessToken=sessionStorage.getItem('accessToken');
      if(accessToken==null){
        accessToken='*';
      }
      const newAccessToken =  accessToken.replace(/^"|"$/g, '');
      console.log(newAccessToken);
      try {
        const response = await axios.get('http://localhost:8000?item=cables',{
          headers: {
            // 'Content-Type': 'application/json',
            'Authorization': `Bearer ${newAccessToken}`,
          },}); 
        const brandNames = response.data.map(item => item.brand);
        console.log(brands);
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
      category="cables"
      mainimage1='./images/cables/mainCard1.jpg'
      mainimage2='./images/cables/mainCard2.jpg'
      mainimage3='./images/cables/mainCard3.jpg'
      brands={brands} 
    />
  );
}
