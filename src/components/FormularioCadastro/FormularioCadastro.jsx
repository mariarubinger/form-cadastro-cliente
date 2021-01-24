import React, { useState, useEffect } from 'react';
import DadosPessoais from "./DadosPessoais";
import DadosUsuario from "./DadosUsuario";
import DadosEntrega from "./DadosEntrega";
import { Typography, Stepper, Step, StepLabel } from '@material-ui/core';

//esse formulario vai controlar quantos cadastros a gente vai ter
function FormularioCadastro({ aoEnviar, validacoes }) {
  const [etapaAtual, setEtapaAtual] = useState(0);
  const [dadosColetados, setDados] = useState({});
  
  useEffect(()=>{
    if(etapaAtual === formularios.length-1)
    aoEnviar(dadosColetados);
  })

  const formularios = [
  <DadosUsuario aoEnviar={coletarDados} validacoes={validacoes}/>,
  <DadosPessoais aoEnviar={coletarDados} validacoes={validacoes}/>,
  <DadosEntrega aoEnviar={coletarDados} validacoes={validacoes}/>,
  <Typography variant="h5">Obrigado pelo cadastro!</Typography>
  ];

  function coletarDados(dados){
    setDados({...dadosColetados, ...dados});
    proximo();
  }

  function proximo(dados){
    setEtapaAtual(etapaAtual + 1);
  }

  return <>
  <Stepper activeStep={etapaAtual}>
    <Step><StepLabel>Login</StepLabel></Step>
    <Step><StepLabel>Pessoal</StepLabel></Step>
    <Step><StepLabel>Entrega</StepLabel></Step>
    <Step><StepLabel>Finalização</StepLabel></Step>
  </Stepper>
  {formularios[etapaAtual]}
  </>;
}

  //SwitchCase é possível ser colocado dentro de uma função do JS
  //não é possível colocá-lo sozinho no react

export default FormularioCadastro;
