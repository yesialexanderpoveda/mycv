import myImg from './../assets/hv.jpg'
import styled from "styled-components"
export const colors ={
heafoo: '#C1121F' 
}
export const AboutDiv = styled.div`
min-height: 90vh;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
@media (min-width: 790px) {
  min-height: 80vh;
  flex-direction: row;
  justify-content: center;
  align-items: start;
  margin-top: 50px;

}
`
export const Hhi = styled.h2`
font-family: 'Lobster', cursive;
letter-spacing: 0.1em;
font-weight: lighter;
color: #003049;

`

export const ProfileSection = styled.div`
margin: 10px;
text-align: center;
color: rgba(102, 155, 188, 1);
-webkit-text-stroke: 0.6px #003049;
font-family: 'Lobster', cursive;
box-shadow: 0px 0.3em 0.3em rgba(0, 0, 0, 0.25);
@media (min-width: 790px){
position: relative;
top: 100px;

}
`

export const ContentArticle = styled.div`

width: 80vw;
margin: 15px;
font-family: 'Zen Kaku Gothic Antique', sans-serif;
padding: 10px;
color: #003049;

@media (min-width: 790px) {
  width: 30vw;
  line-height: 25px;
}

`
export const Img = styled.div`
margin: 0 20%;
width: 150px;
height: 120px;
-webkit-clip-path: polygon(50% 0%, 100% 4%, 100% 100%, 50% 95%, 0 100%, 0 100%, 0 4%);
clip-path: polygon(50% 0%, 100% 4%, 100% 100%, 50% 95%, 0 100%, 0 100%, 0 4%);
background-blend-mode: darken;
margin-bottom: 12px;
background-image: linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)), url(${myImg});
filter: saturate(30%);
background-position: bottom left;
background-repeat: no-repeat;
background-size: 110px 140px; 
@media (min-width: 790px){
width: 110px;
height: 150px;
background-size: 120px 170px;
position: relative;
}

`

export const Pcont = styled.p`
font-size: 16px; 
line-height: 1.8;
-moz-transform: skew(0deg, 0.1deg);
-webkit-transform: skew(0deg, 0.1deg);
-o-transform: skew(0deg, 0.1deg);
-ms-transform: skew(0deg, 0.1deg);
transform: skew(0deg, 0.3deg);
`

export const ImgPower = styled.img`
width: 100%;
margin-top: 20px;
border-radius: 10px;
`