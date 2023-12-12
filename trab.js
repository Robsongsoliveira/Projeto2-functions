//Instruções para entrega
//# 1️ Desafio Classificador de nível de Herói
//**O Que deve ser utilizado**
//- Variáveis
//- Operadores
//- Laços de repetição
//- Estruturas de decisões
//## Objetivo
//Crie uma variável para armazenar o nome e a quantidade de experiência (XP) de um herói, 
//depois utilize uma estrutura de decisão para apresentar alguma das mensagens abaixo:
//Se XP for menor do que 1.000 = Ferro
//Se XP for entre 1.001 e 2.000 = Bronze
//Se XP for entre 2.001 e 5.000 = Prata
//Se XP for entre 6.001 e 7.000 = Ouro
//Se XP for entre 7.001 e 8.000 = Platina
//Se XP for entre 8.001 e 9.000 = Ascendente
//Se XP for entre 9.001 e 10.000= Imortal
//Se XP for maior ou igual a 10.001 = Radiante
//## Saída
//Ao final deve se exibir uma mensagem:
//"O Herói de nome **{nome}** está no nível de **{nivel}**"

let nome = "Robsu"
let XPHeroi = 8341
let elo = ""

        if(XPHeroi < 1000){
            console.log("O número de pontos é: " + XPHeroi +" e pertence ao elo Ferro")
        elo = "Ferro"
        }
    else if (XPHeroi > 1000 && XPHeroi <= 2000){
        console.log("O número de pontos é: " + XPHeroi + " e pertence ao elo Bronze")
        elo = "Bronze"
    }else if (XPHeroi >= 2001 && XPHeroi < 5000){
        console.log("O número de pontos é: " + XPHeroi + " e pertence ao elo Prata")
        elo = "Prata"
    }else if(XPHeroi >= 6001 && XPHeroi < 7000){
        console.log("O número de pontos é: " + XPHeroi + " e pertence ao elo Ouro")
        elo = "Ouro"
    }else if(XPHeroi >= 7001 && XPHeroi < 8000){
        console.log("O número de pontos é: " + XPHeroi + " e pertence ao elo Platina")
        elo = "Platina"
    }else if(XPHeroi >= 8001 && XPHeroi < 9000){
        console.log("O número de pontos é: " + XPHeroi + " e pertence ao elo Ascendente")
        elo = "Ascendente"
    }else if(XPHeroi >= 9001 && XPHeroi < 10000){
        console.log("O número de pontos é: " + XPHeroi + " e pertence ao elo Imortal")
        elo = "Imortal"
    }else if(XPHeroi>=10001){
        console.log("O número de pontos é: " + XPHeroi + " e pertence ao elo Radiante")
        elo = "Radiante"
    }
    console.log("O nome do herói é " + nome + " está no nível de " + elo)