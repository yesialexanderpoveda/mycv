
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

@media (min-width: 790px){
  width: 100%; 
  display: flex;
   justify-content: space-around;
  
   
   
  }

`
export const Questions = styled.div`

width: 90%;
height: 90%
margin: 0 10%;
margin-bottom: 10px;
margin-top: 10px;
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

@media (min-width: 790px){
  width: 30vw;
  margin: 0px;
}
`

export const Input = styled.input`

background: rgba(102, 155, 188, 0.8);
border: 2.5px solid #003049;
border-radius: 4px;
margin-bottom: 10px;
width: 300px;
height: 30px;
`
export const Buttom = styled.button`
margin: 0 5%;
background: #003049;
color: #FDF0D5;
border: 2.5px solid #003049;
border-radius: 4px;
margin-bottom: 5px;
width: 250px;
height: 30px;

`
export const ImgIcons = styled.img`

width: 20px;
margin-right: 5px;


`