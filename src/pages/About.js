import React from 'react';
import {FaAngleRight } from 'react-icons/fa';

/* import {AboutDiv, ContentArticle, ProfileSection, Img, ImgPower} from '../../styles/theme' */
import { AboutDiv, ContentArticle, ProfileSection, Img, ImgPower, Pcont, Hhi} from '../styles/about.style';
import power from '.././assets/power.gif'
function About() {

  
  return (
    
     <AboutDiv>
    <ProfileSection>
      <br/>
      <Img />
     <p>Full stack javascript developer</p>
     <h4>Yesid A. Poveda Y.</h4>
    </ProfileSection>

     <ContentArticle>
      <Hhi>Hola mundo!</Hhi>
      <br/>
      <Pcont>
      Es un parecido a después de mucho tiempo, encontrar el ego invisible y el alma corroída
      de humanidad y, presentar a las sombras el final de una obra y el comienzo de otra. Me presento,
      mi nombre es Yesid, mis amig@s me dicen Yara o Yapy, nací en
      Bogotá Colombia, me gusta la poesía, me gusta viajar e interrelacionarme por medio de
      diferentes leguajes siempre y caundo tenga la capacidad de comprender y responder a dicho lenguaje, 
      me gusta construir aprendizaje apartir de la interacción de comunidades
      open source y de desarrollo de software. Actualmente <strong>programo para el
      entorno web,</strong> más específicamente front-end y back-end con lo relacionado a js, <strong>dirijo en un proyecto open source</strong>, aprendo sobre web3 y me
      interesa colaborar y trabajar en proyectos T.I. donde pueda hacer uso de mis
      habilidades.
      </Pcont>
      <Pcont>Alguna tecnologias con las que he trabajado recientemente:</Pcont>
      <Pcont><span><FaAngleRight /> <b>Front-end:  </b> </span> ReactJs, NextJs, Angular</Pcont>  
      <Pcont><span><FaAngleRight /> <b>Back-end:  </b></span>NodeJs, Express, NestJs</Pcont>  
      <Pcont><span><FaAngleRight /> <b>Diseño:  </b> </span> Sass, Figma, Gimp, Css </Pcont>  
      <Pcont><span><FaAngleRight /> <b>Bases de datos:  </b> </span> Mysql, Mongo, Redis, ORM </Pcont>  
      <Pcont><span><FaAngleRight /> <b>DevOps:  </b> </span> Docker </Pcont> 
      <ImgPower src={power} />
      </ContentArticle>
      <br/>
      <br/>
      </AboutDiv>
      
  
  );
}

export default About;
