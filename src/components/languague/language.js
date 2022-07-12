import React, {useContext} from "react";
import {FaRegMoon } from 'react-icons/fa';
import {FormattedDate } from "react-intl";
import deutschland from "../../assets/img/langs/deutschland.jpg"
import spain from "../../assets/img/langs/spain.png"
import united_kingdom from "../../assets/img/langs/united-kingdom.png"
import { Dim, ImgLangs, Lang, LangM, Pdate } from "./language.style";


//Language 
import {langContext} from '../../context/langContext'
function Language (){

    const language = useContext(langContext);

    


    return  (
        <LangM>
        <Dim>
         <ImgLangs>

             <Lang  onClick={()=> language.setlanguage('de-DE')} src={deutschland} width="26px" height="19px" />
            
             <Lang  onClick={()=> language.setlanguage('es-CO')} src={spain}  width="26px" height="26px" />
            
             <Lang  onClick={()=> language.setlanguage('en-US')} src={united_kingdom}  width="26px" height="26px" />
           
         </ImgLangs>
            
            <Pdate>
            <FormattedDate
              value={Date.now()}
              year="numeric"
              month="long"
              day="numeric"
              weekday="long"
            /> 
            </Pdate>
         
         </Dim>
     
        <span>  <FaRegMoon/> </span>
           
              
        </LangM>
    )


} 

export default Language;