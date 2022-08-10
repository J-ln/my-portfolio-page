import React from 'react'
import { Container, HeroContainer, HeroH1, HeroH3, Span } from './MainSection.element'

const MainSection = () => {
    return (
        <Container>
            <HeroContainer>
                <HeroH3>I'm <br />Julian Rolon</HeroH3>
                <HeroH1>a <br /><Span as="span"> Front-end <br /> Developer</Span></HeroH1>
            </HeroContainer>
        </Container >
    )
}

export default MainSection