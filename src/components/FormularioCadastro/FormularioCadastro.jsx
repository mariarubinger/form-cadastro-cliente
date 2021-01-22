import React, { useState } from 'react';
import DadosPessoais from "./DadosPessoais";
import DadosUsuario from "./DadosUsuario";
import DadosEntrega from "./DadosEntrega";
import { Typography } from '@material-ui/core';

//esse formulario vai controlar quantos cadastros a gente vai ter
function FormularioCadastro({ aoEnviar, validarCPF }) {
  const [etapaAtual, setEtapaAtual] = useState(1);
  
  function formularioAtual(etapa) {
    switch (etapa) {
      case 0:
        return <DadosUsuario />;
      case 1:
        return <DadosPessoais aoEnviar={aoEnviar} validarCPF={validarCPF} />;
      case 2:
        return <DadosEntrega />;
      default:
        return <Typography>Erro ao selecionar formulário!</Typography>
    }
  }    
  
  return (
    <>
    {formularioAtual(etapaAtual)}
    </>
  );
}


//SwitchCase é possível ser colocado dentro de uma função do JS
//não é possível colocá-lo sozinho no react
//

export default FormularioCadastro;
