import React,{useState} from "react";
import './products.css'
import ImageSlider from '../imageSlider/imageSlider'
import axios from "axios";
import Card2 from '../card/card'

export default function Product({category,mainimage1,mainimage2,mainimage3,company,brands}){

    const [selectedBrandIndex, setSelectedBrandIndex] = useState(null);
    const [tableData, setTableData] = useState([]); 
  
    const rates = async (index) => {
      setSelectedBrandIndex(index);
      const item = category;
  
      console.log(item);
      await axios.get(`http://localhost:8000?item=${item}`)
        .then(
          (res) => {
            setTableData(res.data);
            console.log(tableData);
          }
        )
        .catch(err => {
          console.log(err);
        });
    }
  
    const filteredTableData = () => {
      return selectedBrandIndex !== null
        ? tableData.filter((item) => item.brand === brands[selectedBrandIndex])
        : [];
    };

    return(
        <div className="product-main-div">
            <div className="space"></div> 
            <ImageSlider image1={mainimage1} image2={mainimage2} image3={mainimage3} width='100%'  height='90vh'/>
            <div className="product-head-div">
            <h2 className="pic-head">{category.toUpperCase()}</h2>
            </div>
        <div className="text-product">
            <div className="space"></div> 
            <div className="w-100 product-details">
                <div className="w-50 product-details-text">
                <h1 className="product-h1">OUR {category.toUpperCase()}</h1>
                empor incididunt ut labore et dolore magna aliqua. Turpis massa tincidunt dui ut ornare lectus. Mattis vulputate enim nulla aliquet porttitor lacus luctus accumsan. 
                Elementum facilisis leo vel fringilla est ullamcorper eget. Ipsum consequat nisl vel pretium lectus quam. Eu turpis egestas pretium aenean pharetra magna ac placerat vestibulum. Feugiat in ante metus dictum at tempor commodo ullamcorper a. Etiam non quam lacus suspendisse faucibus interdum posuere lorem. Venenatis a condimentum vitae sapien pellentesque habitant. Elementum facilisis leo vel fringilla est ullamcorper. Dignissim cras tincidunt lobortis feugiat vivamus. Ut morbi tincidunt augue interdum velit euismod in pellentesque. Nibh ipsum consequat nisl vel pretium lectus quam id leo.
                </div>
                <div className="w-50 p-2">
                <ImageSlider image1="./images/pipes/smallCard1.png" image2="./images/pipes/smallCard2.png" image3="./images/pipes/smallCard3.png" width='40%' height='50vh'/> 
                </div>
            </div>
            <div className="space"></div> 
            <h4 className="head-exp pt-5">OUR BRANDS</h4>
            <div className="line"/>
            <div className="space"></div> 
            <div className="product-company">
            {brands.map((brand, index) => (
                <div key={index} className="brand-image-div" onClick={() => rates(index)} >
                <img src={`./images/brands/${brand}.png`} alt={brand} className="brand-image" />
                </div>
            ))}
            </div>

            <h4 className="head-exp pt-5">RATES</h4>
            <div className="line"/>
            <div className="space"></div> 
            <h1>CLICK ON A BRAND TO GET RATES</h1>
            <div >
                {selectedBrandIndex !== null && (
                    <div className="product-table">
                        {filteredTableData().map((item, index) => {
                                const text = `description:${item.desc}\nrate:${item.rate}\nsize:${item.rate}`;
                                
                                const textWithLineBreaks = (
                                    <div dangerouslySetInnerHTML={{ __html: text.replace(/\n/g, '<br>') }} />
                                );                       
                                return (
                                    <div className="card2Space">
                                    <Card2 text={textWithLineBreaks} heading={item.desc} image="./images/time.jpeg" /> 
                                    <div className="card2Space1"></div>
                                    </div>
                                );
                                })}
                    </div>
                )}
            </div>
            <div className="space"></div> 
            </div>
            <div className="space"></div> 
            <div className="space"></div> 
            <div className="space"></div> 
        </div>
    )
}