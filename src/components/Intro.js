import React from 'react'
import styled from 'styled-components'
import {motion} from 'framer-motion'
import Me from '../assets/Images/portrait-man-cartoon-style-removebg-preview.png'
// import Me from '../assets/Images/3d.avif'


const Box = styled(motion.div)`

position: absolute;
left: 50%;
top: 50%;
transform: translate(-50%, -50%);
transition:0.5s ease;

width: 53vw;
height:35vh;
display: flex;


background: linear-gradient(
    to right,
    ${props => props.theme.body} 50%,
    ${props => props.theme.text} 50%) bottom,
    linear-gradient(
    to right,
    ${props => props.theme.body} 50%,
    ${props => props.theme.text} 50%) top;
    background-repeat: no-repeat;
background-size: 100% 2px;
    border-left: 2px solid ${props => props.theme.body};
    border-right: 2px solid ${props => props.theme.text};


    z-index:1;

`
const SubBox = styled.div`
width: 50%;
position: relative;
display: flex;

.pic{
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translate(-50%,0%);
  
    width: 100%;
    height: auto;
}
`

const Text = styled.div`
    font-size: calc(1em + 1.5vw);
    color:#DDD3C3;
    padding: 1rem;
    cursor: pointer;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;

    & > *:last-child {
        color:#DDD3C3;
        font-size: calc(0.5rem + 1.2vw);
        font-weight:300;
    }

    pre {
        white-space: pre-wrap; /* Preserve line breaks */
    }
`;

const Intro = () => {
    return (
        <Box
            initial={{height:0}}
            animate={{height: '55vh'}}
            transition={{ type: 'spring', duration:2, delay:1 }}
        >
            <SubBox>
                <Text>
                    <pre>
                        {`#include <iostream>
using namespace std;

int main() {
    cout << " I am Anshum Dwivedi " << endl;
    cout << " Frontend Developer " << endl;
    cout << " Familiar with DSA " << endl;

    return 0;
}`}
                    </pre>
                </Text>
            </SubBox>
            <SubBox>
                <motion.div
                    initial={{opacity:0}}
                    animate={{opacity: 1}}
                    transition={{ duration:1, delay:2 }}
                >
                    <img className="pic" src={Me} alt="Profile Pic" />
                </motion.div>
            </SubBox>
        </Box>
    )
}

export default Intro;
