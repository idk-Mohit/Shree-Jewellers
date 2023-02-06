import React, { useEffect, useRef, useState } from 'react'
import styled from 'styled-components'
import { Logo } from '../../images'
import { HeroData } from '../../Content'
import { Button } from '../../UI'
import parse from 'html-react-parser'
import sr, { srConfig } from '../../utils/srConfig'

const Hero = () => {
    const revealHeader = useRef(null);
    const revealSpan = useRef(null);
    const revealImage = useRef(null);
    const [current, setCurrent] = useState(0);
    const length = HeroData.length;
    const nextSlide = () => {
        setCurrent(current === length - 1 ? 0 : current + 1);
    };
    const timeout = setTimeout(() => nextSlide(), 10000);
    useEffect(() => {
        sr.reveal(revealImage.current, srConfig(200, "bottom"))
        sr.reveal(revealHeader.current, srConfig(400, "left"))
        sr.reveal(revealSpan.current, srConfig(600, "right"))
        return () => clearTimeout(timeout);
        // eslint-disable-next-line
    }, [])

    if (!Array.isArray(HeroData) || HeroData.length === 0) return null;
    return (
        <Container>
            {HeroData.map((slide, index) => {
                const title = parse(slide.title)
                return <div key={index}>
                    {index === current &&
                        <BgImage bgImage={slide.image} className="flex-column">
                            <div className="flex-column">
                                <img ref={revealImage} src={Logo} alt="MainLogo" />
                                <h2 ref={revealHeader}>{title}</h2>
                                <hr />
                                <span ref={revealSpan}>CUSTOM DESIGNs</span>
                                <Button>SHOP NOW</Button>
                            </div>
                        </BgImage>
                    }
                </div>
            })
            }
        </Container>
    )
}

export default Hero

const Container = styled.section`
    min-height: 100vh;
    width: 100%;
    height: 100vh;
    background-color: black;
`

const BgImage = styled.div`
    width:100%;
    height: 100%;
    min-height: 100vh;
    background-image: ${props => (`url(${props.bgImage})`)};
    background-position:center;
    background-size:cover;
    background-repeat:no-repeat;
    box-sizing:border-box;

    img{
        width: 4rem;
    }

    div{
        width:100%;
        height:100vh;
        min-height:100vh;
        align-items: center;
        justify-content:center;
        gap:1rem;

        h2{
            text-align:center;
            font-size: var(--font-heading);
        }
    }
`