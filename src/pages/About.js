import React from 'react';
import { FormattedMessage } from "react-intl";
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
      <Hhi>
      <FormattedMessage
            id="profile.hi"
            defaultMessage="Hello World"
            />

      </Hhi>
      <br/>
      <Pcont>
      <FormattedMessage
            id="profile.pone"
            defaultMessage="To finish a project and take it to the world of experts is to try to find the invisible ego and the corroded soul of humanity; of those who know what the project ignores. Finishing a project is presenting to the light, shadows of code that needs to be factored by the feedback of users, it is the end of a work and the beginning of another."
            />
      </Pcont>
      <br/>
      <Pcont>
      <FormattedMessage
            id="profile.ptwo"
            defaultMessage="I introduce myself, my name is Yesid, my friends call me Yara or Yapy, I was born in Bogota Colombia, I like poetry, I like to travel and interrelate through different languages; as long as I have the ability to understand and respond to that language. I like to build learning from the interaction of open source and software development communities. Currently, I program for the web environment, more specifically front-end and back-end related to javascript,"
            />
     <strong><FormattedMessage
        id="profile.strong"
        defaultMessage="I manage an open source project"
     /></strong>, <FormattedMessage
         id="profile.pthree"
     defaultMessage="I am learning about web3 and I am interested in collaborating and working on I.T. projects where I can make use of my skills."
  /> 
      </Pcont>
      <Pcont><FormattedMessage
         id="profile.pfour"
     defaultMessage="Some of the technologies I have worked with recently."
      /> 
      </Pcont>
      <Pcont  translate="no"><span><FaAngleRight /> <b>Front-end:  </b> </span> ReactJs, NextJs, Angular</Pcont>  
      <Pcont  translate="no"><span><FaAngleRight /> <b>Back-end:  </b></span>NodeJs, Express, NestJs</Pcont>  
      <Pcont  translate="no"><span><FaAngleRight /> <b>Diseño:  </b> </span> Sass, Figma, Gimp, Css </Pcont>  
      <Pcont  translate="no"><span><FaAngleRight /> <b>Bases de datos:  </b> </span> Mysql, Mongo, Redis, ORM </Pcont>  
      <Pcont  translate="no"><span><FaAngleRight /> <b>DevOps:  </b> </span> Docker </Pcont> 
      <ImgPower src={power} />
      </ContentArticle>
      <br/>
      <br/>
      </AboutDiv>
      
  
  );
}

export default About;
