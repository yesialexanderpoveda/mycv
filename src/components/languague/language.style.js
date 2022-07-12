import styled from "styled-components";

export const LangM = styled.div`
font-family: 'Lobster', cursive;
letter-spacing: 0.1em;
font-weight: lighter;
-webkit-text-stroke: 0.5px #003049;

box-sizing: content-box;
color: #669BBC;
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
left: 5%;
top: 20px;
`