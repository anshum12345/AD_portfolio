import React, { useEffect, useRef } from "react";
import { ThemeProvider } from "styled-components";
import { lightTheme } from "./Themes";
import { motion } from "framer-motion";

import LogoComponent from "../subComponents/LogoComponent";
import SocialIcons from "../subComponents/SocialIcons";
import PowerButton from "../subComponents/PowerButton";

import { Work } from "../data/WorkData";
import Card from "../subComponents/Card";
import { YinYang } from "./AllSvgs";
import BigTitlte from "../subComponents/BigTitlte";
import styled from "styled-components";

// Styled Components
const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: ${({ theme }) => theme.body};
  min-height: 100vh;
  overflow: hidden;
  padding: 20px;

  @media (max-width: 768px) {
    padding: 10px;
  }
`;

const CardList = styled(motion.ul)`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0;
  margin: 0;
  list-style-type: none;
  width: 100%;
  transition: transform 0.3s ease;

  @media (max-width: 768px) {
    padding: 0 10px;
  }
`;

const StyledCard = styled(Card)`
  margin: 20px;
  padding: 20px;
  border-radius: 10px;
  background-color: ${({ theme }) => theme.cardBg};
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s, box-shadow 0.3s;
  width: 100%;
  max-width: 500px; // Set a max width for larger screens

  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 8px 20px rgba(0, 0, 0, 0.2);
  }
`;

const YinYangContainer = styled.span`
  position: fixed;
  bottom: 20px;
  right: 20px;
  transition: transform 0.3s ease;
  cursor: pointer;

  &:hover {
    transform: scale(1.1);
  }
`;

const WorkPage = () => {
  const ref = useRef(null);
  const yinyang = useRef(null);

  useEffect(() => {
    const element = ref.current;

    const rotate = () => {
      element.style.transform = `translateX(${-window.pageYOffset}px)`;
      yinyang.current.style.transform = "rotate(" + -window.pageYOffset + "deg)";
    };

    window.addEventListener("scroll", rotate);
    return () => {
      window.removeEventListener("scroll", rotate);
    };
  }, []);

  return (
    <ThemeProvider theme={lightTheme}>
      <PageContainer>
        <LogoComponent theme="light" />
        <SocialIcons theme="light" />
        <PowerButton />

        <CardList ref={ref}>
          {Work.map((d) => (
            <StyledCard key={d.id} data={d} />
          ))}
        </CardList>

        <YinYangContainer ref={yinyang}>
          <YinYang width={80} height={80} fill={lightTheme.text} />
        </YinYangContainer>

        <BigTitlte text="Projects" top="10%" right="0%" />
      </PageContainer>
    </ThemeProvider>
  );
};

export default WorkPage;
