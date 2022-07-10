import styled from "styled-components";

export const LangM = styled.div`
width: 98%;
height: 90px;
margin: 0 1%;
display: flex;
flex-direction: row; 
justify-content: space-around;
position: relative;
top: 30px;
@media (min-width: 790px){
    width: 70%;
    margin: 0 15%;
    
    }
`
export const ImgLangs = styled.div`
width: 85px;
display: flex;
align-items: center;

`
export const Lang = styled.img`
margin-right: 4px;
border-radius:3px;
`