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
height:100vh;
position: relative;
overflow: hidden;
`
const float = keyframes`
0% { transform: translateY(-10px) }
50% { transform: translateY(15px) translateX(15px) }
100% { transform: translateY(-10px) }

`
const Spaceman = styled.div`
position: absolute;
top: 10%;
right: 5%;
width: 20vw;
animation: ${float} 4s ease infinite;
img{
    width: 100%;
    height: auto;
}
a{
    text-decoration:none;
    color:#DDD3C3;
    font-size:2rem;
    font-weight:bold;
    font-family:cursive;
}
`
const Main =  styled.div`
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
  
  position: absolute;
  left: calc(5rem + 5vw);
  top: 10rem;
  font-family: 'Ubuntu Mono', monospace;
  font-style: italic;
`




const AboutPage = () => {
    return (
        <ThemeProvider theme={DarkTheme}>
<Box>

<LogoComponent theme='dark'/>
<SocialIcons theme='dark'/>
<PowerButton />
<ParticleComponent theme='dark' />

        <Spaceman>
<a href='https://drive.google.com/file/d/16bjuWGUIdgAm9xfKP4M7b4DybpyoDMMF/view?usp=drivesdk' >Resume</a>

            <img src={astronaut} alt="spaceman" />
            <a href='https://anshumdwivedi.netlify.app'>Blog</a>
        </Spaceman>    
        <Main>
        


I specialize in creating awesome websites that look great and work smoothly for users. I'm really good at using tools like React.js, HTML, CSS, and JavaScript to make websites look amazing and fun to use. 
<br /> <br/>
But I'm not just limited to making things look pretty—I'm also starting to learn how to make the behind-the-scenes stuff work smoothly too, using technologies like Node.js and Express.js.
<br/> <br/>
Also Knowledge about Data Structure & Algorithm and solve the problems on LeetCode, GeeksforGeeks and CodeChef.
<br/>
        </Main>

        <BigTitle text="ABOUT" top="10%" left="5%" />


        </Box>

        </ThemeProvider>
        
    )
}

export default AboutPage
