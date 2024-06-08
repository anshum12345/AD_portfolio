import { motion } from "framer-motion";
import React from "react";
import styled from "styled-components";
import { Resume, Github, LeetCode, Linkedin } from "../components/AllSvgs";
import { DarkTheme } from "../components/Themes";

const Icons = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  position: fixed;
  bottom: 0;
  left: 2rem;

  z-index: 3;

  & > *:not(:last-child) {
    margin: 0.5rem 0;
  }
`;

const Line = styled(motion.span)`
  width: 2px;
  height: 8rem;
  background-color: ${(props) =>
    props.color === "dark" ? DarkTheme.text : DarkTheme.body};
`;

const SocialIcons = ({ theme }) => {
  const iconColor = theme === "dark" ? DarkTheme.text : DarkTheme.body;

  return (
    <Icons>
      {[
        {
          href: "https://github.com/anshum12345",
          Component: Github,
        },
        {
          href: "https://www.linkedin.com/in/anshum-dwivedi-67530922a/",
          Component: Linkedin,
        },
        {
          href: "https://leetcode.com/Xavier_2212/",
          Component: LeetCode,
        },
        {
          href:
            "https://drive.google.com/file/d/1V8aDX6tYoxaIfYrwIeuDiWh6Hk4ezXXr/view?usp=drivesdk",
          Component: Resume,
        },
      ].map(({ href, Component }, index) => (
        <motion.div
          key={index}
          whileHover={{ scale: 1.2 }}
          whileTap={{ scale: 0.8 }}
          transition={{ type: "spring", duration: 0.3 }}
        >
          <a
            style={{ color: "inherit" }}
            target="_blank"
            rel="noopener noreferrer"
            href={href}
          >
            <Component width={25} height={25} fill={iconColor} />
          </a>
        </motion.div>
      ))}
      <Line
        color={theme}
        initial={{ height: 0 }}
        animate={{ height: "4rem" }}
        transition={{ type: "spring", duration: 1, delay: 0.8 }}
      />
    </Icons>
  );
};

export default SocialIcons;
