function calcular(valor_1, valor_2, operador){
    switch(operador){
        case '+':
            return valor_1 + valor_2
        case '-':
            return valor_1 - valor_2
        case '*':
            return valor_1 * valor_2
        case '/':
            return valor_1 / valor_2
        case '**':
            return valor_1 ** valor_2
    }
}
console.log(calcular(10, 20, '+'))
console.log(calcular(10, 20, '-'))
console.log(calcular(10, 20, '*'))
console.log(calcular(10, 20, '/'))
console.log(calcular(10, 2, '**'))