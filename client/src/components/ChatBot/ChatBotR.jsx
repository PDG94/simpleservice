import React from "react";
import ChatBot from "react-simple-chatbot"
import {Segment} from "semantic-ui-react"




export default function ChatBotR(){
     const steps = [
        {

            id: "Greet",
      
            message: "Hello, Welcome to Simple Service",
      
            trigger: "ask Name",
      
          },
      
          {
      
            id: "ask Name",
      
            message: "Please enter your name",
      
            trigger: "waiting",
      
          },
      
          {
      
            id: "waiting",
      
            user: true,
      
            trigger: "Name",
      
          },
      
          {
      
            id: "Name",
      
            message: "Hi {previousValue}, Please select your issue",
      
            trigger: "issues",
      
          },
      
          {
      
            id: "issues",
      
            options: [
      
              {
      
                value: "¿Cómo puedo registrarme en la aplicación?",
      
                label: "¿Cómo puedo registrarme en la aplicación?",
      
                trigger: "¿Cómo puedo registrarme en la aplicación?",
      
              },
      
              { value: "¿Cómo puedo buscar servicios en la aplicación?", label: "¿Cómo puedo buscar servicios en la aplicación?", trigger: "¿Cómo puedo buscar servicios en la aplicación?"},
              { value: "¿Cómo puedo contratar a alguien para un servicio?", label: "¿Cómo puedo contratar a alguien para un servicio?", trigger: "¿Cómo puedo contratar a alguien para un servicio?"},
              { value: "¿Cómo puedo crear un perfil para ofrecer mis servicios?", label: "¿Cómo puedo crear un perfil para ofrecer mis servicios?", trigger:"¿Cómo puedo crear un perfil para ofrecer mis servicios?"},
              { value: "¿Cómo puedo buscar servicios disponibles en la plataforma?", label: "¿Cómo puedo buscar servicios disponibles en la plataforma?", trigger:"¿Cómo puedo buscar servicios disponibles en la plataforma?"},
              { value: "¿Cómo puedo pagar por un servicio?", label: "¿Cómo puedo pagar por un servicio?", trigger:"¿Cómo puedo pagar por un servicio?"},
              { value: "¿Cómo puedo calificar a un proveedor de servicios después de haber recibido el servicio?", label: "¿Cómo puedo calificar a un proveedor de servicios después de haber recibido el servicio?", trigger:"¿Cómo puedo calificar a un proveedor de servicios después de haber recibido el servicio?"},
              { value: "Mas", label: "Mas", trigger:"Mas"},
            ],
      
          },
      
          {
      
            id: "¿Cómo puedo registrarme en la aplicación?",
      
            component: (
              <div color="red"> This is an example component </div>
            ),
      
            end: true,
      
          },
      
          {
      
            id: "¿Cómo puedo buscar servicios en la aplicación?",
      
            message:
      
              "Puedes buscar servicios en la aplicación utilizando la barra de búsqueda en la pantalla principal. También puedes filtrar los resultados por categoría, ubicación y otros criterios.",
      
            end: true,
      
          },
          {
      
            id: "¿Cómo puedo contratar a alguien para un servicio?",
      
            message:
      
              "Para contratar a alguien para un servicio, selecciona el perfil del proveedor de servicios que deseas contratar y sigue las instrucciones para hacer una solicitud de servicio. También puedes enviar un mensaje directamente al proveedor para obtener más información.",
      
            end: true,
      
          },
          {
      
            id: "¿Cómo puedo crear un perfil para ofrecer mis servicios?",
      
            message:
      
              "Para crear tu perfil, simplemente haz clic en la opción `${Regístrate}` en la página de inicio y sigue las instrucciones para crear tu cuenta. ",
      
            end: true,
      
          },
          {
      
            id: "¿Cómo puedo buscar servicios disponibles en la plataforma?",
      
            message:
      
              "Puedes buscar servicios disponibles en la plataforma utilizando el cuadro de búsqueda en la página de inicio o navegando por las categorías en la sección de `Servicios`.",
      
            end: true,
      
          },
          {
      
            id: "¿Cómo puedo pagar por un servicio?",
      
            message:
      
              "Puedes pagar por un servicio usando los métodos de pago disponibles en la plataforma, que pueden incluir tarjeta de crédito, transferencia bancaria o pago en efectivo. Una vez que hayas seleccionado un servicio, podrás elegir el método de pago que prefieras.",
      
            end: true,
      
          },
          {
      
            id: "¿Cómo puedo calificar a un proveedor de servicios después de haber recibido el servicio?",
      
            message:
      
              "Para cancelar un servicio que ya has reservado, ve a la página del servicio y haz clic en `Cancelar reserva`.Ten en cuenta que es posible que se apliquen cargos por cancelación según las políticas del proveedor de servicios.",
            end: true,
      
          },
          {
      
            id: "¿Cómo puedo calificar a un proveedor de servicios después de haber recibido el servicio?",
      
            message:
      
              "Después de haber recibido el servicio, puedes calificar al proveedor y dejar un comentario sobre tu experiencia. Para hacerlo, simplemente ve a la página del servicio y haz clic en  `Calificar y comentar`",
            end: true,
      
          },
          {
      
            id: "Mas",
      
            options: [
      
              {
      
                value: "¿Cómo puedo cancelar un servicio que ya he reservado?",
      
                label: "¿Cómo puedo cancelar un servicio que ya he reservado?",
      
                trigger: "¿Cómo puedo cancelar un servicio que ya he reservado?",
      
              },
      
              { value: "¿Cómo puedo ponerme en contacto con un proveedor de servicios antes de reservar su servicio?", label: "¿Cómo puedo ponerme en contacto con un proveedor de servicios antes de reservar su servicio?", trigger: "¿Cómo puedo ponerme en contacto con un proveedor de servicios antes de reservar su servicio?"},
              { value: "¿Cómo puedo recibir ayuda si tengo algún problema o pregunta sobre la plataforma?", label: "¿Cómo puedo recibir ayuda si tengo algún problema o pregunta sobre la plataforma?", trigger: "¿Cómo puedo recibir ayuda si tengo algún problema o pregunta sobre la plataforma?"},
              { value: "¿Cómo puedo verificar la reputación de un proveedor de servicios antes de reservar su servicio?", label: "¿Cómo puedo verificar la reputación de un proveedor de servicios antes de reservar su servicio?", trigger:"¿Cómo puedo verificar la reputación de un proveedor de servicios antes de reservar su servicio?"},
              { value: "¿Cómo puedo promocionar mis servicios en la plataforma?", label: "¿Cómo puedo promocionar mis servicios en la plataforma?", trigger:"¿Cómo puedo promocionar mis servicios en la plataforma?"},
              { value: "¿Cómo puedo obtener ayuda para crear mi perfil y establecer mis servicios en la plataforma?", label: "¿Cómo puedo obtener ayuda para crear mi perfil y establecer mis servicios en la plataforma?", trigger:"¿Cómo puedo obtener ayuda para crear mi perfil y establecer mis servicios en la plataforma?"},
              { value: "Volver", label: "Volver", trigger:"Volver"},
            ],
          },
      
          {
      
            id: "¿Cómo puedo cancelar un servicio que ya he reservado?",
      
            message:
      
              "Para cancelar un servicio que ya has reservado, ve a la página del servicio y haz clic en `Cancelar reserva`. Ten en cuenta que es posible que se apliquen cargos por cancelación según las políticas del proveedor de servicios.",
      
            end: true,
      
          },
          {
      
            id: "¿Cómo puedo ponerme en contacto con un proveedor de servicios antes de reservar su servicio?",
      
            message:
      
            "Puedes poner en contacto con un proveedor de servicios antes de reservar su servicio utilizando la función de mensajería en la plataforma. Simplemente ve a la página del servicio y haz clic en `Enviar mensaje al proveedor`.",
      
            end: true,
      
          },
          {
      
            id: "¿Cómo puedo recibir ayuda si tengo algún problema o pregunta sobre la plataforma?",
      
            message:
      
            "Si tienes algún problema o pregunta sobre la plataforma, puedes contactar al equipo de soporte a través de la sección `Ayuda` en la página de inicio o enviando un correo electrónico a la dirección de soporte proporcionada en la página de contacto.",
      
            end: true,
      
          },
          {
      
            id: "¿Cómo puedo verificar la reputación de un proveedor de servicios antes de reservar su servicio?",
      
            message:
      
            "Puedes verificar la reputación de un proveedor de servicios viendo su perfil, donde encontrarás información sobre su historial de servicios y las calificaciones y comentarios de otros usuarios que han reservado sus servicios.",
      
            end: true,
      
          },
          {
      
            id: "¿Cómo puedo promocionar mis servicios en la plataforma?",
      
            message:
      
            "Para promocionar tus servicios en la plataforma, asegúrate de tener un perfil completo y atractivo con información detallada sobre tus servicios y experiencia. También puedes ofrecer promociones y descuentos para atraer a más usuarios a reservar tus servicios.",
      
            end: true,
      
          },
          {
      
            id: "¿Cómo puedo obtener ayuda para crear mi perfil y establecer mis servicios en la plataforma?",
      
            message:
      
            "Si necesitas ayuda para crear tu perfil y establecer tus servicios en la plataforma, puedes contactar al equipo de soporte para obtener asistencia personalizada y orientación paso a paso.",
      
            end: true,
          },
          
         {
          id: "Volver",

          message:
            "Issues",
            
          trigger: "issues",
         }
        ]; 


    return(
       <>
 
<div>
  <h1>Chat</h1>
  <Segment>
  <ChatBot steps={steps}/>

  </Segment>
</div>
       </>
    )
}


