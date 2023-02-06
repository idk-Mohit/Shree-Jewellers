import React from 'react'
import styled from 'styled-components'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay } from 'swiper'
import { TestimonialData } from '../../Content'
import { Logo } from '../../images'

const TestimonialCarousel = () => {
    const TestimonialItems = TestimonialData.map((item, index) => (
        <SwiperSlide key={index} className="swiperslide">
            <Content className='flex-column'>
                <p>{item.item}</p>
                <Author>{item.name}</Author>
            </Content>
        </SwiperSlide >
    ))
    return (
        <Container className='flex-column'>
            <InnerContainer>
                <img src={Logo} alt="Logo" />
                <h1>TESTIMONIALS</h1>
                <Swiper
                    autoplay={{
                        delay: 3000
                    }}
                    loop={true}
                    modules={[Autoplay]}
                    className="mySwiper"
                >
                    {TestimonialItems}
                </Swiper>
            </InnerContainer>
        </Container>
    )
}

export default TestimonialCarousel

const Container = styled.div`
  background: rgba(0, 0, 0, 0.8);
  padding: 2rem;
  text-align: center;
  justify-content: center;
  box-shadow: 4px 5px 5px rgba(0, 0, 0, 0.7);
  border-radius: 5px;
`
const InnerContainer = styled.div`
    img{
        width: 4rem;
        margin: 1rem 0;
    }
    .swiperslide{
        padding: 1rem 0;
    }
`
const Content = styled.div`
    padding-top:1rem; 
    line-height: 1.5;
    gap: 1rem;
    position: relative;
    p{
        font-size: 18px;
        width:80%;
        margin:auto;
        position: relative;
        padding: 1.5rem 0;
        &::before,&::after{
            content: '';
            height: 1px;
            width: 100px;
            background: var(--bg-gray);
            position: absolute;
            left: 50%;
            transform: translate(-50%,-50%);

        }
        &::before{
            top:0;
        }
        &::after{
            bottom: 0px;
        }
    }
`
const Author = styled.span`
    color: rgba(225,225,255,.7);
`