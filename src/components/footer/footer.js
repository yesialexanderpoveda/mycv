import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import { useForm } from "react-hook-form";
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
          <br />
          <p>
            ¿Quieres hacerme una cosulta? ¿tienes alguna duda al
            respecto?
          </p>
          <br />
          <p>
            Envíame un mensaje y llena el formulario. Tan pronto pueda atenderé
            la solicitud
          </p>
          <br />
        </Questions>

        <Form ref={form} onSubmit={handleSubmit(sendemail)}>
          <label>Nombre</label>
          <Input type="text" {...register("name",{required: true})}></Input>
          {errors.name?.type === "required" && <p>por favor escriba su nombre</p>}
          <label>Correo</label>
          <Input type="text" {...register("user_email", {pattern: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/})}></Input>
          {errors.user_email?.type  === "pattern" && <p>por favor escriba bien su correo</p>}
          <label>Mensaje</label>
          <Input type="text" {...register("message",{required: true})}></Input>
          {errors.message?.type === "required" && <p>por favor escriba su mesage</p>}

          <Buttom type="submit" value="Send">Enviar</Buttom>
        </Form>
      </Foores>
      <Fooone>
        <p>© 2022 todos los derechos reservados - yapy</p>
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
