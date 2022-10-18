import React from 'react'
import styled from 'styled-components';

import { ButtonBack, ButtonFront } from './index'

const Button = (props) => (
  <ButtonBack alt={props.alt} form={props.form} disabled={props.disabled}>{props.children}
    <ButtonFront alt={props.alt} onClick={props.onClick} disabled={props.disabled}>{props.children}</ButtonFront>
  </ButtonBack>
);

export const ResumeButton = styled.button`
  padding: 17px;
  border-radius: 20px;
  background-color: MediumPurple;
  color: black;
  cursor: pointer;
  font-size: 20px;
  border: 1px solid yellow;
  box-shadow: rgba(0, 0, 0, 0.56) 0px 22px 70px 4px;
  &:hover {
    background-color: orchid;
    border: 1px solid lime;
  }

  @media ${props => props.theme.breakpoints.sm}{
    font-size: 19px;
		width: 60%;
    
	}
`
export default Button
