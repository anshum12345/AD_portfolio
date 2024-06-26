import { motion } from "framer-motion";
import React from "react";
import styled from "styled-components";

const Box = styled(motion.div)`
  // background-color: red;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  transition: transform 0.3s ease;
  color: ${(props) => props.theme.text};
  border: 2px solid ${(props) => props.theme.text};
  background-color: ${(props) => props.theme.body};
  box-shadow: 0 0 1rem 0 rgba(0, 0, 0, 0.2);
  cursor: pointer;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  max-width: 30rem;
  
 


  &:hover {
    transform: translateY(-5px);
  }
`;
const Image = styled.div`
  width: 100%;
  height: 200px;
  background-image: url(${props => props.img});
  background-size: cover;
  background-position: center;
`;

const Title = styled.h3`
margin: 0;
padding: 1rem;
font-family: "Karla", sans-serif;
font-weight: 700;
color: ${(props) => props.theme.title};

`;

const HashTags = styled.div`
  margin-bottom: 0.5rem;
  display:flex;
  flex-wrap:wrap;
  padding:0.1rem;
  
`;

const Tag = styled.span`
  margin-right:0.5rem;
  margin-bottom:0.5rem;
  padding:0.25rem 0.5rem;
  background-color:${(props)=>props.theme.tagBg};
  color:${(props)=>props.theme.tagText};
  border-radius:0.5rem;
`;

const LinksContainer = styled.div`
  display: flex;
  justify-content: space-between;
  // margin-top: 1rem;
  padding:0.1rem;
  width:100%;

  
`;

const StyledLink = styled.a`
  color: blue;
  font-weight:bold;
  text-decoration: none;
  transition: color 0.5s ease;
  margin-left:3.2rem;
  &:hover {
    color: #6c757d;
  }
`;

const GithubLink = styled.a`
  color: blue;
  font-weight:bold;
  text-decoration: none;
  transition: color 0.5s ease;
  margin-right:3.2rem;
  &:hover {
    color: #6c757d;
  }
`;

const BlogComponent = (props) => {
  const { name, tags, Github, imgSrc, link } = props.blog;

  return (
    <Box>
      <Image img={imgSrc} />
      <Title>{name}</Title>
      <HashTags>
        {tags.map((tag, index) => (
          <Tag key={index}>#{tag}</Tag>
        ))}
      </HashTags>
      <LinksContainer>
        <StyledLink href={link} target="_blank" rel="noopener noreferrer">Website</StyledLink>
        <GithubLink href={Github} target="_blank" rel="noopener noreferrer">
          GitHub
        </GithubLink>
      </LinksContainer>
    </Box>
  );
};

export default BlogComponent;
