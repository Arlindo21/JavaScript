alert("Boas Vindas ao jogo dos números secretos ");
let numeroMaximo=5000;
let numeroSecreto = parseInt(Math.random() * numeroMaximo + 1 );
console.log(numeroSecreto);
let chute;
let tentativas = 1;
//
while(chute != numeroSecreto) {
    chute = prompt(`Escolha o numéro entre 1 e ${numeroMaximo}`);
    //condiçao se 
    if(chute == numeroSecreto){
        break;
       } else {
           if (chute > numeroSecreto) {
                   alert(`O número secreto é menor que ${chute}`);
           } else {
                   alert(`O número secreto é maior que ${chute}`);
           }
           
           //tentativas = tentativas + 1;
            tentativas ++
       }
   
       
}
 // aqui utilizamos um operdor ternário
let Paltentativas = tentativas >1 ? "tentativas" : "tentativa";
alert(`Isso ai! você descobriu o número secreto ${numeroSecreto} com ${tentativas} ${Paltentativas}.`);
//o codigo abaixo foi simplificado acima 
//if(tentativas>1){
//        alert(`Isso ai! você descobriu o número secreto ${numeroSecreto} com ${tentativas} tentativas.`);
//} else {
  //      alert(`Isso ai! você descobriu o número secreto ${numeroSecreto} com ${tentativas} tentativa.`);
//}


      
