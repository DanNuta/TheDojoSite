import styled, {keyframes } from "styled-components";

export const InputStyle = styled.input`
width: 100%;
border: 1px solid #B2B0BF;
border-radius: 10px;
height: 100%;
box-sizing: border-box;
padding-left: 15px;
outline: none;
transition-duration: .5s;
transition: all;


&:focus{
  transition-duration: .5s;
  transition: all;
  border-color: rgba(67, 92, 185, 1);
}
`;


export const LabelStyle = styled.label`
color: #435CB9;
font-weight: bold;
font-size: 11px;
margin-bottom: 11px;
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
`;


export const Div = styled.div`
position: relative;
height: 50px;
`

export const IconStyle = styled.span`
position: absolute;
top: 0;
bottom: 0;
right: 15px;
height: 100%;
display: flex;
align-items: center;

`
