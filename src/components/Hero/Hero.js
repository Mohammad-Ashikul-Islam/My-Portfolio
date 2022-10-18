import React from 'react';
import { TypeAnimation } from 'react-type-animation';
import { TextLoop } from "react-text-loop-next";
import { LeftSection, A, Section, SectionText, SectionTitle } from './HeroStyles';
import {ResumeButton} from '../../styles/GlobalComponents/Button'

const Hero = (props) => (
  
  <>
    <Section row nopadding height width>
      <LeftSection>
        <SectionTitle main center>
          Hello <br />
          <TypeAnimation
          // Same String at the start will only be typed once, initially
          sequence={[
          "Welcome",
          1000,
          "I'm Mohammad Ashikul Islam",
          1000,
          ]}
          speed={20} // Custom Speed from 1-99 - Default Speed: 40
          wrapper="span" // Animation will be rendered as a <span>
          repeat={Infinity} // Repeat this Animation Sequence infinitely
        />

        </SectionTitle>
        <SectionText>
          I'm a&nbsp;
          <TextLoop children={[
                  "Software Engineer",
                  "Web Developer",
                  "Tech Enthusiast",
                ]}
              />
        </SectionText>
        <ResumeButton><A href='https://drive.google.com/uc?id=18izbpgl2WR8-sEU0kZQ1kwgUlLtoiS7T&export=download' ><b>Download Resume</b></A></ResumeButton>
        <br/>
      </LeftSection>
    </Section>
  </>
);

export default Hero;