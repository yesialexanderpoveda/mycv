import myImg from './../assets/hv.gif'
import styled from "styled-components"
export const colors ={
heafoo: '#C1121F' 
}
export const AboutDiv = styled.div`
min-height: 90vh;
margin-top: 50px;

display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
filter: drop-shadow(0 0 0.1em #669BBC);

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
-webkit-text-stroke: 0.5px #003049;
color: #669BBC;

`

export const ProfileSection = styled.div`
margin: 10px;
text-align: center;
padding: 1.5em;
color: #ddd;
-webkit-text-stroke: 0.8px #669BBC;
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
text-shadow: 0px 0.3em 0.3em rgba(0, 0, 0, 0.4);

@media (min-width: 790px) {
  width: 30vw;
  line-height: 25px;
}

`
export const Img = styled.div`
margin: 0 20%;
width: 120px;
height: 130px;
background-blend-mode: darken;
margin-bottom: 12px;
background-image: url(${myImg});
filter: saturate(55%);
border-radius: 5px;
-webkit-box-shadow: 11px 14px 16px -2px rgba(0,0,0,0.69);
background-position: bottom left;
background-repeat: no-repeat;
background-size: 120px 130px; 

@media (min-width: 790px){
width: 120px;
height: 150px;
background-size: 125px 150px;
position: relative;
}

`
export const Pprofile = styled.p`
filter: drop-shadow(0 0 0.05em #C1121F);

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
filter: saturate(60%);
`