//Education Page
import React from 'react';
import { Section, SectionDivider, SectionTitle } from '../../styles/GlobalComponents';
import { Box, Boxes, BoxNum, BoxText, OuterBox } from './AcomplishmentsStyles';
import {AnimationOnScroll} from 'react-animation-on-scroll'

const Acomplishments = () => (
  <Section>
    <SectionDivider divider/>
    <SectionTitle>Education</SectionTitle>
    <AnimationOnScroll duration={2} animateIn="animate__fadeInRightBig">
      <Boxes>
          <OuterBox>
            <Box>
              <BoxNum>Internatinal Islamic University Chittagong</BoxNum>
              <BoxText>
                2017-Current<br/>
                Bsc in CSE
              </BoxText>
            </Box>
          </OuterBox>
          <OuterBox>
            <Box>
              <BoxNum>Hajera Taju University College</BoxNum>
              <BoxText>
                2014-2016<br/>
                HSC
              </BoxText>
            </Box>
          </OuterBox>
          <OuterBox>
            <Box>
              <BoxNum>Chatary Union High School</BoxNum>
              <BoxText>
                2012-2014<br/>
                SSC
              </BoxText>
            </Box>
          </OuterBox>
      </Boxes>
    </AnimationOnScroll>
  </Section>
);

export default Acomplishments;
