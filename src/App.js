import React, { Component } from 'react';
import "./App.css";
import FormularioCadastro from "./components/FormularioCadastro/FormularioCadastro";
import 'fontsource-roboto';
import { Container, Typography } from "@material-ui/core";

class App extends Component {
  render(){
    return (
      <Container component="article" maxWidth="sm">
        <Typography variant="h3" component="h1" align="center">Formulário de cadastro</Typography>
        <FormularioCadastro aoEnviar={aoEnviarForm} validarCPF={validarCPF} /> 
      </Container>
    );
  }
}

//ao enviar é uma propriedade

function aoEnviarForm(dados){
  console.log(dados);
}

//essa função vai ser passada p/ uma propriedade do nosso FormularioCadastro
function validarCPF(cpf){
  if(cpf.length !== 11){
    return {valido:false, texto:"O CPF deve ter onze dígitos."}
  }else{
    return {valido:true, texto:""}
  }
}

export default App;
