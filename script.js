//Função para deixar os botões funcionais
function insert(num) {
    //^\s*([-+]?)(\d+)(?:\s*([-+*\/])\s*((?:\s[-+])?\d+)\s*)+$
    var numero = document.getElementById("output").innerHTML
    document.getElementById("output").innerHTML = numero + num;
  }
  //Função para limpar todos os caracteres
  function clean() {
    document.getElementById("output").innerHTML = " "
  }
  //Função para limpar apenas um caractere
  function backClear() {
    var output = document.getElementById("output").innerHTML;
    document.getElementById("output").innerHTML = output.substring(0, output.length -1)
  }
  //Função para calcular os numeros 
  function calcular() {
    resultado = document.getElementById("output").innerHTML;
    if (resultado){
      document.getElementById("output").innerHTML = eval(resultado)
      //document.getElementById("resultado").innerHTML = eval(resultado)
    }
    else {
      document.getElementById("output").innerHTML = "Undefined"
    }
  }