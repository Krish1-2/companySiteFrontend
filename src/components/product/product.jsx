import React from "react";
import './products.css'
import ImageSlider from '../imageSlider/imageSlider'

export default function Product({category,image1,image2,iamge3,company}){
    return(
        <div className="product-main-div">
            <div className="space"></div> 
            <ImageSlider image1="./images/homeimg1.png" image2='./images/homeimg2.png' image3='./images/back1.jpeg'/>
            <div className="product-head-div">
            <h2 className="pic-head">{category}</h2>
            </div>
        <div className="text-product">
            <div className="space"></div> 
            <div className="w-100 product-details">
                <div className="w-50 product-details-text">
                <h1 className="product-h1">OUR {category}</h1>
                empor incididunt ut labore et dolore magna aliqua. Turpis massa tincidunt dui ut ornare lectus. Mattis vulputate enim nulla aliquet porttitor lacus luctus accumsan. 
                Elementum facilisis leo vel fringilla est ullamcorper eget. Ipsum consequat nisl vel pretium lectus quam. Eu turpis egestas pretium aenean pharetra magna ac placerat vestibulum. Feugiat in ante metus dictum at tempor commodo ullamcorper a. Etiam non quam lacus suspendisse faucibus interdum posuere lorem. Venenatis a condimentum vitae sapien pellentesque habitant. Elementum facilisis leo vel fringilla est ullamcorper. Dignissim cras tincidunt lobortis feugiat vivamus. Ut morbi tincidunt augue interdum velit euismod in pellentesque. Nibh ipsum consequat nisl vel pretium lectus quam id leo.
                </div>
                <div className="w-50 p-2">
                <ImageSlider image1="./images/1.jpg" image2='./images/2.jpeg' image3='./images/back1.jpeg'/> 
                </div>
            </div>
            <h4 className="head-exp pt-5">OUR BRANDS</h4>
            <div className="line"/>
            <div className="space"></div> 
            <div className="product-comapny"></div>
            <h4 className="head-exp pt-5">RATES</h4>
            <div className="line"/>
            <div className="space"></div> 
            </div>
            <div className="space"></div> 
            <div className="space"></div> 
            <div className="space"></div> 
        </div>
    )
}