import React from "react";
import './home.css';
import Card from "../../components/card/card";
import ImageSlider from '../../components/imageSlider/imageSlider'
import { useEffect,useState } from "react";

export default function Home(){

  useEffect(() => {
    const lines = document.querySelectorAll(".line");
    const texts=document.querySelectorAll(".animate");
    
    const triggerPosition = window.innerHeight / 1; 

    const width = window.innerWidth;
 
    const scrollHandler = () => {
      const scrollY = window.scrollY;

      texts.forEach((text) => {
        const lineOffset = text.offsetTop;
        const isVisible = scrollY + triggerPosition >= lineOffset;

        if (isVisible) {
          text.style.animation = "floatUp 1.5s ease-in-out";
        } else {
          text.style.animation = "none"; 
        }
      });

      lines.forEach((line) => {
        const lineOffset = line.offsetTop;
        const isVisible = scrollY + triggerPosition >= lineOffset;

        if (isVisible) {
          line.style.animation = "growLine 2s ease-in-out forwards";
        } else {
          line.style.animation = "none"; 
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
    <ImageSlider 
    image1="./images/homeimg2.png" 
    image2='./images/homeimg1.png' 
    image3="./images/homeimg3.png"
    width='100%'
    height='90vh'
    />
     <div className="experience">
      <div className="space"></div> 
        <div className="qoute-text desktop" >WHERE PERFECTION MEETS EXCELLENCE</div>
         <div class="dotted-line desktop"></div>
         <h4 className="head-exp pt-5 animate">50 YEARS OF EXPERIENCE</h4>
      <div className="line"></div>
         <div className="space"></div> 
        <div className="text-div desktop ">        
With immense pride, we introduce ourselves as pioneers in the electrical trade, boasting over 80 years of experience and knowledge spanning three generations. This legacy positions us as industry leaders, well-prepared to meet the diverse needs of our valued clients. 
Our extensive experience, goodwill, robust resources, skilled staff, and efficient logistics enable us to ensure product availability and swift deliveries, reaffirming our status as a trusted partner in all electrical endeavors. 
As we embrace the future, we carry forward the wisdom of our past while remaining adaptable to new technologies and opportunities, secure in our commitment to upholding our legacy of excellence.
         </div>
         <div className="text-div mobile ">        
With immense pride, we introduce ourselves as pioneers in the electrical trade, boasting over 80 years of experience and knowledge spanning three generations. This legacy positions us as industry leaders, well-prepared to meet the diverse needs of our valued clients. 
Our extensive experience, skilled staff, and efficient logistics enable us to ensure product availability and swift deliveries, reaffirming our status as a trusted partner. 
         </div>
        <div className="space"></div> 
        <div className="qoute-image">
            <div className="blackend-qoute-div" > <p className="animate">YOUR  SATISFACTION,<br></br>OUR MOTO<br></br>YOUR NEEDS,<br></br>OUR GOAL</p></div>
        </div>
        <div className="space"></div> 
        <div className="head-exp pt-5 animate">OUR SERVICES</div>
        <div className="line"/>
        <div className="space"></div> 
        <div className="text-div desktop ">
        Our services have been refined to perfection over eight decades, making our electrical retail shop the go-to destination for all your electrical requirements. The moment you step into our store, you'll encounter a level of service that can only come from decades of unwavering dedication. 
        Our seasoned staff, armed with profound knowledge and a relentless commitment to customer satisfaction, stand ready to assist you.
        Whether you seek advice on cutting-edge innovations, need assistance troubleshooting an electrical issue, or simply require the right product, our team is your trusted guide.
        </div>
        <div className="text-div mobile ">
        Our services have been refined to perfection, making our electrical retail shop the go-to destination for all your electrical requirements. The moment you step into our store, you'll encounter a level of service that comes from decades of unwavering dedication. 
        Whether you seek advice on cutting-edge innovations, need assistance troubleshooting an electrical issue, or simply require the right product, our team is your trusted guide.
        </div>
     <div className="space"></div> 
        <div className="cards">
        {Object.entries(cards).map(([heading,text]) => (
            <Card key={heading} text={text} heading={heading} image={pictures[heading]}/>
          ))}
        </div>
        <h7 className="prompt">*click on card to view details</h7>
        <div className="space"></div> 
        <div className="home-div-journey">
        <h4 className="head-exp pt-5 text-white animate">OUR JOURNEY</h4>
         <div className="line bg-light"/>
         <div className="space "></div>
         <div className="text-div desktop">
        Our services have been refined to perfection over eight decades, making our electrical retail shop the go-to destination for all your electrical requirements. The moment you step into our store, you'll encounter a level of service that can only come from decades of unwavering dedication. 
        Our seasoned staff, armed with profound knowledge and a relentless commitment to customer satisfaction, stand ready to assist you.
        Whether you seek advice on cutting-edge innovations, need assistance troubleshooting an electrical issue, or simply require the right product, our team is your trusted guide.
        </div>
        <div className="text-div mobile">
        Our services have been refined to perfection, making our electrical retail shop the go-to destination for all your electrical requirements. The moment you step into our store, you'll encounter a level of service that comes from decades of unwavering dedication. 
        Whether you seek advice on cutting-edge innovations, need assistance troubleshooting an electrical issue, or simply require the right product, our team is your trusted guide.
        </div>
         </div>
        </div>
     <div className="space"></div> 
     <div className="space"></div> 
    </div>
)
}