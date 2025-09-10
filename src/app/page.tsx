"use client";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowDown, faLocation, faMessage, faPhone } from '@fortawesome/free-solid-svg-icons';
import { faLinkedinIn, faGithub, faInstagram } from '@fortawesome/free-brands-svg-icons';

import Image from "next/image";
import CardAbout from "@/components/card-about/CardAbout";
import CardTecnology from "@/components/card-tecnology/CardTecnology";
import { useEffect, useState } from "react";
import "@/app/globals.css";
import { Poppins } from "next/font/google";
import CardService from "@/components/card-service/CardService";
import CardProject from "@/components/card-project/CardProject";
import CardGithub from "@/components/card-github/CardGithub";
import CardContact from "@/components/card-contact/CardContact";
import { Project } from "@/model/typeProject";

const poppinsNormal = Poppins({
  subsets: ['latin'],
  weight: ['400'],
  variable: '--font-poppins',
});

export default function Home() {

  const [projects, setProjects] = useState<Project[]>([]);

  useEffect(() => {
    const resJson = fetch('/assets/json/projects.json').then(res => res.json())
    resJson.then(res => setProjects(res.projects));
  })

  const navigationGithub = () => {
    window.open("https://github.com/JoaoGabriel0908", "_blank");
  }

  const navigationLinkedin = () => {
    window.open("https://www.linkedin.com/in/jo%C3%A3o-gabriel0908/", "_blank");
  }

  const navigationInstagram = () => {
    window.open("https://www.instagram.com/serene.ui/", "_blank");
  }
  
  return (
    <div className={poppinsNormal.className + " h-full"}>
      <section className="flex flex-col section-height w-full position-relative m-auto" style={{ paddingTop: '64px' }}>
        <div className="flex flex-col items-center justify-center w-full h-full bg-opacity-50 container space-y-4 m-auto">
          <Image className="rounded-full" width={200} height={200} src={"/assets/images/perfil.png"} alt={""} />
          <div className="flex flex-col items-center justify-center space-y-2">
            <span className="text-black text-3xl mb-5">Olá, meu nome é João Gabriel</span>
            <span className="text-black text-sm">Desenvolvedor Front-End</span>
            <span className="text-black text-sm">& UI Designer</span>

            <div className="flex space-x-4">
              {/* <FontAwesomeIcon icon={faAdobe} /> */}
              <div className="cursor-pointer">
                <FontAwesomeIcon onClick={() => navigationGithub()} icon={faGithub} className="fas fa-check p-2 rounded-full bg-white shadow-sm text-black hover:text-gray-600 hover:-translate-y-0.5 hover:transition-all duration-300" style={{ height: 24, width: 24 }}
                ></FontAwesomeIcon>
              </div>

              <div className="cursor-pointer">
                <FontAwesomeIcon onClick={() => navigationLinkedin()} icon={faLinkedinIn} className="fas fa-check p-2 rounded-full bg-white shadow-sm text-black hover:text-gray-600 hover:-translate-y-0.5 hover:transition-all duration-300" style={{ height: 24, width: 24 }}
                ></FontAwesomeIcon>
              </div>

              <div className="cursor-pointer">
                <FontAwesomeIcon onClick={() => navigationInstagram()} icon={faInstagram} className="fas fa-check p-2 rounded-full bg-white shadow-sm text-black hover:text-gray-600 hover:-translate-y-0.5 hover:transition-all duration-300" style={{ height: 24, width: 24 }}
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

      <section className="flex flex-col section-height w-full position-relative justify-evenly m-auto" style={{ paddingTop: '64px' }} id="about">
        <div className="flex text-black justify-center items-center w-full my-5">
          <span className="text-2xl font-semibold">Sobre mim</span>
        </div>

        <div className="flex container text-black flex-row items-center w-full h-full space-x-6">
          <div className="flex flex-col space-y-4 w-full">
            <p className="">Meu nome é <span className="text-primary">João Gabriel</span>, tenho 22 anos.
              Formado em técnico em Desenvolvimento de Sistemas na escola Senai Professor Vicente Amato e
              atualmente cursando Engenharia de Software.</p>

            <p className="">Estou aprendendo tecnologias como HTML, CSS, JavaScript, React.js e React Native (Front-End).
              Banco de dados (modelagem e a estruturação do banco) com linguagens MySQL e
              estruturação back-end usando PHP, Java e Kotlin.</p>

            <button type="button" className="focus:outline-none 
              text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 
                font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 
              dark:focus:ring-green-800" style={{ width: 200 }}>Baixar Currículo</button>
          </div>

          <div className="flex flex-col items-center justify-center w-full">
            <div className="grid grid-cols-2 gap-4 items-center justify-items-center align-self-center">
              <CardAbout experience={"Anos de Estudo"} time={"3 +"}></CardAbout>
              <CardAbout experience={"Projetos"} time={"10 +"}></CardAbout>
              <CardAbout experience={"Tecnologias"} time={"5 +"}></CardAbout>
              <CardAbout experience={"Dedicação"} time={"100%"}></CardAbout>
            </div>
          </div>
        </div>
      </section>

      <section className="flex flex-col section-height w-full position-relative justify-evenly m-auto" style={{ paddingTop: '64px' }} id="technology">
        <div className="flex text-black justify-center items-center w-full my-5">
          <span className="text-2xl font-semibold">Tecnologias</span>
        </div>

        <div className="flex container justify-center text-black items-center w-full">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 content-center gap-4">
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
      </section>

      <section className="flex flex-col section-height w-full position-relative justify-evenly m-auto" style={{ paddingTop: '64px' }} id="service">
        <div className="flex text-black justify-center items-center w-full mb-5">
          <span className="text-2xl font-semibold">O que eu Faço?</span>
        </div>

        <div className="flex container justify-around text-black items-center w-full" style={{ gap: '16px' }}>
          <CardService
            title="Desenvolvimento Web"
            desc="Criação de sites modernos, responsivos e otimizados para todos os dispositivos, utilizando as tecnologias mais atuais do mercado."
            points={["Sites Responsivos", "Performance Otimizada", "SEO"]}
          ></CardService>

          <CardService title="Desenvolvimento Mobile"
            desc="Desenvolvimento de aplicativos mobile nativos e híbridos com React Native e Flutter, proporcionando excelente experiência do usuário."
            points={["Cross-Platform", "Interface Intuitiva", "Perfomance Nativa"]}>
          </CardService>

          <CardService title="UI/UX Design"
            desc="Design de interfaces modernas e funcionais, focando na experiência do usuário e na usabilidade dos produtos digitais."
            points={["Design Systems", "Prototipagem", "Testes de Usabilidade"]}>
          </CardService>
        </div>
      </section>

      <section className="flex flex-col section-height justify-evenly m-auto w-full position-relative" style={{ paddingTop: '64px' }} id="project">
        <div className="flex text-black justify-center items-center w-full mb-5">
          <span className="text-2xl font-semibold">Projetos</span>
        </div>

        <div className="flex flex-col container space-y-10 justify-around text-black items-center w-full">
          <div className="flex items-baseline flex-wrap justify-around w-full">
            {
              projects.map((project, index) => (
                <CardProject
                  key={index}
                  project={project}/>
              ))
            }
          </div>

          <div className="flex items-baseline flex-wrap space-y-2 justify-around w-full">
            <CardGithub
              title="Repositórios no GitHub"
              desc="Veja mais projetos que desenvolvi no meu repositório do GitHub."
            >
            </CardGithub>
          </div>

        </div>
      </section>

      <section className="flex flex-col section-height justify-evenly m-auto w-full position-relative" style={{ paddingTop: '64px' }} id="contact">
        <div className="flex text-black flex-col space-y-2 justify-center items-center w-full mb-5">
          <span className="text-2xl font-bold">Contato</span>
          <span>Entre em contato comigo pelas redes sociais ou mande uma mensagem!</span>
        </div>

        <div className="flex flex-row justify-evenly w-full">
          <div className="w-100 flex flex-col">
            <span className="text-black font-semibold mb-4">Informações de Contato</span>

            <div className="flex flex-col text-black space-y-5">
              <CardContact title="Email" desc="joaogabrielc700@gmail.com" icon={faMessage}></CardContact>
              <CardContact title="Celular" desc="(11) 97347-1291" icon={faPhone}></CardContact>
              <CardContact title="Localização" desc="São Paulo" icon={faLocation}></CardContact>

              <div className="flex flex-col space-y-4 bg-green-100 p-4 rounded-lg shadow-md border border-solid border-green-200 hover:bg-green-300 transition-colors duration-300 cursor-pointer hover:shadow-lg">
                <div className="flex flex-col">
                  <span className="font-medium">Vamos trabalhar juntos?</span>
                  <span className="text-sm font-extralight">Estou sempre interessado em novos projetos e oportunidades de colaboração.</span>
                </div>

                <button type="button" className="focus:outline-none 
                  text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 
                    font-medium rounded-lg text-sm px-5 py-2.5 dark:bg-green-600 dark:hover:bg-green-700 
                  dark:focus:ring-green-800 cursor-pointer" >Enviar E-mail</button>
              </div>
            </div>
          </div>

          <form method="POST" action="https://formsubmit.co/joaogabrielc700@gmail.com" className="flex flex-col w-100 p-5 border-1 border-solid border-gray-300 rounded-lg shadow-md justify-start">

            <span className="text-black font-semibold mb-2">Envie uma mensagem</span>

            <div className="flex flex-col space-y-4 my-5">
              <div className="flex justify-between space-x-2">
                <div className="mb-5">
                  <label className="block mb-2 text-sm font-medium text-gray-900">Seu Nome: </label>
                  <input type="text" id="email" name="nome" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="name@flowbite.com" required />
                </div>

                <div className="mb-5">
                  <label className="block mb-2 text-sm font-medium text-gray-900 ">Seu Email: </label>
                  <input type="email" id="email" name="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="name@flowbite.com" required />
                </div>
              </div>

              <div className="w-full">
                <label className="block mb-2 text-sm font-medium text-gray-900">Sua Mensagem</label>
                <textarea id="message" name="mensagem" style={{height: '150px'}} className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 resize-none" placeholder="Sua mensagem"></textarea>
              </div>
            </div>


            <button type="submit" className="focus:outline-none 
              text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 
                font-medium rounded-lg text-sm px-5 py-2.5 dark:bg-green-600 dark:hover:bg-green-700 
              dark:focus:ring-green-800 cursor-pointer">Enviar mensagem</button>
          </form>
        </div>
      </section>
    </div>

  );
}
