import React from 'react'
import styled, { ThemeProvider } from 'styled-components'
import { lightTheme } from './Themes';
import { DSA, Develope } from './AllSvgs';

import LogoComponent from '../subComponents/LogoComponent';
import SocialIcons from '../subComponents/SocialIcons';
import PowerButton from '../subComponents/PowerButton';
import ParticleComponent from '../subComponents/ParticleComponent';
import BigTitle from '../subComponents/BigTitlte'

const Box = styled.div`
  background-color: #DDD3C3;
  width: 100vw;
  height: 100vh;
  position: relative;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  flex-wrap: wrap;
  padding: 2rem;

  @media (max-width: 768px) {
    flex-direction: column;
    justify-content: center;
  }
`

const Main = styled.div`
  border: 2px solid ${props => props.theme.text};
  color: ${props => props.theme.text};
  background-color: #DDD3C3;
  padding: 2rem;
  width: 30vw;
  height: 60vh;
  z-index: 3;
  line-height: 1.5;
  cursor: pointer;

  font-family: 'Ubuntu Mono', monospace;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  &:hover {
    color: ${props => props.theme.body};
    background-color: ${props => props.theme.text};
    transition: 1s ease;
  }

  @media (max-width: 1024px) {
    width: 60vw;
    height: 35vh;
    font-size:1.5rem;
  }

  @media(max-width: 1200px){
    width:60vw;
    height:40vw;
    margin-top:4rem;
    font-Size:1.5rem;
    
  }
  @media(max-width: 900px){
    width:60vw;
    margin-top:4rem;
    height:50vw;
    font-size:1.7rem;
  }

  @media (max-width: 768px) {
    width: 70vw;
    height: auto;
    // margin-bottom: 2rem;
  }
  @media(max-width: 450px){
    width:60vw;
    height:90vw;
    font-size:1.5rem;
  }
  @media(max-width: 550px){
    width:60vw;
    height:80vw;
    font-size:1.6rem;
    overflow:hidden;
  }
  @media(max-width: 408px){
    width:50vw;
    height:90vw;
    word-wrap: break-word;
    overflow: hidden;
    font-size:1.5rem;
  }
`

const Title = styled.h2`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: calc(1em + 1vw);

  ${Main}:hover & {
    & > * {
      fill: ${props => props.theme.body};
    }
  }

  & > *:first-child {
    margin-right: 1rem;
  }
`

const Description = styled.div`
  color: ${props => props.theme.text};
  font-size: calc(0.6em + 1vw);
  padding: 0.5rem 0;

  ${Main}:hover & {
    color: ${props => props.theme.body};
  }

  strong {
    margin-bottom: 1rem;
    text-transform: uppercase;
  }
  
  ul, p {
    margin-left: 2rem;
  }

  a {
    text-decoration: none;
    color: ${props => props.theme.text};
    ${Main}:hover & {
      color: ${props => props.theme.body};
    }
  }
`

const MySkillsPage = () => {
  return (
    <ThemeProvider theme={lightTheme}>
      <Box>
        <LogoComponent theme='light'/>
        <SocialIcons theme='light'/>
        <PowerButton />
        <ParticleComponent theme='light' />
        <Main>
          <Title>
            <Develope width={40} height={40} /> DSA
          </Title>
          <Description>
            Solving Data Structure and Algorithm problems using C++
          </Description>
          <Description>
            <strong>I like to code</strong>
            <ul>
              <li><a href="https://leetcode.com/u/Xavier_2212/">Leetcode</a></li>
              <li><a href="https://www.geeksforgeeks.org/user/debugg08/">GeeksforGeeks</a></li>
              <li><a href="https://www.codechef.com/users/xavier_0811">CodeChef</a></li>
            </ul>
          </Description>
          <Description>
            <strong>Tools</strong>
            <ul>
              <li>Vscode, Online Compiler</li>
            </ul>
          </Description>
        </Main>
        <Main>
          <Title>
            <Develope width={40} height={40} /> Development
          </Title>
          <Description>
            I like to build beautiful websites using different tools.
          </Description>
          <Description>
            <strong>Skills</strong>
            <p>
              Html, Css, Js, React, Redux, Sass, Bootstrap, Tailwind, Firebase, NodeJs, ExpressJs, MongoDb, TypeScript.
            </p>
          </Description>
          <Description>
            <strong>Tools</strong>
            <p>
              VScode, Github, Codepen etc.
            </p>
          </Description>
        </Main>
        <BigTitle text="SKILLS" top="80%" right="30%" />
      </Box>
    </ThemeProvider>
  )
}

export default MySkillsPage
