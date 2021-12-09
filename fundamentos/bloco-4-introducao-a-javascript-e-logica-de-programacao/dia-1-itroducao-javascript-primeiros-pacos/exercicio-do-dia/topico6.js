let pecaDoXadrez = "rainha"

let movimento

switch (pecaDoXadrez) {
    case "peao":
        movimento = "O peão se movem somente para frente, uma casa por vez"
        
        break;
    
    case "bispo":
        movimento = "O bispo se move em uma linha reta diagonalmente no tabuleiro."
    
        break;
    
    case "torre":
        movimento = "A torre se move em linha reta horizontalmente e verticalmente pelo número de casas não ocupadas, até atingir o final do tabuleiro ou ser bloqueado por outra peça"
    
        break;
    
    case "cavalo":
        movimento = "O cavalo move-se por duas casas horizontalmente ou verticalmente e então uma casa a mais em uma ângulo reto."    

        break;

    case "rainha":
        movimento = "A rainha pode mover-se qualquer número de casas em linha reta - verticalmente, horizontalmente ou diagonalmente."
        
        break;

    case "rei":
        movimento = "O rei pode mover-se uma casa em qualquer direção: horizontalmente, verticalmente ou diagonalmente."
        
        break;

    default:
        movimento = "Peça invalida"

        break;
}

console.log(movimento)
