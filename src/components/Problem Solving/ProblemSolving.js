import React from 'react';
import { Section, SectionDivider, SectionTitle } from '../../styles/GlobalComponents';
import { AnimationOnScroll } from 'react-animation-on-scroll'
import { List, ListItem, A } from './ProblemSolvingStyles';

const ProblemSolving = () => {
    return (
        <Section>
            <SectionDivider divider/>
            <SectionTitle>Problem Solving Skills</SectionTitle>
                <List>
                    <ListItem>
                    <AnimationOnScroll duration={2} animateIn="animate__fadeInUpBig">
                        &#9638; Solved <b>500+</b> problems overall<A href='https://www.stopstalk.com/user/profile/Mohammad_Ashikul_Islam'> &#9644; Stopstalk </A>
                    </AnimationOnScroll>
                    </ListItem>
                    <ListItem>
                    <AnimationOnScroll duration={2} animateIn="animate__fadeInRightBig">
                        &#9638; Solved <b>108</b> problems in <A href='https://www.beecrowd.com.br/judge/en/profile/205431'>Beecrowd </A>
                    </AnimationOnScroll>
                    </ListItem>
                    <ListItem>
                    <AnimationOnScroll duration={2} animateIn="animate__fadeInLeftBig">
                        &#9638; Solved <b>23</b> problems(Katas) in <A href='https://www.codewars.com/users/ashikul_islam'>Codewars </A> with JS
                    </AnimationOnScroll>
                    </ListItem>
                    <ListItem>
                    <AnimationOnScroll duration={2}     animateIn="animate__fadeInRightBig">
                        &#9638; Solved <b>18</b> problems in <A href='https://lightoj.com/user/blackcap1021'>LightOJ </A>
                    </AnimationOnScroll>
                    </ListItem>
                    <ListItem>
                    <AnimationOnScroll duration={2} animateIn="animate__fadeInLeftBig">
                        &#9638; Participated <b>28</b> contest in <A href='https://codeforces.com/contests/with/Black_ShadowX'>Codeforces </A>
                    </AnimationOnScroll>
                    </ListItem>
                    <ListItem>
                    <AnimationOnScroll duration={2} animateIn="animate__fadeInRightBig">
                        &#9638; Participated <b>10+</b> onsite contest lifetime
                    </AnimationOnScroll>
                    </ListItem>
                    <ListItem>
                    <AnimationOnScroll duration={2} animateIn="animate__fadeInDownBig">
                        &#9638; <b>Champion,</b> IIUC CSE Day Intra University Programming Contest 2018 (Junior Category)

                    </AnimationOnScroll>
                    </ListItem>
                    
                </List>
        </Section>
    );
};

export default ProblemSolving;