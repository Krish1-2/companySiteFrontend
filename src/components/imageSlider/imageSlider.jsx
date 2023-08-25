import React from "react";
import './imageSlider.css'

export default function Slider({image1,image2,image3}){

    return(
    <div class="picture-div">
    <div class="slide-images">
            <div class="img-container">
                <img src={image1} alt="image1" />
            </div>
            <div class="img-container">
                <img src={image2} alt="image2" />
            </div>
            <div class="img-container">
                <img src={image3} alt="image3" />
            </div>
    </div>
</div>
)
}