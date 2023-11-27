function defineBalanceRank(victory, defeat) {
    let balanceRank = victory - defeat;
    return balanceRank;
}

function defineRank(heroName, victory, defeat) {

    let balanceRank = defineBalanceRank(victory, defeat);
    const message = "O heroi " + heroName + " tem o saldo de " + balanceRank + " e está no nivel: "


    if (balanceRank <= 10) {
        return message + "ferro"
    } else if (balanceRank >= 11 && balanceRank <= 20) {
        return message + "bronze"
    } else if (balanceRank >= 21 && balanceRank <= 50) {
        return message + "prata"
    } else if (balanceRank >= 51 && balanceRank <= 80) {
        return message + "ouro"
    } else if (balanceRank >= 81 && balanceRank <= 90) {
        return message + "diamante"
    } else if (balanceRank >= 91 && balanceRank <= 100) {
        return message + "lendário"
    } else if (balanceRank >= 101) {
        return message + "imortal"
    }
}


function defineHeroListAnStatus() {
        
    let heroes = [
        { name: "Joy", victory: 30, defeat: 9 },
        { name: "Luxy", victory: 78, defeat: 92 },
        { name: "MAxy", victory: 80, defeat: 10 },
        { name: "Lucky", victory: 145, defeat: 45 },
        { name: "Foxy", victory: 585, defeat: 100 }

    ];

    for (let i = 0; i < heroes.length; i++) {
        let status = defineRank(heroes[i].name, heroes[i].victory, heroes[i].defeat);
        console.log(status);
}

}


function cabeçalho() {
    console.log("")
    console.log("********************************")
    console.log("Calculadora de partidas Rankeadas")
    console.log("********************************")
    console.log("")

}

function main() {
    cabeçalho();
    defineHeroListAnStatus();

}

main()