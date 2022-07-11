import React, { useState } from "react";
import {IntlProvider} from "react-intl";
import MessageEs from "../lang/es-CO.json";
import MessageEn from "../lang/en-US.json";
import MessageDo from "../lang/do-DO.json";

const langContext = React.createContext();
const LangProvider = ({ children }) => {
  const [messages, setMessages] = useState(MessageEn);
  const [locale, setLocate] = useState("en-US");

  const setlanguage = (language) => {
    console.log("change language to", language);
    switch (language) {
      case "es-CO":
        setMessages(MessageEs);
        setLocate("es-CO");
        break;
      case "en-US":
        setMessages(MessageEn);
        setLocate("en-US");
        break;
      case "do-DO":
        setMessages(MessageDo);
        setLocate("do-DO");
        break;
      default:
        setMessages(MessageEn);
        setLocate("en-US");
        break; 
    }
  };
  return (
    <langContext.Provider value={{ setlanguage: setlanguage }}>
      <IntlProvider locale={locale} messages={messages}>
       {children}
      </IntlProvider>
    </langContext.Provider>
  );
};
export { LangProvider, langContext };
