import React from "react";
import {FaRegMoon } from 'react-icons/fa';
import deutschland from "../../assets/img/langs/deutschland.jpg"
import spain from "../../assets/img/langs/spain.png"
import united_kingdom from "../../assets/img/langs/united-kingdom.png"
import { ImgLangs, Lang, LangM } from "./language.style";

function Language (){

    return  (
        <LangM>

         <ImgLangs>

             <Lang src={deutschland} width="26px" height="19px" />
            
            <Lang src={spain}  width="26px" height="26px" />
            
             <Lang src={united_kingdom}  width="26px" height="26px" />
           
         </ImgLangs>
     
        <span>  <FaRegMoon/> </span>
           
        
        </LangM>
    )


} 

export default Language;