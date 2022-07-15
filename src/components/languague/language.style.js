import styled, {keyframes} from "styled-components";

const animatedtext = keyframes`
from  { transform: translateZ(-4em) rotateY(0deg);   }
  to    { transform: translateZ(-4em) rotateY(360deg); }
`
export const LangM = styled.div`
font-family: 'Lobster', cursive;
letter-spacing: 0.1em;
font-weight: lighter;
-webkit-text-stroke: 0.5px #669BBC;
color: #003049;
box-sizing: content-box;
width: 98%;
height: 90px;
margin: 0 1%;
display: flex;
flex-direction: row; 
justify-content: space-around;
position: relative;
top: 30px;
overflow: hidden;

@media (min-width: 790px){
    width: 75%;
    margin: 0 15%;
        
    }
`
export const ImgLangs = styled.div`
width: 85px;
display: flex;
align-items: center;

`

export const Dim = styled.div`
display:flex;

`
export const Lang = styled.img`
margin-right: 6px;
border-radius:3px;
filter: saturate(70%);
cursor: pointer;
`

export const Pdate = styled.p`
position: relative;
left: 6%;
top: 20px;

position:relative;
animation: ${animatedtext} 10s infinite;
transform-style:preserve-3d;
`