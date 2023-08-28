import SimpleImageSlider from "react-simple-image-slider";


export default function imageSlider({image1,image2,image3,width,height}){
    const images=[
        {url:image1},
        {url:image2},
        {url:image3}
    ]
  return (
    <div  className="imagesliderDiv" style={{ width: width,height: height }}>
    <SimpleImageSlider
        width={width}
        height={height}
        images={images}
        showBullets={true}
        showNavs={true}
        autoPlay={true}
        autoPlayDelay={5}
        slideDuration={1}
    />
</div>
  );
}

