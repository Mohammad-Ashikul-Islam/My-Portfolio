import React from 'react';
import { DiFirebase, DiReact, DiZend } from 'react-icons/di';
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { List, ListContainer, ListItem, ListParagraph, ListTitle, Image, Blink, Span,Text } from './TechnologiesStyles';
import "animate.css/animate.min.css";
import { AnimationOnScroll } from 'react-animation-on-scroll';


const Technologies = () =>  (
  <Section id="skills">
    <SectionDivider divider />
    <SectionTitle>Skills</SectionTitle>
    <SectionText>
    </SectionText>
    <AnimationOnScroll duration={5} animateIn="animate__rubberBand">
      <List>
        <ListItem> 
          <Blink> 
            <Span> 
              <Image src='images/HTML-5.png' alt="alt"/>
            </Span> 
          </Blink>
          <Text>HTML-5</Text> 
        </ListItem>
        
        <ListItem>
          <Blink>
            <Span>
              <Image src='images/CSS-3.png' alt="alt"/>
            </Span>
          </Blink>
          <Text>CSS-3</Text>
        </ListItem>
        <ListItem>
          <Blink>
            <Span>
              <Image src='images/Bootstrap-5.jpg' alt="alt"/>       
            </Span>
          </Blink>
          <Text>Bootstrap-5</Text>
        </ListItem>
        <ListItem>
          <Blink>
            <Span>
              <Image src='images/React.jpg' alt="alt"/>
            </Span>
          </Blink>
          <Text>ReactJS</Text>
        </ListItem>
        <ListItem>
          <Blink>
            <Span>
              <Image src='images/Axios.png' alt="alt"/>
            </Span> 
          </Blink>
          <Text>AXIOS</Text>
        </ListItem>
        <ListItem>
          <Blink>
            <Span>
              <Image src='images/Firebase.png' alt="alt"/>
            </Span>
          </Blink>
          <Text>Firebase</Text>
        </ListItem>
        <ListItem> 
          <Blink>
            <Span>
              <Image src='images/MongoDB.jpg' alt="alt"/>
            </Span> 
          </Blink>
          <Text>MongoDB</Text>
        </ListItem>
        <ListItem>
          <Blink> 
            <Span>  
              <Image src='images/Nodejs.png' alt="alt"/>
            </Span>
          </Blink>
          <Text>NodeJS</Text>
        </ListItem>
        <ListItem>
          <Blink>
            <Span>
              <Image src='images/express.png' alt="alt"/>
            </Span>
          </Blink>
          <Text>ExpressJS</Text>
        </ListItem>
        <ListItem>
          <Blink> 
            <Span> 
              <Image src='images/JWT.png' alt="alt"/>
            </Span> 
          </Blink> 
          <Text>JWT</Text>
        </ListItem>
        <ListItem>
          <Blink>
            <Span>
              <Image src='images/C++.jpg' alt="alt"/>
            </Span>
          </Blink>
          <Text>C++</Text>
        </ListItem>
        <ListItem>
          <Blink>
            <Span>
              <Image src='images/github.png' alt="alt"/>
            </Span>
          </Blink>
          <Text>Github</Text>
        </ListItem>
      </List>
      </AnimationOnScroll>
  </Section>
);

export default Technologies;
