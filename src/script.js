// Tarefa 1 - Função para cálculo de salário;
function calculateSalary(fixedSalary, totalSold) {

    let salesUpToTwelveHundred = 3 / 100;
    let salesAboveTwelveHundred = 5 / 100;
    let parcialResult = 0;
    let result = 0;

    if(totalSold <= 1200) {

        totalSold *= salesUpToTwelveHundred;

    } else {

        parcialResult = totalSold - 1200;
        totalSold = (1200 * salesUpToTwelveHundred) + (parcialResult * salesAboveTwelveHundred);

    }

    result = fixedSalary + totalSold;

    return "Seu salário que era de R$" + fixedSalary + " passou a ser de R$" + result + ", pois, você ganhou uma comissão de R$" + totalSold + " por suas vendas realizadas.";

}
console.log(calculateSalary(1645, 1800));

// Tarefa 2 - Função para cálculo do estoque de uma loja;
function calculateStock(quantityInStock, maximumQuantityInStock, minimumQuantityInStock) {

    let averageQuantity = (maximumQuantityInStock + minimumQuantityInStock) / 2;
    let result = "";

    if(quantityInStock >= averageQuantity) {
        result += "Não efetuar compra!";
    } else {
        result += "Efetuar compra!";
    }
    return result;
}
console.log(calculateStock(20, 30, 15));

// Tarefa 3 - Função paara cálculo de idade;
function calculateAge(yearOfBirth, currentYear) {

    let ageInYears = currentYear - yearOfBirth;
    let ageInMonths = ageInYears * 12
    let ageInWeeks = ageInYears * 52;
    let ageInDays = ageInYears * 365;

    return "Você possui " + ageInYears + " anos de idade, " + ageInMonths + " meses de idade, " + ageInWeeks + " semanas de idade e possui " + ageInDays + " dias de idade.";
}
console.log(calculateAge(1996, 2021));

// Tarefa 4 - Função para encontrar diagonal de uma matriz quadrada;
function getDiagonal(squareMatrix) {

    let result = [];

    for(let line = 0; line < squareMatrix.length; line++) {
        for(let column = 0; column < squareMatrix[line].length; column++) {

            if(squareMatrix[line] === squareMatrix[column]) {
                result.push(squareMatrix[line][column]);
            }

        }
    }

    return result.join(', ');

}
const squareMatrix = [[1, 5, 9, 6], 
                      [2, 6, 8, 7], 
                      [3, 4, 7, 5],
                      [4, 7, 9, 5]];
console.log(getDiagonal(squareMatrix));

// Tarefa 5 - Função que simula um Caixa Eletrônico;
function cashMachine(integerValue) {

    let bankNote = [100, 50, 20, 10, 5, 2, 1];
    let countBankNote = 0;

    for(let index = 0; index < bankNote.length; index++) {

        let result = integerValue / bankNote[index];
        integerValue = integerValue % bankNote[index];
        countBankNote = parseInt(result);
                     
        if(countBankNote > 0) {
            console.log(countBankNote + " nota(s) de R$" + bankNote[index]);
        }
    }

}
console.log(cashMachine(383));