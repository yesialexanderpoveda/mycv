
import styled from "styled-components"
export const colors ={
  heafoo: '#C1121F' 
  }
export const Foohead = styled.div`
export const colors ={
heafoo: '#C1121F' 
}
background: ${colors.heafoo}; 
width: 100%;
color: #003049;
padding-top: 20px;
-webkit-box-shadow: 0px -0.2em 0.4em 0px rgba(0,0,0,0.25);
`
export const Fooone = styled.div`

font-size: x-small;
display: flex;
justify-content:space-between;
margin-top: 15px;

&:before{
  content: "";
  position: absolute;
  width 80vw;
  margin-top: -8px;
  
  height: 2px;
  background: #003049;
}
`

export const Foores = styled.div`
font-size: 1em;
letter-spacing: 0.1em;
margin-right: 18px;
font-family: 'Bangers', cursive;
@media (min-width: 790px){
  width: 100%; 
  display: flex;
   justify-content: space-around;
  
   
   
  }

`
export const Questions = styled.div`

width: 90%;
height: 90%
margin-bottom: 10px;
margin-top: 10px;
margin-left: 15px;
text-align: center; 


@media (min-width: 790px){
  width: 30vw;
  margin: 0px;
  text-align: center; 
}
`

export const Form = styled.form`
color: #003049;
margin: 0 10%;
display: flex;
flex-direction:column;
margin-bottom: 20px;
text-shadow: 0px 0.3em 0.3em rgba(0, 0, 0, 0.4);
filter: drop-shadow(0 0 0.05em #ddd);
font-size: 1em;
@media (min-width: 790px){
  width: 30vw;
  margin: 0px;
}
`

export const Input = styled.input`

background: #eee;
border: 2.5px solid #003049;
border-radius: 4px;
margin-top: 5px;

margin-bottom: 10px;
width: 19em;
height: 30px;
@media (min-width: 790px){
  width: 300px;
  
}
`
export const Buttom = styled.button`
background: #003049;
color: #FDF0D5;
border: 2.5px solid #003049;
border-radius: 4px;
margin-bottom: 5px;
width: 250px;
height: 30px;
font-family: 'Lobster', cursive;
cursor: pointer;
&:active{
  color: #DDD;
  filter: drop-shadow(0 0 0.05em #669BBC);
}

`
export const ImgIcons = styled.img`

width: 20px;
margin-right: 5px;


`
export const Pform = styled.p`
font-size: 16px; 
line-height: 1.8;
-moz-transform: skew(0deg, 0.1deg);
-webkit-transform: skew(0deg, 0.1deg);
-o-transform: skew(0deg, 0.1deg);
-ms-transform: skew(0deg, 0.1deg);
transform: skew(0deg, 0.3deg);

text-shadow: 0px 0.3em 0.3em rgba(0, 0, 0, 0.4);
filter: drop-shadow(0 0 0.05em #ddd);
`