import type { NextPage } from "next";
import Image from "next/image";
import Header from "../components/Header";
import Button from "../components/Button";
import Tag from "../components/Tag";
import Footer from "../components/Footer";

import PersonThinking from "../assets/person-thinking.png";
import Peoples from "../assets/peoples.png";

const Home: NextPage = () => {

  return (
    <>
      <Header />

      <div className="container mx-auto pt-24">

        <div className="flex justify-between p-5">
          <div className="flex flex-col w-1/2">
            <h1 className="text-4xl font-medium" >Como avaliar o pensamento<br/>computacional?</h1>

            <p className="my-5 text-2xl" >
              Essa e outras perguntas você responde aqui,
              peacock é um ambiente totalmente voltado ao ensino
              e avaliação do pensamento computacional, aqui você
              realizará testes rápidos e avaliações para medir o seu nível!
            </p>

            <Button value="Monte a sua avaliação" />

          </div>

          <div className="image w-1/2 flex align-center justify-center">
            <Image src={PersonThinking} alt="Logo" />
          </div>
        </div>

        <div className="flex justify-between p-5">
          <div className="image w-1/2">
            <Image src={Peoples} alt="Logo" />
          </div>
          <div className="flex flex-col align-center justify-center w-1/2">
            <h1 className="text-4xl font-medium leading-normal" >
              Um espaço para <br /> diversos perfis:<br />
              Alunos, professores e <br /> instituições...
            </h1>
          </div>
        </div>

        <div className="flex flex-col justify-center align-center p-5">
          <h1 className="text-4xl font-medium text-center mb-6" >
            Tipos de Ferramentas de Avaliação do PC 
          </h1>

          <div className="flex flex-wrap align-center justify-center">
            <Tag value="Ferramentas Somativas"/>
            <Tag value="Ferramentas Somativas"/>
            <Tag value="Ferramentas Somativas"/>
            <Tag value="Ferramentas Somativas"/>
            <Tag value="Ferramentas Somativas"/>
            <Tag value="Ferramentas Somativas"/>
            <Tag value="Ferramentas Somativas"/>
            <Tag value="Ferramentas Somativas"/>
          </div>

        </div>
      </div>      
      <Footer />
    </>
  );
};

export default Home;
