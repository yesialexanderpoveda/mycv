import React, { useRef, useContext } from "react";
import emailjs from "@emailjs/browser";
import { useForm } from "react-hook-form";
import { FormattedMessage } from "react-intl";
import {
  Foohead,
  Foores,
  Questions,
  Form,
  Input,
  Buttom,
  Fooone,
  ImgIcons,
  Pform,
} from "./footer.style";
import github from "../../assets/github.png";
import linkedin from "../../assets/linkedin.png";
import twitter from "../../assets/twitter.png";
// language

function Footer() {

 


  const { register, formState: {errors}, handleSubmit } = useForm();

  const form = useRef();
  function sendemail(e) {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_fyu375i",
        "template_pxuqz6g",
        e.target,
        "jrwuZWNikPCLN4ILv"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  }

  return (
    <Foohead>
      <Foores>
        <Questions>
          <Pform>
            <FormattedMessage
            id="footer.pone"
            defaultMessage="Do you want to ask me a question? do you have any doubt about it?"
            />
            
          </Pform>
          <br />
          <Pform>
          <FormattedMessage
            id="footer.ptwo"
            defaultMessage="Send me a message and fill out the form. As soon as I can I will answer your request"
            />
            
          </Pform>
          <br />
        </Questions>

        <Form ref={form} onSubmit={handleSubmit(sendemail)}>
          <label>
          <FormattedMessage
                id="footer.name"
                defaultMessage="name"
              />
          </label>
          <Input type="text" {...register("name",{required: true})}></Input>
          {errors.name?.type === "required" && 
              <FormattedMessage
                id="footer.namev"
                defaultMessage="please enter your name"
              />
             }
          <label>  <FormattedMessage
                id="footer.e-mail"
                defaultMessage="e-mail"
              ></FormattedMessage></label>
          <Input type="text" {...register("user_email", {pattern: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/})}></Input>
          {errors.user_email?.type  === "pattern" &&  <FormattedMessage
                id="footer.e-mailv"
                defaultMessage="please enter your email address correctly"
              ></FormattedMessage>
          }
          <label>
          <FormattedMessage
                id="footer.message"
                defaultMessage="message"
              />
          </label>
          <Input type="text" {...register("message",{required: true})}></Input>
          {errors.message?.type === "required" && <FormattedMessage
                id="footer.messagev"
                defaultMessage="please write your message"
              />}

          <Buttom type="submit" value="Send">  <FormattedMessage
                id="footer.buttom"
                defaultMessage="send"
              /></Buttom>
        </Form>
      </Foores>
      <Fooone>
        <p>© 2022 <FormattedMessage
                id="footer.reserved"
                defaultMessage="all rights reserved"
              /> - yapy</p>
        <div>
          <a href="https://twitter.com/yapyDev"><ImgIcons src={twitter} /></a> 
          <a href="https://github.com/yesialexanderpoveda"><ImgIcons src={github} /></a>
          <a href="https://www.linkedin.com/in/yesidpoveda/"><ImgIcons src={linkedin} /></a>
        </div>
      </Fooone>
    </Foohead>
  );
}

export default Footer;
