import React from 'react'
import { CheckBoxLabel, Container, ContBtn, H3, HeaderContainer, InputContainer, LangSelContainer, P } from './WelcomeSection.element'
import { NavLink } from "react-router-dom"

const WelcomeSection = () => {
  return (
    <Container>
      <HeaderContainer>
        <H3>welcome.</H3>
      </HeaderContainer>
      <LangSelContainer>
        <P>choose a language</P>
        <InputContainer>
          <CheckBoxLabel>english</CheckBoxLabel>
          <CheckBoxLabel>español</CheckBoxLabel>
        </InputContainer>
        <ContBtn>continue</ContBtn>
        {/* <NavLink to="/main">
          <ContBtn>continue</ContBtn>
        </NavLink> */}
      </LangSelContainer>
    </Container>
  )
}

export default WelcomeSection