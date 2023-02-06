import React from 'react'
import styled from 'styled-components'
import { Autoplay, Pagination } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'
import { VerticalData } from '../../Content'

const VerticalCarousel = () => {
    const Slides = VerticalData.map((item, index) => (
        <SwiperSlide key={index}>
            <p>{item.item}</p>
        </SwiperSlide>
    ))
    return (
        <Container className='flex-column'>
            <h3>Brand's History</h3>
            <Swiper
                direction={"vertical"}
                pagination={{
                    clickable: true,
                }}
                autoplay={{
                    delay: 5000
                }}
                // loop={true}
                modules={[Pagination, Autoplay]}
                className="mySwiper"
            >
                {Slides}
            </Swiper >
        </Container >
    )
}

export default VerticalCarousel

const Container = styled.div`
    height: 350px;
    width: 50%;
    margin-left: auto;
    justify-content: center;
    h3{
        font-size: var(--font-subheading);
        font-weight: 200;
    }
    p{
        max-width: 70%;
        color: var(--bg-gray);
        margin-right: 10%;
        text-align: left;
        font-weight: 300;
        font-size: 16px;
        letter-spacing: 1px;
        line-height: 150%;
    }
    
    .swiper {
        width: 100%;
        height: inherit;
    }
    .swiper-slide {
        font-size: 18px;
        /* Center slide text vertically */
        display: flex;
        align-items: center;   
    }
    .swiper-pagination{
        display: flex;
        flex-direction: column;
        gap:1rem;
        .swiper-pagination-bullet{
            width: 70px;
            height: 3px;
            border-radius: 4px;
            background:var(--bg-gray);

            &-active{
                background: white;
            }
        }
    }


    @media(max-width:1440px){
        width: 70%;
    }
    @media(max-width:1024px){
        width: 90%;
    }
    @media(max-width:768px){
        width: 90%;
        margin: auto;
        height: 435px;
        p{
            max-width: 100%;
            margin: 0;
        }
        .swiper-pagination{
            display: none;
        }
    }
`