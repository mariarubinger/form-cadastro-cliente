function validarCPF(cpf){
    if(cpf.length !== 11){
      return {valido:false, texto:"O CPF deve ter onze dígitos."}
    }else{
      return {valido:true, texto:""}
    }
  }

  function validarSenha(senha){
    if(senha.length < 4 || senha.length > 72){
      return {valido:false, texto:"Senha deve ter 4 e 72 dígitos."}
    }else{
      return {valido:true, texto:""}
    }
  }

  //tem que exportar essas duas funcionalidades
  export {validarCPF, validarSenha};