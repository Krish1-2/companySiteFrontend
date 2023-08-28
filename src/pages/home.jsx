import React from "react";
import './home.css';
import Card from "../components/card/card";
import ImageSlider from '../components/imageSlider/imageSlider'
import { useEffect } from "react";

export default function Home(){

  useEffect(() => {
    // Select all elements with the class "line"
    const lines = document.querySelectorAll(".line");

    // Calculate the scroll position to trigger the animation
    const triggerPosition = window.innerHeight / 1; // Adjust as needed

    const scrollHandler = () => {
      const scrollY = window.scrollY;

      // Loop through each line div
      lines.forEach((line) => {
        const lineOffset = line.offsetTop;
        const isVisible = scrollY + triggerPosition >= lineOffset;

        if (isVisible) {
          line.style.animation = "growLine 2s ease-in-out forwards";
        } else {
          line.style.animation = "none"; // Remove animation if not visible
        }
      });
    };

    window.addEventListener("scroll", scrollHandler);

    return () => {
      window.removeEventListener("scroll", scrollHandler);
    };
  }, []);
  


const cards={'TIME MANAGEMENT':'Lorem ipsum dolor sit aveniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate',
        'CREDIT':'Lorem ipsum dolor sit aveniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate',
        'WAREHOUSING':'Lorem ipsum dolor sit aveniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate'}

const pictures={ 'TIME MANAGEMENT': '/images/time.jpeg',
'CREDIT': '/images/credit.jpeg',
'WAREHOUSING': '/images/trust.jpeg'}   

return(
    <div className="main-home-div">
    <div className="space"></div> 
    <ImageSlider 
    image1="./images/homeimg2.png" 
    image2='./images/homeimg1.png' 
    image3="./images/homeimg3.png"
    width='100%'
    height='100vh'
    />
     <div className="experience">
     <div className="home-logo-div">
            <img src="./images/logo.png" alt="logo"/>
      </div>
      <div className="space"></div> 
        <div className="qoute-text">WHERE PERFECTION MEETS EXCELLENCE</div>
         <div class="dotted-line"></div>
         <h4 className="head-exp pt-5 ">80 YEARS OF EXPERIENCE</h4>
         {/* <div className="line-container"> */}
      <div className="line"></div>
        {/* </div> */}
         <div className="space"></div> 
        <div className="text-div">
        empor incididunt ut labore et dolore magna aliqua. Turpis massa tincidunt dui ut ornare lectus. Mattis vulputate enim nulla aliquet porttitor lacus luctus accumsan. 
        Elementum facilisis leo vel fringilla est ullamcorper eget. Ipsum consequat nisl vel pretium lectus quam. Eu turpis egestas pretium aenean pharetra magna ac placerat vestibulum. Feugiat in ante metus dictum at tempor commodo ullamcorper a. Etiam non quam lacus suspendisse faucibus interdum posuere lorem. Venenatis a condimentum vitae sapien pellentesque habitant. Elementum facilisis leo vel fringilla est ullamcorper. Dignissim cras tincidunt lobortis feugiat vivamus. Ut morbi tincidunt augue interdum velit euismod in pellentesque. Nibh ipsum consequat nisl vel pretium lectus quam id leo.
        </div>
        <div className="space"></div> 
        <div className="qoute-image">
            <div className="blackend-qoute-div"> <p>YOUR  SATISFACTION,</p><p>OUR MOTO</p><p>YOUR NEEDS,</p><p>OUR GOAL</p></div>
        </div>
        <div className="space"></div> 
        <div className="head-exp pt-5">OUR SERVICES</div>
        <div className="line"/>
        <div className="space"></div> 
        <div className="text-div">
        empor incididunt ut labore et dolore magna aliqua. Turpis massa tincidunt dui ut ornare lectus. Mattis vulputate enim nulla aliquet porttitor lacus luctus accumsan. 
        Elementum facilisis leo vel fringilla est ullamcorper eget. Ipsum consequat nisl vel pretium lectus quam. Eu turpis egestas pretium aenean pharetra magna ac placerat vestibulum. Feugiat in ante metus dictum at tempor commodo ullamcorper a. Etiam non quam lacus suspendisse faucibus interdum posuere lorem. Venenatis a condimentum vitae sapien pellentesque habitant. Elementum facilisis leo vel fringilla est ullamcorper. Dignissim cras tincidunt lobortis feugiat vivamus. Ut morbi tincidunt augue interdum velit euismod in pellentesque. Nibh ipsum consequat nisl vel pretium lectus quam id leo.
        </div>
     <div className="space"></div> 
        <div className="cards">
        {Object.entries(cards).map(([heading,text]) => (
            <Card key={heading} text={text} heading={heading} image={pictures[heading]}/>
          ))}
        </div>
        <div className="space"></div> 
        <div className="home-div-journey">
        <h4 className="head-exp pt-5 text-white">OUR JOURNEY</h4>
         <div className="line bg-light"/>
         <div className="space "></div>
        empor incididunt ut labore et dolore magna aliqua. Turpis massa tincidunt dui ut ornare lectus. Mattis vulputate enim nulla aliquet porttitor lacus luctus accumsan. 
        Elementum facilisis leo vel fringilla est ullamcorper eget. Ipsum consequat nisl vel pretium lectus quam. Eu turpis egestas pretium aenean pharetra magna ac placerat vestibulum. Feugiat in ante metus dictum at tempor commodo ullamcorper a. Etiam non quam lacus suspendisse faucibus interdum posuere lorem. Venenatis a condimentum vitae sapien pellentesque habitant. Elementum facilisis leo vel fringilla est ullamcorper. Dignissim cras tincidunt lobortis feugiat vivamus. Ut morbi tincidunt augue interdum velit euismod in pellentesque. Nibh ipsum consequat nisl vel pretium lectus quam id leo.
        </div>
        </div>
     <div className="space"></div> 
     <div className="space"></div> 
    </div>
)
}