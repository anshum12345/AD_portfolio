import React from 'react';
import styled, { ThemeProvider, css } from 'styled-components';
import { lightTheme } from './Themes';
import { DSA, Develope } from './AllSvgs';
import LogoComponent from '../subComponents/LogoComponent';
import SocialIcons from '../subComponents/SocialIcons';
import PowerButton from '../subComponents/PowerButton';
import ParticleComponent from '../subComponents/ParticleComponent';
import BigTitle from '../subComponents/BigTitlte';


// Styled components
const Box = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 20px;
  min-height: 100vh;
background:#DDD3C3;
// flex-direction:row;

`;

const Main = styled.div`
  margin-top: 20px;
  padding: 20px;
  border: 2px solid ${(props) => props.theme.text};
  background-color: ${({ theme }) => theme.background};
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  width: 100%;

  @media screen and (min-width: 768px) {
    width: 80%;
  }

  @media screen and (min-width: 1024px) {
    width: 60%;
  }
`;

const Title = styled.h2`
  display: flex;
  align-items: center;
  font-size: 1.5rem;
  margin-bottom: 10px;

  svg {
    margin-right: 10px;
  }
`;

const Description = styled.div`
  margin-bottom: 15px;

  strong {
    font-weight: bold;
  }

  ul {
    list-style-type: none;
    padding: 0;
  }

  ul li {
    margin-bottom: 5px;
  }

  a {
    text-decoration: none;
    color: ${({ theme }) => theme.primary};
    transition: color 0.3s ease;

    &:hover {
      color: ${({ theme }) => theme.primaryHover};
    }
  }
`;

// Responsive media query styles
const hideOnSmallScreen = css`
  @media screen and (max-width: 769px) {
    display: none;
  }
`;

// MySkillsPage component
const MySkillsPage = () => {
  return (
    <ThemeProvider theme={lightTheme}>
      <Box>
        <LogoComponentContainer>
          <LogoComponent theme='light' />
        </LogoComponentContainer>
        <SocialIconsContainer>
          <SocialIcons theme='light' />
        </SocialIconsContainer>
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
    <li><a href="https://leetcode.com/u/Xavier_2212/" target="_blank">Leetcode</a></li>
    <li><a href="https://www.geeksforgeeks.org/user/debugg08/" target="_blank">GeeksforGeeks</a></li>
    <li><a href="https://www.codechef.com/users/xavier_0811" target="_blank">CodeChef</a></li>
    <li><a href="https://takeuforward.org/profile/Anshum_0811" target="_blank">Striver DSA Sheet</a></li>
  </ul>
</Description>

          <Description>
            <strong>Tools</strong>
            <ul>
           <p>VScode, Online Compiler</p>
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
            <p>Html, Css, Js, React, Redux, Sass, Bootstrap, Tailwind, Firebase, NodeJs, ExpressJs, MongoDb, TypeScript.</p>
          </Description>
          <Description>
            <strong>Tools</strong>
            <p>VScode, Github, Codepen etc.</p>
          </Description>
        </Main>
        <BigTitle text="SKILLS" top="80%" right="10%" />
      </Box>
    </ThemeProvider>
  );
};

export default MySkillsPage;

// Styled components for hiding on small screens
const LogoComponentContainer = styled.div`
  ${hideOnSmallScreen};
`;

const SocialIconsContainer = styled.div`
  ${hideOnSmallScreen};
`;
