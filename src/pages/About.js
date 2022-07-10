import React from 'react';
import {FaAngleRight } from 'react-icons/fa';

/* import {AboutDiv, ContentArticle, ProfileSection, Img, ImgPower} from '../../styles/theme' */
import { AboutDiv, ContentArticle, ProfileSection, Img, ImgPower, Pcont, Hhi, Pprofile} from '../styles/about.style';
import power from '.././assets/power.gif'
function About() {

  
  return (
    
     <AboutDiv>
    <ProfileSection>
      <br/>
      <Img />
     <Pprofile><span  translate="no">Full stack javascript developer</span></Pprofile>
     <Pprofile>Yesid A. Poveda Y.</Pprofile>
    </ProfileSection>

     <ContentArticle>
      <Hhi>Hola mundo!</Hhi>
      <br/>
      <Pcont>
      Terminar un proyecto y llevarlo al mundo de los expertos es intentar encontrar
      el ego invisible y el alma corroída de humanidad, de quienes obvian lo que el proyecto ignora, 
      es  presentar a la luz las sombras el código que necesita ser factorizado, es  el final de una 
      obra y el comienzo de otra. 
      </Pcont>
      <br/>
      <Pcont>
      Me presento, mi nombre es Yesid, mis amig@s me dicen Yara o Yapy, nací en Bogotá Colombia, 
      me gusta la poesía, me gusta viajar e interrelacionarme por medio de diferentes lenguajes; 
      siempre y cuando tenga la capacidad de comprender y responder a dicho lenguaje, me gusta 
      construir aprendizaje a partir de la interacción de comunidades open source y de desarrollo 
      de software. Actualmente, programo para el entorno web, más específicamente front-end y back-end 
      relacionado con javascript, <strong>dirijo un proyecto open source</strong>, aprendo sobre web3 y me
      interesa colaborar y trabajar en proyectos T.I. donde pueda hacer uso de mis habilidades.
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
