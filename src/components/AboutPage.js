import React from 'react'
import styled, { keyframes, ThemeProvider } from 'styled-components'
import {DarkTheme, lightTheme} from './Themes';


import LogoComponent from '../subComponents/LogoComponent';
import SocialIcons from '../subComponents/SocialIcons';
import PowerButton from '../subComponents/PowerButton';
import ParticleComponent from '../subComponents/ParticleComponent';
import BigTitle from '../subComponents/BigTitlte'
import astronaut from '../assets/Images/spaceman.png'

const Box = styled.div`
  background-color: ${props => props.theme.body};
  width: 100vw;
  height: 100vh;
  position: relative;
  overflow: hidden;
`;

const float = keyframes`
  0% { transform: translateY(-10px); }
  50% { transform: translateY(15px) translateX(15px); }
  100% { transform: translateY(-10px); }
`;

const fadeIn = keyframes`
  0% { opacity: 0; }
  100% { opacity: 1; }
`;

const rotate = keyframes`
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
`;

const pulse = keyframes`
  0% { border-color: ${(props) => props.theme.text}; }
  50% { border-color: #f39c12; }
  100% { border-color: ${(props) => props.theme.text}; }
`;

const scale = keyframes`
  0% { transform: scale(1); }
  50% { transform: scale(1.2); }
  100% { transform: scale(1); }
`;

const Spaceman = styled.div`
  position: absolute;
  top: 10%;
  right: 5%;
  width: 20vw;
  animation: ${float} 4s ease infinite;
  
  img {
    width: 100%;
    height: auto;
  }

  @media(max-width:700px){
   width:30%;
   height:auto;


  }

  a {
    text-decoration: none;
    color: #DDD3C3;
    font-size: 2rem;
    font-weight: bold;
    font-family: cursive;
  }
`;

const Main = styled.div`
  border: 2px solid ${(props) => props.theme.text};
  color: ${(props) => props.theme.text};
  padding: 2rem;
  width: 50vw;
  height: 60vh;
  z-index: 3;
  line-height: 1.5;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: calc(0.6rem + 1vw);
  backdrop-filter: blur(4px);
  animation: ${fadeIn} 2s ease-in-out;
  position: absolute;
  left: calc(5rem + 5vw);
  top: 10rem;
  font-family: 'Ubuntu Mono', monospace;
  font-style: italic;
`;

// const RotatingElement = styled.div`
//   position: absolute;
//   top: 5%;
//   left: 5%;
//   width: 15vw;
//   height: 15vw;
//   border-radius:2rem;
//   background-color: #DDD3C3;
//   animation: ${rotate} 10s linear infinite;

//   @media(max-width:1000px){
//     width:25vw;
//     height:25vw;
//     top:15%;
//     left:10%;

//   }

//   // @media(max-width:1000px){
//   //   width:20vw;
//   //   height:20vw;
//   //   top:15%;
//   //   left:10%;

//   // }
// `;

const PulsingBorder = styled.div`
  position: absolute;
  bottom: 5%;
  right: 5%;
  width: 15vw;
  border-radius:50%;

  height: 15vw;
  border: 3px solid ${(props) => props.theme.text};
  animation: ${pulse} 2s infinite;

  @media(max-width:1000px){
    width:20vw;
    height:20vw;
    bottom:5%;
    right:5%;

  }

  // @media(max-width:1000px){
  //   width:20vw;
  //   height:20vw;
  //   bottom:5%;
  //   right:10%;

  // }
`;

const ScalingElement = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  width: 5vw;
  height: 5vw;
  background-color: #3498db;
  animation: ${scale} 3s ease-in-out infinite;

  @media(max-width:700px){
    width:10vw;
    height:10vw;
    top:50%;
    left:50%;

  }
`;





const AboutPage = () => {
    return (
        <ThemeProvider theme={DarkTheme}>
<Box>

<LogoComponent theme='dark'/>
<SocialIcons theme='dark'/>
<PowerButton />
<ParticleComponent theme='dark' />

        <Spaceman>
<a href='https://anshumdwivedi.netlify.app' >Blog</a>

            <img src={astronaut} alt="spaceman" />
            {/* <a href='https://anshumdwivedi.netlify.app'>Blog</a> */}
        </Spaceman>    
        <Main>
        


I specialize in creating awesome websites that look great and work smoothly for users. I'm really good at using tools like React.js, HTML, CSS, and JavaScript to make websites look amazing and fun to use. 
<br /> <br/>
But I'm not just limited to making things look pretty—I'm also starting to learn how to make the behind-the-scenes stuff work smoothly too, using technologies like Node.js and Express.js.
<br/> <br/>
Also Knowledge about Data Structure & Algorithm and solve the problems on LeetCode, GeeksforGeeks and CodeChef.
<br/>
        </Main>

        <BigTitle text="ABOUT" top="10%" left="25%" />
        {/* <RotatingElement /> */}
        <PulsingBorder />
        <ScalingElement />

        </Box>

        </ThemeProvider>
        
    )
}

export default AboutPage
