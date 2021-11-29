let state = "reprovada";
switch(state){
    case "aprovada":
        console.log("Parabéns, você foi aprovado")
        break;
    
    case "lista":
    console.log("Você está na nossa lista de espera")
        break;

    case "reprovada":
        console.log("Você foi reprovado")
        break;
    
    default: 
        console.log("Valor não identificado")
}