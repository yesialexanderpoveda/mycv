import styled, { keyframes } from "styled-components"
export const colors ={
heafoo: '#C1121F' 
}
const titleAnimation = keyframes`
0% {
  transform: rotate(0deg);
}
50%{
  transform: rotate(-2deg);
}
100% {
  transform: rotate(2deg);
}
`


export const DivHeader = styled.div`
background: ${colors.heafoo};
height: 100%;
display: grid;
grid-template-columns: 1fr 30% 35%
grid-template-rows: 50% 50%;
box-shadow: 0px 0.3em 0.3em rgba(0, 0, 0, 0.25);

`

export const H1head = styled.h1`

font-family: 'Bangers', cursive;
font-size: 1.2em;
font-weight: bolder;
text-align: center;
-webkit-text-stroke: 0.8px #003049;
color: #669BBC;
text-shadow: 0px 0.3em 0.3em rgba(0, 0, 0, 0.4);
grid-column: 2/3;
position: relative;
bottom: -10px;
animation-name: ${titleAnimation};
animation-duration: 8s;
 animation-iteration-count: infinite;
 
 @media (min-width: 790px) {

  font-size: 1.8em;
 }
`

export const Navhead = styled.nav`
color: #003049;
margin: 0px;
grid-column: 3;
grid-row: 2;
text-align: center;
position: relative;
bottom: 3px;
`

export const H3head = styled.h3`
text-decoration: none;
width: min-content;
list-style: none;
font-size: 1em;
letter-spacing: 0.1em;
margin-right: 18px;
color: rgba(0, 48, 73);
font-weight: bold;
font-family: 'Bangers', cursive;

&:before{
  content: "";
  position: absolute;
  width: 0px;
  height: 4px;
  bottom: -3px;
  background: #780000;
  
}
&:hover:before{
  transition: 0.8s;
  width: 60px;
}

&:hover{

  color: #003049;
}

@media (min-width: 790px) {
  font-size: 1em;

}
`