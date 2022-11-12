import React from 'react'
import disney from "../assets/partners/disney.svg"
import microsoft from "../assets/partners/microsoft.svg"
import duoligo from "../assets/partners/duolingo.svg"
import netflix from "../assets/partners/netflix.svg"
import nike from "../assets/partners/nike.svg"
import spotify from "../assets/partners/spotify.svg"
import tiktok from "../assets/partners/tiktok.svg"

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const Partners = () => {

    const settings = {
        dots: false,
        infinite: true,
        speed: 4000,
        slidesToShow: 6,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 4000,
        cssEase: "linear",
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 3,
                    infinite: true,
                },
            },

            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 2,
                    infinite: true,
                },
            },
        ]
    }
    return (
        <div className='container mx-auto px-5 sm:px-20'>
            <Slider {...settings} className='opacity-30 flex items-center sm:justify-between gap-10 py-8'>
                <div>
                    <img src={disney} alt="" className='w-28 h-10' />
                </div>
                <div>
                    <img src={duoligo} alt="" className='w-28 h-10' />
                </div>
                <div>
                    <img src={microsoft} alt="" className='w-28 h-10' />
                </div>
                <div>
                    <img src={netflix} alt="" className='w-28 h-10' />
                </div>
                <div>
                    <img src={nike} alt="" className='w-28 h-10' />
                </div>
                <div>
                    <img src={spotify} alt="" className='w-28 h-10' />
                </div>
                <div>
                    <img src={tiktok} alt="" className='w-28 h-10' />
                </div>
            </Slider>
        </div>
    )
}

export default Partners
