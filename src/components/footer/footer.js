import React, { useRef } from "react";
import emailjs from "@emailjs/browser";

import {
  Foohead,
  Foores,
  Questions,
  Form,
  Input,
  Buttom,
  Fooone,
  ImgIcons,
} from "./footer.style";
import github from "../../assets/github.png";
import linkedin from "../../assets/linkedin.png";
import twitter from "../../assets/twitter.png";
function Footer() {

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
          <br />
          <p>
            ¿Quieres hacerme una cosulta? ¿tienes alguna duda al
            respecto?¿deseas conocerme?
          </p>
          <br />
          <p>
            Enviame un mensaje y llena el formulario. Tan pronto pueda atenderé
            la solicitud
          </p>
          <br />
        </Questions>

        <Form ref={form} onSubmit={sendemail}>
          <label>Nombre</label>
          <Input name="name" type="text"></Input>
          <label>Correo</label>
          <Input type="text" name="user_email"></Input>
          <label>Mensaje</label>
          <Input type="text" name="message"></Input>
          <Buttom type="submit" value="Send">enviar</Buttom>
        </Form>
      </Foores>
      <Fooone>
        <p>© 2022 todos los derechos reservados - yapy</p>
        <div>
          <ImgIcons src={twitter} />
          <ImgIcons src={github} />
          <ImgIcons src={linkedin} />
        </div>
      </Fooone>
    </Foohead>
  );
}

export default Footer;
