      const calcular = document.getElementById('calcular');

      function imc() {

      const nome = document.getElementById('nome').value;
      var altura = document.getElementById('altura').value;
      var peso = document.getElementById('peso').value;
      const resultado = document.getElementById('resultado');

      if (nome !=='' && altura !=='' && peso !=='') {

      const valorIMC = ((altura*altura)/peso).toFixed(0);

      var clasf = '';
      
      if(valorIMC < 18.5) {
      clasf ='abaixo do peso.';
      }else if (valorIMC >= 25 && imc < 30 ) {
      clasf ='Peso Esta Ideal Parabens!!.';
      }else if (valorIMC >= 30 && imc < 35) {
      clasf ='Levemente acima do Peso!.';
      }else if (valorIMC >= 35 && imc < 40) {
      clasf ='Obesidade Grau I, cuidado!';
      }else if (valorIMC >= 40 && imc < 45){
      clasf ='Obesidade Grau II, cuidado!';
      }else {
      clasf ='Obesidade Grau III, cuidado!';
      }

      resultado.textContent =`${nome} seu IMC é ${valorIMC} voce  ${clasf}`;
      }else {
      resultado.textContent = 'Preencha todos os campos!!!';
      }
      }
      calcular.addEventListener('click', imc);