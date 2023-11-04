import React, { useState, useEffect } from "react";
import Product from "../../../components/product/product";
import axios from "axios";

export default function Pipes() {
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
        const response = await axios.get('http://localhost:8000?item=pipes',{
          headers: {
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
      category="pipes"
      mainimage1='./images/pipes/mainCard1.png'
      mainimage2='./images/pipes/pipe1.png'
      mainimage3='./images/pipes/mainCard3.png'
      brands={brands} // Pass the fetched brands to the Product component
    />
  );
}
