import React from 'react'
import styled from 'styled-components'

const Map = () => (
    <Container>
        <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d11779.228226902611!2d77.21375271973137!3d28.63019654968136!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cfd37b741d057%3A0xcdee88e47393c3f1!2sConnaught%20Place%2C%20New%20Delhi%2C%20Delhi%20110001!5e0!3m2!1sen!2sin!4v1646113643639!5m2!1sen!2sin"
            title="map"
            loading="lazy"
        ></iframe>
    </Container>
)

export default Map

const Container = styled.div`
    iframe {
    width: 100%;
    height: 100%;
  }
`