import React from 'react'
import { FormattedMessage } from "react-intl";
import {Content, Golink, Imgp, Navproject, Pnav, Project} from '../styles/projects.style'
import  {Dtap} from '../service/service.projects'  
const Projects = () => {

  return (
    <Content>
      <br/>
    {Dtap.map((myproject) => (
      
      <Project key={myproject.nav}>
       <Golink>
        <p>{myproject.text}</p>
         <Imgp src={myproject.img} width="100px" height="70px"/>
         </Golink>
          <Pnav>
          <Navproject href={myproject.nav} target="_blank"><FormattedMessage
          id="projects.go"
          defaultMessage="Go to web"
          /></Navproject> 
          </Pnav>
        
        <br/>
        
      </Project>
    ))}
  
  <br/>
</Content>
  )
}
  
export default Projects