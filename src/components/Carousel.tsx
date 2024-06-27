import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { Box } from '@mui/material';
import image from '../assets/ian-schneider-TamMbr4okv4-unsplash.jpg';

const carouselImages = [
    image,
    image,
    image,
    image,
    image,
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
            height: '50vh',
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
