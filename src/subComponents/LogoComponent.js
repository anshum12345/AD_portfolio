import React from 'react'
import styled from 'styled-components'
import { DarkTheme } from '../components/Themes'

const Logo = styled.h1`
  display: inline-block;
  color: ${props => props.color === 'dark' ? DarkTheme.text : DarkTheme.body};
  font-family: 'Pacifico', cursive;

  position: fixed;
  left: 2rem;
  top: 2rem;
  z-index: 3;

  transition: all 0.3s ease; /* Add transition for smooth animation */

  &:hover {
    // color: ${props => props.color === 'dark' ? DarkTheme.body : DarkTheme.text};
    
    transform: scale(1.1); /* Scale up the logo on hover */
  }
`

const LogoComponent = (props) => {
  return (
    <Logo color={props.theme}>
      AD
    </Logo>
  )
}

export default LogoComponent
