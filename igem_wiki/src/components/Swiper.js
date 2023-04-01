import React, { useState, useEffect, useRef } from 'react';
import SwiperCss from '../css/Swiper.module.css';

function Swiper(props) {
    const [currentIdx, setCurrentIdx] = useState(0);
    const swiperRef = useRef(null);
    const { images } = props;

    useEffect(() => {
        const handleSlide = setInterval(() => {
            setCurrentIdx((idx) => (idx + 1) % (images.length + 1));
        }, 3000);
        return () => clearInterval(handleSlide);
    }, [images.length]);

    useEffect(() => {
        const swiperWidth = swiperRef.current.offsetWidth;
        if (currentIdx === images.length) {
            swiperRef.current.style.transition = "";
            swiperRef.current.style.transform = `translateX(-${images.length * swiperWidth}px)`;
            setTimeout(() => {
                swiperRef.current.style.transition = "transform 0.5s ease";
                setCurrentIdx(0);
            }, 0);
        } else {
            swiperRef.current.style.transform = `translateX(-${currentIdx * swiperWidth}px)`;
        }
    }, [currentIdx, images.length]);

    return (
        <>
            <div className={SwiperCss.swiperWrapper}>
                <div
                    className={SwiperCss.swiper}
                    ref={swiperRef}
                >
                    {[...images, images[0]].map((image, idx) => (
                        <img
                            className={`${SwiperCss.swiper__image} ${
                                idx === currentIdx ? SwiperCss.active : SwiperCss.inactive
                            }`}
                            src={image}
                            alt={`slide ${idx + 1}`}
                            key={idx}
                        />
                    ))}
                </div>
                <div className={SwiperCss.swiper__dots_wrapper}>
                    {images.map((_, idx) => (
                        <div
                            className={`${SwiperCss.swiper__dot} ${
                                idx === currentIdx ? SwiperCss.active : ' '
                            }`}
                            key={idx}
                            onClick={() => setCurrentIdx(idx)}
                        />
                    ))}
                </div>
            </div>
        </>
    );
}

export default Swiper;