import React from 'react'
import Slider from 'react-slick';
import './ImageSlider.css'
import data from './sliderdata';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { MdArrowForwardIos} from 'react-icons/md'
import { MdArrowBackIos } from 'react-icons/md';
const PreviousBtn = (props) =>{
    // console.log(props);
    const {className, onClick} = props;
    return(
        <div className={className} onClick={onClick}>
            <MdArrowBackIos style={{color:'white', fontSize:'22px',marginLeft:'5px'}}/>
        </div>
    )
}

const NextBtn = (props) =>{
    // console.log(props);
    const{className, onClick} = props;
    return(
        <div className={className} onClick={onClick}>
            <MdArrowForwardIos style={{color:'white', fontSize:'22px'}}/>
        </div>
    )
}

 const ImageSlider = () => {
    var settings = {
        dots: true,
        infinite: false,
        speed: 1000,
        
        
      };
  return (
    <div>
        <Slider {...settings} autoplay autoplaySpeed={2000} prevArrow={<PreviousBtn/>} nextArrow={<NextBtn/>}>
            {
                data.map((item)=>{
                    return(
                        <div key={item.id}>
                            <img src={item.img} alt="" style={{width:'100%', height:'80vh', objectFit:'cover'}} />
                        </div>
                    )
                })
            }
        </Slider>
    </div>
  )
}

export default ImageSlider;
