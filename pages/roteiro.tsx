import type { NextPage } from "next";
import Header from "../components/Header";
import Button from "../components/Button";
import Footer from "../components/Footer";
import Avaliation from "../components/Avaliation";
import Line from "../components/Line";
import Container from "../components/Container";

const Home: NextPage = () => {

  return (
    <>
      <Header />
      <div className="container mx-auto pt-10">
          <div className="flex flex-col ">
              <h1 className="text-4xl font-bold font-medium" >Roteiro de Avaliação do Pensamento Computacional</h1>
              <Container>
                <p className="text-2xl font-medium" >Avaliações Sugeridas</p>
                <Line />
                <div className="flex justify-between p-5">
                    <Button value="Diagnostica" />
                    <Button value="Somativa" />
                    <Button value="Formativa" />
                    <Button value="Progressiva" />
                </div>
              </Container>
          </div>
          <Container>            
            <p className="text-2xl font-medium" >Informações Detalhadas</p>
            <Line/>
            <Avaliation />
          </Container>
      </div>      
      <Footer />
    </>
  );
};

export default Home;