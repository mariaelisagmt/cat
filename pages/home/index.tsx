import React from 'react'
import Head from 'next/head'

import Header from '../../components/Header'
import Button from '../../components/Button'
import Option, { ContainerOption } from "../../components/Option";

const Roteiro: React.FC = () => {
  return (
    <div>
      <Header />
      <Head>Roteiro</Head>


      <div className="container mx-auto px-4 pt-10" >
        <ContainerOption className="mb-0 pb-3">
          <Option text="Robotica" value="robotica" />
          <Option text="Astenopia" value="astenopia" />
          <Option text="Faz fenda" value="fenda" />
          <Option text="Ardência" value="ardencia" />
          <Option text="Ver de longe" value="longe" />
          <Option text="Ver de perto" value="perto" />
          <Option text="Prurido" value="prurido" />
          <Option text="Revisão" value="revisao" />
          <Option text="Blefarite" value="blefarite" />
          <Option text="Dor ocular" value="dor-ocular" />
          <Option text="Embaçamento" value="embacamento" />
          <Option text="Dor de cabeça" value="dor-cabeca" />
          <Option text="Cansaço da visão" value="cansaco-visao" />
          <Option text="Miodesopcia" value="miodesopcia" />
          <Option text="Escurecimento" value="escurecimento" />
          <Option text="Retorno" value="retorno" />
          <Option text="Outros" value="outros" active={()=>{}} />
        </ContainerOption>
      </div>

    </div>
  )
}

export default Roteiro
