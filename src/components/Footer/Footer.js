import React from 'react';
import { AiFillFacebook, AiFillGithub, AiFillLinkedin } from 'react-icons/ai';
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import {  SocialIcons } from '../Header/HeaderStyles';
import {  LinkColumn, LinkItem, LinkTitle, SocialContainer, SocialIconsContainer, Container } from './FooterStyles';
import { AnimationOnScroll } from 'react-animation-on-scroll';

const Footer = () => {
  return (
    <Section id="contact">
    <SectionDivider divider />
    <SectionTitle>Contact Me</SectionTitle>
    <AnimationOnScroll duration={2} animateIn="animate__fadeInUpBig">
        <Container>
          <LinkColumn>
                <LinkTitle>Call</LinkTitle>
                <LinkItem href="tel:+8801859140956">+880 1859-140956</LinkItem>
              </LinkColumn>
              <LinkColumn>
                <LinkTitle>Email</LinkTitle>
                <LinkItem href="mailto:mdashikul2222@gmail.com">
                  mdashikul2222@gmail.com
                </LinkItem>
              </LinkColumn>
              <LinkColumn>
                <LinkTitle>Address</LinkTitle>
                <LinkItem>
                  246 Fakirkhil, Anowara, Chittagong
                </LinkItem>
              </LinkColumn>
            
            <SocialIconsContainer>
              <SocialContainer>
                <SocialIcons href="https://github.com/Mohammad-Ashikul-Islam">
                  <AiFillGithub size="3rem" />
                </SocialIcons>
                <SocialIcons href="https://www.linkedin.com/in/mdashikul2222/">
                  <AiFillLinkedin size="3rem" />
                </SocialIcons>
                <SocialIcons href="https://www.facebook.com/ashikul2222">
                  <AiFillFacebook size="3rem" />
                </SocialIcons>
              </SocialContainer>
            </SocialIconsContainer>
        </Container>
      </AnimationOnScroll>
    </Section>
  );
};

export default Footer;
