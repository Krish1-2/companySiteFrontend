import React from "react";
import './home.css';
import Card from "../../components/card/card";
import ImageSlider from '../../components/imageSlider/imageSlider'
import { useEffect } from "react";

export default function Home(){

  useEffect(() => {
    // Select all elements with the class "line"
    const lines = document.querySelectorAll(".line");

    const triggerPosition = window.innerHeight / 1; 

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
  


const cards={'TIME MANAGEMENT':'Our commitment to time management sets us apart. With experienced staff and readily available logistics, we not only ensure timely deliveries but often exceed our commitments while keeping costs at a minimum. Our extensive network of vehicles covers deliveries of all sizes throughout India.',
        'CREDIT':'Trust is woven into the fabric of our existence. As seasoned veterans, we carry forward the goodwill established by our ancestors, ensuring your trust in us remains unwavering.',
        'WAREHOUSING':'Our warehousing capacity exceeds 1200 square feet, a rarity in the market. These strategically located premises are easily accessible by transport, simplifying and streamlining our delivery process.'}

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
         <h4 className="head-exp pt-5 ">50 YEARS OF EXPERIENCE</h4>
         {/* <div className="line-container"> */}
      <div className="line"></div>
        {/* </div> */}
         <div className="space"></div> 
        <div className="text-div">        
With immense pride, we introduce ourselves as pioneers in the electrical trade, boasting over 80 years of experience and knowledge spanning three generations. This legacy positions us as industry leaders, well-prepared to meet the diverse needs of our valued clients. 
Our extensive experience, goodwill, robust resources, skilled staff, and efficient logistics enable us to ensure product availability and swift deliveries, reaffirming our status as a trusted partner in all electrical endeavors. 
As we embrace the future, we carry forward the wisdom of our past while remaining adaptable to new technologies and opportunities, secure in our commitment to upholding our legacy of excellence.
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
        Our services have been refined to perfection over eight decades, making our electrical retail shop the go-to destination for all your electrical requirements. The moment you step into our store, you'll encounter a level of service that can only come from decades of unwavering dedication to our craft. 
        Our seasoned staff, armed with profound knowledge and a relentless commitment to customer satisfaction, stand ready to assist you.
        Whether you seek advice on cutting-edge innovations, need assistance troubleshooting an electrical issue, or simply require the right product, our team is your trusted guide.
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