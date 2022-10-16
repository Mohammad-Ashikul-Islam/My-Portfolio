import Link from 'next/link';
import React from 'react';
import { AiFillGithub, AiFillLinkedin } from 'react-icons/ai';
import { GiOpenTreasureChest } from 'react-icons/gi';
import { DiCssdeck } from 'react-icons/di'
import {TiSocialLinkedinCircular} from 'react-icons/ti'
import { Container, Div1, Div2, Div3, NavLink, SocialIcons } from './HeaderStyles';

const Header = () =>  (
  <Container>
    <Div1>
      <Link href="/">
        <a style={{ display: 'flex', alignItems: 'center', color:"white" }}>
          <DiCssdeck size="3rem" /> <span>ASHIK</span>
        </a>
      </Link>
    </Div1>
    <Div2>
      <li>
        <Link href="#projects">
          <NavLink>Projects</NavLink>
        </Link>
      </li>
      <li>
        <Link href="#skills">
          <NavLink>Skills</NavLink>
        </Link>
      </li>        
      <li>
        <Link href="#about">
          <NavLink>About</NavLink>
        </Link>
      </li>
      <li>
        <Link href="#contact">
          <NavLink>Contact</NavLink>
        </Link>
      </li>         
    </Div2>
      <Div3>
        <SocialIcons href="https://github.com/Mohammad-Ashikul-Islam">
          <AiFillGithub size="3rem" />
        </SocialIcons>
        <SocialIcons href="https://google.com">
          <TiSocialLinkedinCircular size="4rem" />
        </SocialIcons>
        <SocialIcons href="https://www.stopstalk.com/user/profile/Mohammad_Ashikul_Islam">
          <GiOpenTreasureChest size="3rem"/>
        </SocialIcons>
      </Div3>
    </Container>
);

export default Header;
