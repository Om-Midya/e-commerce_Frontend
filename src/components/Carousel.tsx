import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { Box } from '@mui/material';
import img1 from '../assets/img.png';
import img2 from '../assets/img_1.png';
import img3 from '../assets/img_2.png';
import img4 from '../assets/img_3.png';
import img5 from '../assets/img_4.png';

const carouselImages = [
    img1,
    img2,
    img3,
    img4,
    img5,
];

const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
};

export const Carousel: React.FC = () => {
    return (
        <Box style={{
            width: '90%',
            height: 'auto',
            marginTop: 0,
            marginLeft: 'auto',
            marginRight: 'auto',
        }}>
            <Slider {...settings}>
                {carouselImages.map((image, index) => (
                    <Box key={index}
                        style={{
                            width: '100%',
                            height: '50vh',
                            objectFit: 'cover',
                        }}
                    >
                        <img
                            src={image}
                            alt={`carousel-${index}`}
                            style={{
                                width: '100%',
                                height: '50vh',
                                objectFit: 'cover',
                            }}
                        />
                    </Box>
                ))}
            </Slider>

        </Box>
    );
}
