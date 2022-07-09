import styled from "styled-components"


export const Content = styled.div`
margin: 0 2.5%;
margin-top: 30px;
`
export const Project = styled.div`
width: 95%;
padding: 3px;
border: 2px solid #003049;
border-radius: 10px;
margin: 8px;
text-align:center;
text-decoration:none;
-webkit-box-shadow: 0px 6px 10px -2px rgba(0,0,0,0.69);
margin-bottom: 1em;


`

export const Imgp = styled.img`

width: 130px;
height: 80px;
margin-right: 10px;
margin-left: 2px;
object-fit: fill;
border-radius: 5px;

filter: saturate(50%);
-webkit-box-shadow: 11px 14px 16px -2px rgba(0,0,0,0.69);
&:hover{
    filter: sepia(30%);
    
    
}
`
export const Golink = styled.div`
display: flex;
justify-content: space-between;
flex-grap:grap;
align-items: center; 
text-align: rigth;
margin-top: 7px;
padding: 5px;
color: #003049;
font-family: 'Bangers', cursive;
font-size: 1.2em;  

`
export const Pnav = styled.p`
background: #003049;
width:90px;
height: 30px;
border-radius: 3px;
margin: 0 20%;
line-height: 30px;
text-align: center; 
font-family: 'Lobster', cursive;
`
export const Navproject = styled.a`


color: #ddd;
text-decoration: none;
$$:link{
    text-decoration: none;
}


`