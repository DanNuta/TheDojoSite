import styled, {keyframes } from "styled-components";


interface Style {
  bottom?: string,
  error?: number | null
}


export const InputStyle = styled.input<Style>`
width: 100%;
border-width: 1px;
border-style: solid;
border-radius: 10px;
height: 100%;
box-sizing: border-box;
padding-left: 15px;
outline: none;
transition-duration: .5s;
transition: all;
border-color: ${props => props.error === 0 && "rgba(236, 93, 74, 1)" ||
                     props.error === null && "rgba(178, 176, 191, 1)"
  };


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

export const Container = styled.div<Style>`
  display: flex;
  flex-direction: column;
  margin-bottom: ${props => props.bottom};
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
