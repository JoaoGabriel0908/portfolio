import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowDown } from '@fortawesome/free-solid-svg-icons';
import { faLinkedinIn, faGithub, faInstagram } from '@fortawesome/free-brands-svg-icons';

import Image from "next/image";
import CardAbout from "@/components/card-about/CardAbout";
import CardTecnology from "@/components/card-tecnology/CartTecnology";

export default function Home() {

  return (
    <div className="h-full">
      <section className="flex flex-col section-height w-full position-relative">
        <div className="flex flex-col items-center justify-center w-full h-full bg-opacity-50 container">
          <Image className="rounded-full" width={200} height={200} src={"/assets/images/perfil.png"} alt={""} />
          <div className="flex flex-col items-center justify-center space-y-2">
            <span className="text-black text-3xl mb-5">Olá, meu nome é João Gabriel</span>
            <span className="text-black text-sm">Desenvolvedor Front-End</span>
            <span className="text-black text-sm">& UI Designer</span>

            <div className="flex space-x-4">
              {/* <FontAwesomeIcon icon={faAdobe} /> */}
              <div className="rounded-full bg-white shadow-md p-2 cursor-pointer">
                <FontAwesomeIcon icon={faGithub} className="fas fa-check" style={{ color: 'black', height: 24, width: 24 }}
                ></FontAwesomeIcon>
              </div>

              <div className="rounded-full bg-white shadow-md p-2 cursor-pointer">
                <FontAwesomeIcon icon={faLinkedinIn} className="fas fa-check" style={{ color: 'black', height: 24, width: 24 }}
                ></FontAwesomeIcon>
              </div>

              <div className="rounded-full bg-white shadow-md p-2 cursor-pointer">
                <FontAwesomeIcon icon={faInstagram} className="fas fa-check" style={{ color: 'black', height: 24, width: 24 }}
                ></FontAwesomeIcon>
              </div>
            </div>
          </div>
        </div>

        <div className="position-absolute bottom-0 flex align-items-center justify-content-center">
          <FontAwesomeIcon icon={faArrowDown} className="fas fa-check" style={{ color: 'black', height: 24, width: 24 }}
          ></FontAwesomeIcon>
        </div>
      </section>

      <section className="flex flex-col section-height w-full position-relative">
        <div className="container text-black flex flex-col justify-evenly h-full">
          <div className="flex justify-center items-center w-full mb-5">
            <span className="text-2xl">Sobre mim</span>
          </div>

          <div className="flex flex-row items-center justify-content-center w-full">
            <div className="flex flex-col w-1/2 space-y-4">
              <p>Meu nome é João Gabriel Costa Flor, tenho 21 anos.
                Formado em técnico em Desenvolvimento de Sistemas na escola Senai Professor Vicente Amato e
                atualmente cursando Engenharia de Software, pela Estácio</p>

              <p>Estou aprendendo tecnologias como HTML, CSS, JavaScript, React.js e React Native (Front-End).
                Banco de dados (modelagem e a estruturação do banco) com linguagens MySQL e
                estruturação back-end usando PHP, Java e Kotlin.</p>

              <button type="button" className="focus:outline-none 
              text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 
                font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 
              dark:focus:ring-green-800" style={{ width: 200 }}>Baixar Curriculum</button>
            </div>

            <div className="w-1/2 grid grid-cols-2 gap-4 items-center justify-items-center align-self-center">
              <CardAbout experience={"Anos de Estudo"} time={"2 +"}></CardAbout>
              <CardAbout experience={"Projetos"} time={"10 +"}></CardAbout>
              <CardAbout experience={"Tecnologias"} time={"5 +"}></CardAbout>
              <CardAbout experience={"Dedicação"} time={"100%"}></CardAbout>
            </div>
          </div>
        </div>
      </section>

      <section className="flex flex-col section-height w-full position-relative">
        <div className="container text-black flex flex-col justify-evenly h-full">
          <div className="flex justify-center items-center w-full mb-5">
            <span className="text-2xl">Tecnologias</span>
          </div>

          <div className="flex justify-center items-center w-full mb-5">
            <div className="grid grid-flow-col grid-rows-2 gap-4">
              <CardTecnology name={"Javascript"} logoTec={"/assets/logos/JavaScript-logo.png"}></CardTecnology>
              <CardTecnology name={"Typescript"} logoTec={"/assets/logos/Typescript_logo_2020.svg.png"}></CardTecnology>
              <CardTecnology name={"Angular"} logoTec={"/assets/logos/Angular_full_color_logo.svg.png"}></CardTecnology>
              <CardTecnology name={"Next.js"} logoTec={"/assets/logos/nextjs-icon.svg"}></CardTecnology>
              <CardTecnology name={"PHP"} logoTec={"/assets/logos/PHP-logo.svg.png"}></CardTecnology>
              <CardTecnology name={"Java"} logoTec={"/assets/logos/4844510.svg"}></CardTecnology>
              <CardTecnology name={"MySQL"} logoTec={"/assets/logos/MySQL-Logo.wine.png"}></CardTecnology>
              <CardTecnology name={"Flutter"} logoTec={"/assets/logos/flutter.png"}></CardTecnology>
              <CardTecnology name={"Dart"} logoTec={"/assets/logos/Dart_(programming_language)-Logo.wine.png"}></CardTecnology>
              <CardTecnology name={"React-Native"} logoTec={"/assets/logos/React-Native-Logo.png"}></CardTecnology>
            </div>
          </div>
        </div>
      </section>
    </div>

  );
}
