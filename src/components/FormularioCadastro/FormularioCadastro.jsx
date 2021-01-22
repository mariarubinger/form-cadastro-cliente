import React from 'react';
import DadosPessoais from "./DadosPessoais";
import DadosUsuario from "./DadosUsuario";

//esse formulario vai controlar quantos cadastros a gente vai ter
function FormularioCadastro({aoEnviar, validarCPF}) {

  return (
    <>
    <DadosPessoais aoEnviar={aoEnviar} validarCPF={validarCPF}/>
    <DadosUsuario/>
    </>
  );
}

export default FormularioCadastro;
