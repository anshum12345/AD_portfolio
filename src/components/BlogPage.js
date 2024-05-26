import React, { useEffect, useState } from 'react'
import styled, { keyframes } from 'styled-components'
// import LogoComponent from '../subComponents/LogoComponent'
// import SocialIcons  from '../subComponents/SocialIcons'
import PowerButton  from '../subComponents/PowerButton'
import { Blogs } from '../data/BlogData';
import BlogComponent from './BlogComponent'
import AnchorComponent from '../subComponents/Anchor'
import BigTitle from "../subComponents/BigTitlte"
import { motion } from 'framer-motion'

// Styled components

const fadeIn = keyframes`
    from {
        opacity: 0;
    }
    to {
        opacity: 1;
    }
`;

const MainContainer = styled(motion.div)`
    width: calc(100% - 20px); /* Decrease 20px from the width */
    padding-top: 4rem;
    min-height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #DDD3C3; /* light gray background */
    // background-image: url('https://w.forfun.com/fetch/56/562c90803ab3748a2bf3826db157ee21.jpeg'); /* Path to your background image */
    background-size: cover; /* Make sure the background covers the whole area */
    background-position: center; /* Center the background image */
    background-repeat: no-repeat; /* Prevent the background from repeating */
    animation: ${fadeIn} 1s ease-in-out; /* Adding animation */

    @media screen and (min-width: 751px) and (max-width: 1100px) {
        width: calc(100% - 40px); /* Decrease 40px from the width */
    }
`;

const Container = styled.div`
    width: 90%;
    max-width: 1200px;
    margin: 0 auto;
    padding: 20px;
    // border-radius:40px;
    box-sizing: border-box;
`;

const Center = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 3rem;
`;

const Grid = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    grid-gap: 2rem;

    @media screen and (min-width: 751px) {
        grid-template-columns: repeat(2, 1fr);
        grid-gap: 20px; /* Add a margin of 20px between the columns */
    }

    @media screen and (min-width: 751px) and (max-width: 1100px) {
        grid-gap: 30px; /* Increase the gap between divs */
    }
`;

const BlogPage = () => {

    const [numbers, setNumbers] = useState(0);
    const [showAnchor, setShowAnchor] = useState(false);

    useEffect(() => {
        let num = (window.innerHeight - 70) / 30;
        setNumbers(parseInt(num));
        handleResize(); // Call the function once to set initial state
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, [])

    const handleResize = () => {
        setShowAnchor(window.innerWidth > 650);
    }

    return (
        <MainContainer>
            <Container>
                <PowerButton />
                <Center>
                    <Grid>
                        {Blogs.map(blog => (
                            <BlogComponent key={blog.id} blog={blog} />
                        ))}
                    </Grid>
                </Center>
                {showAnchor && <AnchorComponent number={numbers} />}
                <BigTitle text="Work" top="5rem" left="5rem" />
            </Container>
        </MainContainer>
    )
}

export default BlogPage;
