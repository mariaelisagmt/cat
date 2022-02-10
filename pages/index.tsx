import type { NextPage } from "next";
import Image from "next/image";
import Header from "../components/Header";
import Button from "../components/Button";

import PersonThinking from "../assets/person-thinking.png";

const Home: NextPage = () => {

  return (
    <>
      <Header />

      <div className="container mx-auto pt-24">

        <div className="flex justify-between">
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

          <div className="image w-1/2">
            <Image src={PersonThinking} alt="Logo" />
          </div>

        </div>

      </div>
    </>
  );
};

export default Home;
