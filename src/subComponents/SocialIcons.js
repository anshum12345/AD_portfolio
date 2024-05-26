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

const SocialIcons = (props) => {
  return (
    <Icons>
      <motion.div
        whileHover={{ scale: 1.2 }}
        whileTap={{ scale: 0.8 }}
        transition={{ type: "spring", duration: 0.3 }}
      >
        <a
          style={{ color: "inherit" }}
          target="_blank"
          href={"https://github.com/anshum12345"}
        >
          <Github
            width={25}
            height={25}
            fill={props.theme === "dark" ? DarkTheme.text : DarkTheme.body}
          />
        </a>
      </motion.div>
      <motion.div
        whileHover={{ scale: 1.2 }}
        whileTap={{ scale: 0.8 }}
        transition={{ type: "spring", duration: 0.3 }}
      >
        <a
          style={{ color: "inherit" }}
          target="_blank"
          href={"https://www.linkedin.com/in/anshum-dwivedi-67530922a/"}
        >
          <Linkedin
            width={25}
            height={25}
            fill={props.theme === "dark" ? DarkTheme.text : DarkTheme.body}
          />
        </a>
      </motion.div>
      <motion.div
        whileHover={{ scale: 1.2 }}
        whileTap={{ scale: 0.8 }}
        transition={{ type: "spring", duration: 0.3 }}
      >
        <a
          style={{ color: "inherit" }}
          target="_blank"
          href={"https://leetcode.com/Xavier_2212/"}
        >
          <LeetCode
            width={25}
            height={25}
            fill={props.theme === "dark" ? DarkTheme.text : DarkTheme.body}
          />
        </a>
      </motion.div>
      <motion.div
        whileHover={{ scale: 1.2 }}
        whileTap={{ scale: 0.8 }}
        transition={{ type: "spring", duration: 0.3 }}
      >
        <a
          style={{ color: "inherit" }}
          target="_blank"
          href={"https://drive.google.com/file/d/16bjuWGUIdgAm9xfKP4M7b4DybpyoDMMF/view?usp=drivesdk"}
        >
          <Resume
            width={25}
            height={25}
            fill={props.theme === "dark" ? DarkTheme.text : DarkTheme.body}
          />
        </a>
      </motion.div>
      <Line
        color={props.theme}
        initial={{ height: 0 }}
        animate={{ height: "4rem" }}
        transition={{ type: "spring", duration: 1, delay: 0.8 }}
      />
    </Icons>
  );
};

export default SocialIcons;
