import React, { useState } from 'react';
import DadosPessoais from "./DadosPessoais";
import DadosUsuario from "./DadosUsuario";
import DadosEntrega from "./DadosEntrega";

//esse formulario vai controlar quantos cadastros a gente vai ter
function FormularioCadastro({ aoEnviar, validarCPF }) {
  const [etapaAtual, setEtapaAtual] = useState(0);
  
  const formularios = [
  <DadosUsuario aoEnviar={proximo}/>,
  <DadosPessoais aoEnviar={proximo} validarCPF={validarCPF} />,
  <DadosEntrega aoEnviar={aoEnviar}/>,
  ];

  function proximo(dados){
    setEtapaAtual(etapaAtual + 1);
  }

  return <>{formularios[etapaAtual]}</>;
 }

//SwitchCase é possível ser colocado dentro de uma função do JS
//não é possível colocá-lo sozinho no react
//

export default FormularioCadastro;
