import React from "react";
import "./About.css";
import Gonzalo from "../../media/gonzalo.jpg";
import Cv from "../../media/cvGonzalo.pdf";

const About = () => {
  return (
    <div className="about-container">
      <div className="about-desc">
        <h3>Un poco sobre mí</h3>
        <p>
          Me formé como Full Stack Web Developer 💻 en Soy Henry. Durante todo
          este camino aprendí tecnologías como NodeJS, React, Redux, SQL,
          MongoDB, JavaScript, HTML, CSS, Taildwind. Además, soy egresado de la
          carrera de Tecnicatura en Periodismo deportivo, donde desarrollé
          capacidades para la redacción y la comunicación. 🎤 Experiencia
          Primero llevé a cabo un proyecto individual acerca de perros:
          "DogManía". Allí apliqué busquedas, filtrados, ordenamientos y
          creación. Segundo, participé de la creación de un E-Commerce (proyecto
          grupal) para la venta de Sneakers👟, donde decidimos aplicar
          tecnologías que desconocíamos, pero, que con mucha investigación,
          aprendimos. En esta etapa apliqué muchas soft skills, destacando la
          comunicación, trabajo en equipo, escucha activa y predisposición.
        </p>
        <br />
        <a href={Cv} donwload ><div class="button" data-tooltip="Size: 20Mb">
          <div class="button-wrapper">
            <div class="text">Download my cv</div>
            <span class="icon">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
                role="img"
                width="2em"
                height="2em"
                preserveAspectRatio="xMidYMid meet"
                viewBox="0 0 24 24"
              >
                <path
                  fill="none"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M12 15V3m0 12l-4-4m4 4l4-4M2 17l.621 2.485A2 2 0 0 0 4.561 21h14.878a2 2 0 0 0 1.94-1.515L22 17"
                ></path>
              </svg>
            </span>
          </div>
        </div>
        </a>
      </div>
      <div className="about-img">
        <img src={Gonzalo} alt="about" />
      </div>
    </div>
  );
};

export default About;
