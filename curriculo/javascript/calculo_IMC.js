let imc 

function classificar_IMC(sexo, peso, altura){
    imc = peso/(altura ** 2)
    switch(sexo){
        case 'feminino':
            if (imc < 19.1) {
                return 'Abaixo do Peso'
            }
            else if (imc < 25.8) {
                return 'Peso Normal'
            }
            else if (imc < 27.3) {
                return 'Marginalmente Acima do Peso'
            } else if (imc < 32.3) {
                return 'Acima do Peso Ideal'
            } else {
                    return 'Obeso'
            }
        
            
        case 'masculino':
            if (imc < 20.7) {
                return 'Abaixo do Peso'
            }
            else if (imc < 26.4) {
                return 'Peso Normal'
            }
            else if (imc < 27.8) {
                return 'Marginalmente Acima do Peso'
            } else if (imc < 31.1) {
                return 'Acima do Peso Ideal'
            } else {
                    return 'Obeso'
            }
        default:
            return 'Invalid'
    }
}

console.log(classificar_IMC('masculino', 90, 1.95))
console.log(classificar_IMC('feminino', 77, 1.65))
console.log(classificar_IMC('error', 100, 2))