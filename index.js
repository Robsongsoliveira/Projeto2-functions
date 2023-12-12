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
