import React,{useState,useEffect} from "react";
import './products.css'
import ImageSlider from '../imageSlider/imageSlider'
import axios from "axios";
import Card2 from '../card/card'

export default function Product({category,mainimage1,mainimage2,mainimage3,company,brands}){

    const [selectedBrandIndex, setSelectedBrandIndex] = useState(null);
    const [tableData, setTableData] = useState([]); 
    const [width,setWidth]=useState();
    const [showTable, setShowTable] = useState(false); 

    const rates = async (index) => {
      
      setSelectedBrandIndex(index);
      const item = category;

      const accessToken = sessionStorage.getItem('accessToken');
      console.log(item);
      var newAccessToken =  accessToken.replace(/^"|"$/g, '');
      if(newAccessToken==null){
        newAccessToken='*';
      }
      console.log(newAccessToken);
      await axios.get(`http://localhost:8000?item=${item}`,{
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${newAccessToken}`,
        },})
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

    useEffect(() => {
        const handleResize = () => {
          const windowWidth = window.innerWidth;
          if (windowWidth <= 800) {
            setWidth('100%');
          } else {
            setWidth('40%');
          }
        };
        
       
    
        handleResize();
     window.addEventListener('resize', handleResize);
     return () => {
          window.removeEventListener('resize', handleResize);
        };
      }, []);

      useEffect(() => {
        if (selectedBrandIndex !== null) {
            setShowTable(true);
        } else {
            setShowTable(false);
        }
    }, [selectedBrandIndex]);

    return(
        <div className="product-main-div">
            <ImageSlider 
            image1={mainimage1} 
            image2={mainimage2} 
            image3={mainimage3} 
            width='100%'  
            height='90vh'/>
            <div className="qw">
            <div className="product-head-div">
            <h2 className="pic-head">{category.toUpperCase()}</h2>
            </div>
            </div>
        <div className="text-product">
            <div className="space"></div> 
            <div className="w-100 product-details">
                <div className=" product-details-text desktop">
                <h1 className="product-h1">OUR {category.toUpperCase()}</h1>
                empor incididunt ut labore et dolore magna aliqua. Turpis massa tincidunt dui ut ornare lectus. Mattis vulputate enim nulla aliquet porttitor lacus luctus accumsan. 
                Elementum facilisis leo vel fringilla est ullamcorper eget. Ipsum consequat nisl vel pretium lectus quam. Eu turpis egestas pretium aenean pharetra magna ac placerat vestibulum. Feugiat in ante metus dictum at tempor commodo ullamcorper a. Etiam non quam lacus suspendisse faucibus interdum posuere lorem. Venenatis a condimentum vitae sapien pellentesque habitant. Elementum facilisis leo vel fringilla est ullamcorper. Dignissim cras tincidunt lobortis feugiat vivamus. Ut morbi tincidunt augue interdum velit euismod in pellentesque. Nibh ipsum consequat nisl vel pretium lectus quam id leo.
                </div>
                <div className=" product-details-text mobile">
                <h1 className="product-h1">OUR {category.toUpperCase()}</h1>
                empor incididunt ut labore et dolore magna aliqua. Turpis massa tincidunt dui ut ornare lectus. Mattis vulputate enim nulla aliquet porttitor lacus luctus accumsan. 
                </div>
                <div className=" cardSlider">
                <ImageSlider 
                image1="./images/pipes/smallCard1.png" 
                image2="./images/pipes/smallCard2.png"
                image3="./images/pipes/smallCard3.png" 
                width={width}
                height='50vh'/> 
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
                                    <Card2 text={textWithLineBreaks} heading={item.desc} image="./images/logo.png" /> 
                                    <div className="card2Space1"></div>
                                    </div>
                                );
                                })}
                    </div>
                )}
                {/* {showTable ? (
                  <table className="product-table">
                      <thead>
                          <tr>
                              <th>Description</th>
                              <th>Rate</th>
                              <th>Size</th>
                          </tr>
                      </thead>
                      <tbody>
                          {filteredTableData().map((item, index) => (
                              <tr key={index}>
                                  <td>{item.desc}</td>
                                  <td>{item.rate}</td>
                                  <td>{item.size}</td>
                              </tr>
                          ))}
                      </tbody>
                  </table>

                ) : (
                    <h1></h1>
                )} */}
            </div>
            <div className="space"></div> 
            </div>
            <div className="space"></div> 
            <div className="space"></div> 
            <div className="space"></div> 
        </div>
    )
}